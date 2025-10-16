const random = Math.random();

onmessage = e => {
    console.log(`Received from main: ${e.data}`);
    postMessage(random);
}

onerror = e => {
    console.error(e.error);
    e.preventDefault();
}