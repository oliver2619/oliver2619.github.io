"use strict";
let engineExports;
let onMoveResult;
globalThis.onmessage = (e) => {
    const message = e.data;
    switch (message.name) {
        case 'getValidMoves':
            onGetValidMoves(message);
            break;
        case 'init':
            onInit(message);
            break;
        case 'move':
            onMove(message);
            break;
        case 'rate':
            onRate(message);
    }
};
globalThis.onerror = (ev, src, lineno, colno, error) => {
    console.error(`Error in worker thread ${src}:${lineno}:${colno}:`);
    console.error(error);
    if (ev instanceof Event) {
        ev.preventDefault();
    }
};
function onGetValidMoves(msg) {
    if (engineExports == undefined) {
        throw new Error('WASM module not loaded');
    }
    const ret = {
        name: 'validMoves',
        moveMask: engineExports.getValidMoves(msg.blackMask, msg.whiteMask, msg.colorOnTurn),
    };
    globalThis.postMessage(ret);
}
function onInit(msg) {
    const imports = {
        env: {
            abort: () => console.log('Aborted'),
        },
        base: {
            getMoveResult: (blackMask, whiteMask, colorOnTurn) => {
                if (onMoveResult != undefined) {
                    onMoveResult(blackMask, whiteMask, colorOnTurn);
                }
            },
        },
    };
    WebAssembly
        .instantiate(msg.wasmModule, imports)
        .then(instance => engineExports = instance.exports)
        .then(() => {
        msg.fieldRating.forEach((r, f) => engineExports.setFieldRating(f, r));
        engineExports.setRatingWeights(msg.maxRating, msg.dynamicWeight);
    });
}
function onMove(msg) {
    if (engineExports == undefined) {
        throw new Error('WASM module not loaded');
    }
    let response = {
        name: 'moved',
        blackMask: 0n,
        whiteMask: 0n,
        colorOnTurn: 0,
    };
    onMoveResult = (bm, wm, cot) => {
        response = {
            name: 'moved',
            blackMask: bm,
            whiteMask: wm,
            colorOnTurn: cot
        };
    };
    engineExports.move(msg.blackMask, msg.whiteMask, msg.colorOnTurn, msg.field);
    onMoveResult = undefined;
    globalThis.postMessage(response);
}
function onRate(msg) {
    if (engineExports == undefined) {
        throw new Error('WASM module not loaded');
    }
    const result = {
        name: 'rating',
        rating: engineExports.rate(msg.blackMask, msg.whiteMask, msg.colorOnTurn, msg.depth),
    };
    globalThis.postMessage(result);
}
