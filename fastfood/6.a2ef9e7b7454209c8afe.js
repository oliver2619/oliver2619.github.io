(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ekgB:function(e,t,i){"use strict";i.r(t),i.d(t,"GameModule",function(){return q});var s=i("ofXK"),n=i("tyNb"),r=i("4EtV"),a=i("XNiG"),c=i("fXoL"),o=i("0QSR"),b=i("9zBX");function l(e,t){if(1&e){const e=c.Ob();c.Nb(0,"div",7),c.Nb(1,"label"),c.ic(2),c.Jb(3,"img",8),c.Mb(),c.Jb(4,"input",9),c.Nb(5,"button",10),c.Ub("click",function(){c.ec(e);const i=t.$implicit;return c.Wb().harvest(i.soil)}),c.ic(6,"+"),c.Mb(),c.Mb()}if(2&e){const e=t.$implicit;c.wb(2),c.kc("",e.harvestAmount,"\xd7\xa0"),c.wb(1),c.bc("src","assets/images/",e.soil,".png",c.fc),c.wb(1),c.ac("value",e.amount),c.wb(1),c.ac("disabled",!e.canHarvest)}}let h=(()=>{class e{constructor(e,t){this.gameService=e,this.changeDetectorRef=t,this.onClose=new a.a,this.observer={resourcesChange:()=>this.changeDetectorRef.markForCheck(),turnChange:()=>this.checkClose()}}get playerColor(){return void 0!==this.player?this.gameService.getPlayerColorName(this.player):""}get soils(){const e=this.player;return void 0!==e?r.b.getAll().map(t=>({amount:this.gameService.getSoilsForPlayer(e,t),soil:t,harvestAmount:this.gameService.getHarvestAmount(e,t),canHarvest:this.gameService.canHarvest(e,t)})):[]}ngOnDestroy(){this.gameService.removeObserver(this.observer)}ngOnInit(){this.gameService.addObserver(this.observer)}harvest(e){this.gameService.harvest(this.player,e),this.checkClose()}checkClose(){this.gameService.canHarvestAnything(this.player)||this.onClose.next()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-harvest"]],decls:7,vars:3,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","harvest"],[1,"body"],[1,"grid-2"],["class","input-group",4,"ngFor","ngForOf"],[1,"input-group"],[3,"src"],["type","number","readonly","readonly","max","99","min","0",3,"value"],["type","button",3,"disabled","click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"div",5),c.hc(6,l,7,4,"div",6),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(3),c.yb(t.playerColor),c.wb(3),c.ac("ngForOf",t.soils))},directives:[b.a,s.j],styles:[""],changeDetection:0}),e})();var u=i("rhnQ");function g(e,t){1&e&&c.Jb(0,"img",15),2&e&&c.bc("src","assets/images/",t.$implicit,".png",c.fc)}const m=function(e){return{visibility:e}};function v(e,t){if(1&e){const e=c.Ob();c.Nb(0,"tr"),c.Nb(1,"td",10),c.hc(2,g,1,1,"img",11),c.Mb(),c.Nb(3,"td",12),c.ic(4),c.Mb(),c.Nb(5,"td",12),c.ic(6),c.Xb(7,"number"),c.Mb(),c.Nb(8,"td"),c.Nb(9,"button",13),c.Ub("click",function(){c.ec(e);const i=t.$implicit;return c.Wb().sell(i)}),c.Jb(10,"img",14),c.Mb(),c.Mb(),c.Mb()}if(2&e){const e=t.$implicit,i=c.Wb();c.wb(2),c.ac("ngForOf",e.soils),c.wb(2),c.kc("",i.getAmount(e),"\xd7"),c.wb(2),c.kc("",c.Zb(7,4,e.price,"1.0-0")," kC"),c.wb(3),c.ac("ngStyle",c.cc(7,m,i.canSell(e)?"visible":"hidden"))}}let d=(()=>{class e{constructor(e,t,i){this.gameService=e,this.changeDetectorRef=t,this.router=i,this.onClose=new a.a,this.observer={resourcesChange:()=>this.changeDetectorRef.markForCheck()}}get customers(){return this.gameService.getCustomers(this.player)}get playerColor(){return void 0!==this.player?this.gameService.getPlayerColorName(this.player):""}get products(){return u.a.getAll()}ngOnDestroy(){this.gameService.removeObserver(this.observer)}ngOnInit(){this.gameService.addObserver(this.observer)}canSell(e){return this.gameService.canSellProduct(this.player,e)}getAmount(e){return this.gameService.getNumberOfProducts(this.player,e)}sell(e){this.gameService.sell(this.player,e),this.gameService.canSellAnyProduct(this.player)||this.onClose.next()}close(){this.gameService.stopSelling(this.player),this.onClose.next()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h),c.Ib(n.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-products"]],decls:16,vars:4,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","products"],[1,"body"],[4,"ngFor","ngForOf"],[1,"footer"],[1,"button-list"],["src","assets/images/users_3.png"],["type","button","fTranslate","close",3,"click"],[1,"label-frame"],[3,"src",4,"ngFor","ngForOf"],[1,"text-right"],["type","button",3,"ngStyle","click"],["src","assets/images/coins_in_hand.png"],[3,"src"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"table"),c.Nb(6,"tbody"),c.hc(7,v,11,9,"tr",5),c.Mb(),c.Mb(),c.Mb(),c.Nb(8,"div",6),c.Nb(9,"div",7),c.Nb(10,"div"),c.Jb(11,"img",8),c.ic(12,"\xa0"),c.Nb(13,"span"),c.ic(14),c.Mb(),c.Mb(),c.Nb(15,"button",9),c.Ub("click",function(){return t.close()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(3),c.yb(t.playerColor),c.wb(4),c.ac("ngForOf",t.products),c.wb(7),c.kc("",t.customers,"\xd7"))},directives:[b.a,s.j,s.l],pipes:[s.d],styles:[""],changeDetection:0}),e})();var f=i("vnFs"),p=i("ri4N"),y=i("KGMg"),N=i("1+1J");function M(e,t){if(1&e&&(c.Nb(0,"tr"),c.Jb(1,"td",12),c.Nb(2,"td",13),c.ic(3),c.Xb(4,"number"),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.wb(3),c.kc("",c.Zb(4,1,e.buyCosts,"1.0-0")," kC")}}function S(e,t){if(1&e&&(c.Nb(0,"tr"),c.Jb(1,"td",14),c.Nb(2,"td",13),c.ic(3),c.Xb(4,"number"),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.wb(3),c.kc("",c.Zb(4,1,e.buyCosts,"1.0-0")," kC")}}function C(e,t){if(1&e&&(c.Nb(0,"tr"),c.Jb(1,"td",15),c.Nb(2,"td",13),c.ic(3),c.Xb(4,"number"),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.wb(3),c.kc("",c.Zb(4,1,e.sellCosts,"1.0-0")," kC")}}function k(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",16),c.Ub("click",function(){return c.ec(e),c.Wb().buy()}),c.Mb()}}function w(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",17),c.Ub("click",function(){return c.ec(e),c.Wb().upgrade()}),c.Mb()}}function O(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",18),c.Ub("click",function(){return c.ec(e),c.Wb().sell()}),c.Mb()}}let T=(()=>{class e{constructor(e){this.gameService=e,this.onClose=new a.a}get canBuy(){return void 0!==this.x&&void 0!==this.y&&this.gameService.canAddBuilding(this.x,this.y)}get canUpgrade(){return void 0!==this.x&&void 0!==this.y&&this.gameService.canUpgradeBuilding(this.x,this.y)}get canSell(){return void 0!==this.x&&void 0!==this.y&&this.gameService.canSellBuilding(this.x,this.y)}get buyCosts(){return void 0!==this.x&&void 0!==this.y?this.gameService.getBuildingBuyPrice(this.x,this.y):0}get sellCosts(){return void 0!==this.x&&void 0!==this.y?this.gameService.getBuildingSellPrice(this.x,this.y):0}buy(){this.gameService.addBuilding(this.x,this.y),this.onClose.next()}upgrade(){this.gameService.upgradeBuilding(this.x,this.y),this.onClose.next()}cancel(){this.onClose.next()}sell(){this.gameService.sellBuilding(this.x,this.y),this.onClose.next()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-building-context-menu"]],decls:16,vars:6,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","building"],[1,"body"],[4,"ngIf"],[1,"footer"],[1,"button-list"],["type","button","fTranslate","buy",3,"click",4,"ngIf"],["type","button","fTranslate","upgradeBuilding",3,"click",4,"ngIf"],["type","button","fTranslate","sell",3,"click",4,"ngIf"],["type","button","fTranslate","cancel",3,"click"],["fTranslate","buy"],[1,"text-right"],["fTranslate","upgradeBuilding"],["fTranslate","sell"],["type","button","fTranslate","buy",3,"click"],["type","button","fTranslate","upgradeBuilding",3,"click"],["type","button","fTranslate","sell",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"table"),c.Nb(6,"tbody"),c.hc(7,M,5,4,"tr",5),c.hc(8,S,5,4,"tr",5),c.hc(9,C,5,4,"tr",5),c.Mb(),c.Mb(),c.Mb(),c.Nb(10,"div",6),c.Nb(11,"div",7),c.hc(12,k,1,0,"button",8),c.hc(13,w,1,0,"button",9),c.hc(14,O,1,0,"button",10),c.Nb(15,"button",11),c.Ub("click",function(){return t.cancel()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(7),c.ac("ngIf",t.canBuy),c.wb(1),c.ac("ngIf",t.canUpgrade),c.wb(1),c.ac("ngIf",t.canSell),c.wb(3),c.ac("ngIf",t.canBuy),c.wb(1),c.ac("ngIf",t.canUpgrade),c.wb(1),c.ac("ngIf",t.canSell))},directives:[b.a,s.k],pipes:[s.d],styles:[""],changeDetection:0}),e})();function I(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",8),c.Ub("click",function(){return c.ec(e),c.Wb().place()}),c.Mb()}}let x=(()=>{class e{constructor(e){this.gameService=e,this.onClose=new a.a}get canPlace(){return void 0!==this.field&&this.gameService.canSetDisaster(this.field.x,this.field.y)}get title(){return void 0!==this.field?this.field.type:""}cancel(){this.onClose.next()}place(){this.gameService.setDisaster(this.field.x,this.field.y),this.onClose.next()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-field-context-menu"]],decls:8,vars:2,consts:[[1,"dialog"],[1,"menu"],[1,"header"],[3,"fTranslate"],[1,"body"],[1,"button-list"],["type","button","fTranslate","placeDisaster",3,"click",4,"ngIf"],["type","button","fTranslate","cancel",3,"click"],["type","button","fTranslate","placeDisaster",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"div",5),c.hc(6,I,1,0,"button",6),c.Nb(7,"button",7),c.Ub("click",function(){return t.cancel()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(3),c.ac("fTranslate",t.title),c.wb(3),c.ac("ngIf",t.canPlace))},directives:[b.a,s.k],styles:[""],changeDetection:0}),e})();var J=i("/2Pu");const D=["canvas"];let F=(()=>{class e{constructor(e,t){this.gameService=e,this.modalService=t,this.offsetX=0,this.offsetY=0,this.onResize=()=>{const e=this.canvas.nativeElement;e.width=window.innerWidth,e.height=window.innerHeight,this.clampOffset(),this.paint()},this.gameObserver={buildingsChange:()=>this.paint(),disasterChange:()=>this.paint()}}ngOnDestroy(){window.removeEventListener("resize",this.onResize),this.gameService.removeObserver(this.gameObserver)}ngAfterViewInit(){if(void 0!==this.canvas){const e=this.canvas.nativeElement.getContext("2d",{alpha:!0});null!==e&&(this.context=e),window.addEventListener("resize",this.onResize),this.onResize(),this.gameService.addObserver(this.gameObserver)}}click(e){let t=0|Math.round(2*(e.clientX-this.offsetX)/N.a.WIDTH),i=0|Math.round(4*(e.clientY-this.offsetY)/N.a.HEIGHT);if(t<0||i<0||t>12||i>16)return;const s=this.getBuilding(t,i);if(void 0!==s){const e=this.modalService.create(T);e.instance.x=s.x,e.instance.y=s.y,e.instance.onClose.subscribe({next:()=>e.destroy()})}else{const e=this.getField(t,i);if(void 0!==e){const t=this.modalService.create(x);t.instance.field=e,t.instance.onClose.subscribe({next:()=>t.destroy()})}}}mouseDown(e){void 0!==this.canvas&&void 0===this.pointerId&&(this.canvas.nativeElement.setPointerCapture(e.pointerId),this.pointerId=e.pointerId,e.preventDefault())}mouseMove(e){void 0!==this.canvas&&this.pointerId===e.pointerId&&(this.offsetX+=e.movementX,this.offsetY+=e.movementY,this.clampOffset(),this.paint(),e.preventDefault())}mouseUp(e){void 0!==this.canvas&&this.pointerId===e.pointerId&&(this.canvas.nativeElement.releasePointerCapture(e.pointerId),this.pointerId=void 0,e.preventDefault())}getBuilding(e,t){if((t+1)%3!=0){if(1==(1&e)){const i=t%6;return 0===i?J.a.newCoordinates(e,t/3|0):4===i?J.a.newCoordinates(e,(t-1)/3|0):void 0}{const i=(t+5)%6;return 0===i?J.a.newCoordinates(e,(t-1)/3|0):2===i?J.a.newCoordinates(e,t/3|0):void 0}}}getField(e,t){if(1==(1&e)){if((t+5)%6<3)return this.gameService.getField((e-1)/2|0,(t-1)/3|0)}else if((t+5)%6>=3)return this.gameService.getField(e/2-1|0,(t-1)/3|0)}paint(){const e=this.context;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.save();try{e.translate(this.offsetX,this.offsetY),this.gameService.paint(e)}finally{e.restore()}}clampOffset(){if(void 0!==this.canvas){const e=this.canvas.nativeElement.width,t=this.canvas.nativeElement.height;this.gameService.paintWidth<.5*e?this.offsetX=(e-this.gameService.paintWidth)/2:this.offsetX<.5*e-this.gameService.paintWidth?this.offsetX=.5*e-this.gameService.paintWidth:this.offsetX>.5*e&&(this.offsetX=.5*e),this.gameService.paintHeight<.5*t?this.offsetY=(t-this.gameService.paintHeight)/2:this.offsetY<.5*t-this.gameService.paintHeight?this.offsetY=.5*t-this.gameService.paintHeight:this.offsetY>.5*t&&(this.offsetY=.5*t)}}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(f.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-canvas"]],viewQuery:function(e,t){if(1&e&&c.mc(D,!0),2&e){let e;c.dc(e=c.Vb())&&(t.canvas=e.first)}},decls:2,vars:0,consts:[[3,"click","contextmenu","pointerdown","pointerup","pointermove"],["canvas",""]],template:function(e,t){1&e&&(c.Nb(0,"canvas",0,1),c.Ub("click",function(e){return t.click(e)})("contextmenu",function(e){return t.click(e)})("pointerdown",function(e){return t.mouseDown(e)})("pointerup",function(e){return t.mouseUp(e)})("pointermove",function(e){return t.mouseMove(e)}),c.Mb())},styles:[""],changeDetection:0}),e})();function B(e,t){if(1&e&&(c.Lb(0),c.Jb(1,"img",7),c.Nb(2,"label",3),c.ic(3),c.Mb(),c.Kb()),2&e){const e=t.$implicit;c.wb(1),c.bc("src","assets/images/",e.soil,".png",c.fc),c.wb(2),c.jc(e.amount)}}function X(e,t){if(1&e&&(c.Nb(0,"div",1),c.Jb(1,"img",2),c.Nb(2,"label",3),c.ic(3),c.Xb(4,"number"),c.Mb(),c.Jb(5,"img",4),c.Nb(6,"label",3),c.ic(7),c.Xb(8,"number"),c.Mb(),c.Jb(9,"img",5),c.Nb(10,"label",3),c.ic(11),c.Xb(12,"number"),c.Mb(),c.hc(13,B,4,2,"ng-container",6),c.Mb()),2&e){const e=c.Wb();c.wb(3),c.kc("",c.Zb(4,4,e.cash,"1.0-0")," kC"),c.wb(4),c.kc("",c.Zb(8,7,-e.runningCosts,"1.0-0")," kC"),c.wb(4),c.jc(c.Zb(12,10,e.customers,"1.0-0")),c.wb(2),c.ac("ngForOf",e.soils)}}let H=(()=>{class e{constructor(e,t){this.gameService=e,this.changeDetectorRef=t,this.gameObserver={turnChange:()=>this.changeDetectorRef.markForCheck(),resourcesChange:()=>this.changeDetectorRef.markForCheck()}}get cash(){return void 0!==this.gameService.playerOnTurn?this.gameService.playerOnTurn.money:0}get customers(){return void 0!==this.gameService.playerOnTurn?this.gameService.playerOnTurn.customers:0}get runningCosts(){return void 0!==this.gameService.playerOnTurn?this.gameService.playerOnTurn.runningCosts:0}get soils(){const e=this.gameService.playerOnTurn;return r.b.getAll().map(t=>({amount:void 0!==e?e.getSoils(t):0,soil:t}))}get playerOnTurn(){return this.gameService.isHumanOnTurn}ngOnDestroy(){this.gameService.removeObserver(this.gameObserver)}ngOnInit(){this.gameService.addObserver(this.gameObserver)}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-soils"]],decls:1,vars:1,consts:[["class","grid-2",4,"ngIf"],[1,"grid-2"],["src","assets/images/coins.png",1,"label-frame"],[1,"white","text-right"],["src","assets/images/coins_in_hand.png",1,"label-frame"],["src","assets/images/users_3.png",1,"label-frame"],[4,"ngFor","ngForOf"],[1,"label-frame",3,"src"]],template:function(e,t){1&e&&c.hc(0,X,14,13,"div",0),2&e&&c.ac("ngIf",t.playerOnTurn)},directives:[s.k,s.j],pipes:[s.d],styles:[""],changeDetection:0}),e})();function P(e,t){if(1&e&&c.Jb(0,"label",5),2&e){const e=c.Wb();c.zb("label-frame ",e.colorOnTurn,"")}}function U(e,t){if(1&e&&c.Jb(0,"label",6),2&e){const e=c.Wb();c.zb("label-frame ",e.colorOnTurn,"")}}let R=(()=>{class e{constructor(e,t,i,s,n,r){this.gameService=e,this.changeDetectorRef=t,this.modalService=i,this.router=s,this.translateService=n,this.settingsService=r,this.observer={buildingsChange:()=>{this.changeDetectorRef.markForCheck()},turnChange:()=>{this.changeDetectorRef.markForCheck()},phaseChange:()=>{this.changeDetectorRef.markForCheck(),this.gameService.isGameOver?this.router.navigateByUrl("/game/score"):this.gameService.isHarvestPhase?this.harvest():this.gameService.isSellPhase&&this.sell()},resourcesChange:()=>{this.changeDetectorRef.markForCheck()},disasterChange:()=>{this.changeDetectorRef.markForCheck()}}}get colorOnTurn(){return void 0!==this.gameService.playerOnTurn?this.gameService.playerOnTurn.colorName:""}get hasDisaster(){return this.gameService.isDisasterPhase&&this.gameService.isHumanOnTurn}get hasUnplacedBuilding(){return this.gameService.hasUnplacedBuilding&&this.gameService.isHumanOnTurn}get playerOnTurn(){return this.gameService.isHumanOnTurn?this.settingsService.userName:this.translateService.get("aiPlayer")}ngOnDestroy(){this.gameService.removeObserver(this.observer)}ngOnInit(){this.gameService.addObserver(this.observer)}harvest(){const e=this.gameService.getNextHumanPlayerToHarvest();if(void 0!==e){if(void 0===this.harvestComponent){this.harvestComponent=this.modalService.create(h);const e=this.harvestComponent;e.instance.onClose.subscribe({next:()=>{e.destroy(),this.harvestComponent=void 0,this.harvest()}})}this.harvestComponent.instance.player=e}}sell(){const e=this.gameService.getNextHumanPlayerToSell();if(void 0!==e){if(void 0===this.productsComponent){this.productsComponent=this.modalService.create(d);const e=this.productsComponent;e.instance.onClose.subscribe({next:()=>{e.destroy(),this.productsComponent=void 0,this.sell()}})}this.productsComponent.instance.player=e}}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h),c.Ib(f.a),c.Ib(n.a),c.Ib(p.a),c.Ib(y.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-game"]],decls:11,vars:6,consts:[[1,"game-menu","top","left"],[1,"game-menu-item"],[1,"game-menu","top","center"],["fTranslate","placeBuilding",3,"class",4,"ngIf"],["fTranslate","placeDisaster",3,"class",4,"ngIf"],["fTranslate","placeBuilding"],["fTranslate","placeDisaster"]],template:function(e,t){1&e&&(c.Jb(0,"f-canvas"),c.Nb(1,"div",0),c.Nb(2,"div",1),c.Jb(3,"f-soils"),c.Mb(),c.Mb(),c.Nb(4,"div",2),c.Nb(5,"div",1),c.Nb(6,"label"),c.ic(7),c.Mb(),c.hc(8,P,1,3,"label",3),c.hc(9,U,1,3,"label",4),c.Mb(),c.Mb(),c.Jb(10,"router-outlet")),2&e&&(c.wb(6),c.zb("label-frame ",t.colorOnTurn,""),c.wb(1),c.jc(t.playerOnTurn),c.wb(1),c.ac("ngIf",t.hasUnplacedBuilding),c.wb(1),c.ac("ngIf",t.hasDisaster))},directives:[F,H,s.k,n.d,b.a],styles:[""],changeDetection:0}),e})(),W=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["f-cards"]],decls:8,vars:0,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","cards"],[1,"body"],[1,"footer"],[1,"button-list"],["routerLink","/game","type","button","fTranslate","close"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Jb(4,"div",4),c.Nb(5,"div",5),c.Nb(6,"div",6),c.Jb(7,"button",7),c.Mb(),c.Mb(),c.Mb(),c.Mb())},directives:[b.a,n.b],styles:[""],changeDetection:0}),e})(),L=(()=>{class e{constructor(e,t){this.router=e,this.gameService=t}exit(){this.gameService.exit(),this.router.navigateByUrl("/menu")}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(n.a),c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-menu"]],decls:11,vars:0,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","menu"],[1,"body"],[1,"button-list","vertical"],["routerLink","/game/score","type","button","fTranslate","score"],["routerLink","/game/statistics","type","button","fTranslate","statistics"],["routerLink","/game/settings","type","button","fTranslate","settings"],["routerLink","/game","type","button","fTranslate","continueGame"],["type","button","fTranslate","exit",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"div",5),c.Jb(6,"button",6),c.Jb(7,"button",7),c.Jb(8,"button",8),c.Jb(9,"button",9),c.Nb(10,"button",10),c.Ub("click",function(){return t.exit()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb())},directives:[b.a,n.b],styles:[""],changeDetection:0}),e})();var j=i("Ryqz");function A(e,t){if(1&e&&(c.Nb(0,"tr"),c.Nb(1,"td",12),c.ic(2),c.Mb(),c.Nb(3,"td"),c.ic(4),c.Xb(5,"translate"),c.Mb(),c.Nb(6,"td",12),c.ic(7),c.Xb(8,"number"),c.Mb(),c.Nb(9,"td",12),c.ic(10),c.Mb(),c.Mb()),2&e){const e=t.$implicit,i=t.index;c.yb(e.colorName),c.wb(2),c.kc("",i+1,"."),c.wb(2),c.jc(c.Yb(5,6,e.colorName)),c.wb(3),c.kc("",c.Zb(8,8,e.money,"1.0-0")," kC"),c.wb(3),c.jc(e.score)}}let G=(()=>{class e{constructor(e,t){this.gameService=e,this.router=t,this.players=this.gameService.players,this.players.sort((e,t)=>e.score!==t.score?t.score-e.score:t.money-e.money),this.isGameOver=this.gameService.isGameOver}close(){this.isGameOver?(this.gameService.exit(),this.router.navigateByUrl("/menu")):this.router.navigateByUrl("/game")}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(n.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-score"]],decls:17,vars:2,consts:[[1,"dialog"],[1,"menu"],[1,"header"],[3,"fTranslate"],[1,"body"],["fTranslate","name"],["fTranslate","money"],["fTranslate","score"],[3,"class",4,"ngFor","ngForOf"],[1,"footer"],[1,"button-list"],["type","button","fTranslate","close",3,"click"],[1,"text-right"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"table"),c.Nb(6,"thead"),c.Nb(7,"tr"),c.Jb(8,"th"),c.Jb(9,"th",5),c.Jb(10,"th",6),c.Jb(11,"th",7),c.Mb(),c.Mb(),c.Nb(12,"tbody"),c.hc(13,A,11,11,"tr",8),c.Mb(),c.Mb(),c.Mb(),c.Nb(14,"div",9),c.Nb(15,"div",10),c.Nb(16,"button",11),c.Ub("click",function(){return t.close()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(3),c.ac("fTranslate",t.isGameOver?"gameOver":"score"),c.wb(10),c.ac("ngForOf",t.players))},directives:[b.a,s.j],pipes:[j.a,s.d],styles:[""],changeDetection:0}),e})(),Y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["f-settings"]],decls:9,vars:0,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","settings"],[1,"body"],[1,"footer"],[1,"button-list"],["routerLink","/game","type","button","fTranslate","save"],["routerLink","/game","type","button","fTranslate","cancel"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Jb(4,"div",4),c.Nb(5,"div",5),c.Nb(6,"div",6),c.Jb(7,"button",7),c.Jb(8,"button",8),c.Mb(),c.Mb(),c.Mb(),c.Mb())},directives:[b.a,n.b],styles:[""],changeDetection:0}),e})(),Z=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["f-trade"]],decls:8,vars:0,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","trade"],[1,"body"],[1,"footer"],[1,"button-list"],["routerLink","/game","type","button","fTranslate","close"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Jb(4,"div",4),c.Nb(5,"div",5),c.Nb(6,"div",6),c.Jb(7,"button",7),c.Mb(),c.Mb(),c.Mb(),c.Mb())},directives:[b.a,n.b],styles:[""],changeDetection:0}),e})();function z(e,t){1&e&&(c.Nb(0,"div",1),c.Jb(1,"button",7),c.Mb())}function E(e,t){1&e&&(c.Nb(0,"div",1),c.Jb(1,"button",8),c.Mb())}function $(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",9),c.Ub("click",function(){return c.ec(e),c.Wb(2).next()}),c.Mb()}}function _(e,t){if(1&e&&(c.Nb(0,"div",4),c.hc(1,z,2,0,"div",5),c.hc(2,E,2,0,"div",5),c.Nb(3,"div",1),c.hc(4,$,1,0,"button",6),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.wb(1),c.ac("ngIf",e.isTradePhase),c.wb(1),c.ac("ngIf",e.isTradePhase),c.wb(2),c.ac("ngIf",e.canNext)}}const K=[{path:"",component:R,children:[{path:"",pathMatch:"full",component:(()=>{class e{constructor(e,t){this.gameService=e,this.changeDetectorRef=t,this.gameObserver={turnChange:()=>this.changeDetectorRef.markForCheck(),phaseChange:()=>this.changeDetectorRef.markForCheck(),resourcesChange:()=>this.changeDetectorRef.markForCheck()}}get canNext(){return this.gameService.canProceedToNextPlayer}get isHumanOnTurn(){return this.gameService.isHumanOnTurn}get isTradePhase(){return this.gameService.isTradePhase}ngOnDestroy(){this.gameService.removeObserver(this.gameObserver)}ngOnInit(){this.gameService.addObserver(this.gameObserver)}next(){this.gameService.proceedToNextPlayer()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-menu-bar"]],decls:4,vars:1,consts:[[1,"game-menu","top","right"],[1,"game-menu-item"],["routerLink","/game/menu","type","button","fTranslate","menu"],["class","game-menu bottom right",4,"ngIf"],[1,"game-menu","bottom","right"],["class","game-menu-item",4,"ngIf"],["type","button","fTranslate","next",3,"click",4,"ngIf"],["routerLink","/game/cards","type","button","fTranslate","cards"],["routerLink","/game/trade","type","button","fTranslate","trade"],["type","button","fTranslate","next",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Jb(2,"button",2),c.Mb(),c.Mb(),c.hc(3,_,5,3,"div",3)),2&e&&(c.wb(3),c.ac("ngIf",t.isHumanOnTurn))},directives:[n.b,b.a,s.k],styles:[""],changeDetection:0}),e})()},{path:"cards",pathMatch:"full",component:W},{path:"menu",pathMatch:"full",component:L},{path:"products",pathMatch:"full",component:d},{path:"score",pathMatch:"full",component:G},{path:"settings",pathMatch:"full",component:Y},{path:"statistics",pathMatch:"full",component:(()=>{class e{constructor(e){this.gameService=e}get customers(){return this.gameService.getCustomerStatistics()}get farm(){return this.gameService.getHarvestStatistics("farm")}get field(){return this.gameService.getHarvestStatistics("field")}get plantation(){return this.gameService.getHarvestStatistics("plantation")}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-statistics"]],decls:32,vars:16,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","statistics"],[1,"body"],[1,"grid-2"],[1,"label-frame"],["src","assets/images/steak.png"],["src","assets/images/nugget.png"],[1,"text-right"],["src","assets/images/bread.png"],["src","assets/images/potato.png"],["src","assets/images/cola.png"],["src","assets/images/coffee.png"],["src","assets/images/users_3.png"],[1,"footer"],[1,"button-list"],["routerLink","/game","type","button","fTranslate","close"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"div",5),c.Nb(6,"label",6),c.Jb(7,"img",7),c.Jb(8,"img",8),c.Mb(),c.Nb(9,"label",9),c.ic(10),c.Xb(11,"number"),c.Mb(),c.Nb(12,"label",6),c.Jb(13,"img",10),c.Jb(14,"img",11),c.Mb(),c.Nb(15,"label",9),c.ic(16),c.Xb(17,"number"),c.Mb(),c.Nb(18,"label",6),c.Jb(19,"img",12),c.Jb(20,"img",13),c.Mb(),c.Nb(21,"label",9),c.ic(22),c.Xb(23,"number"),c.Mb(),c.Nb(24,"label",6),c.Jb(25,"img",14),c.Mb(),c.Nb(26,"label",9),c.ic(27),c.Xb(28,"number"),c.Mb(),c.Mb(),c.Mb(),c.Nb(29,"div",15),c.Nb(30,"div",16),c.Jb(31,"button",17),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(10),c.jc(c.Zb(11,4,t.farm,"1.1-1")),c.wb(6),c.jc(c.Zb(17,7,t.field,"1.1-1")),c.wb(6),c.jc(c.Zb(23,10,t.plantation,"1.1-1")),c.wb(5),c.jc(c.Zb(28,13,t.customers,"1.1-1")))},directives:[b.a,n.b],pipes:[s.d],styles:[""],changeDetection:0}),e})()},{path:"trade",pathMatch:"full",component:Z}]}];let Q=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[n.c.forChild(K)],n.c]}),e})();var V=i("PCNd");let q=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[s.b,V.a,Q]]}),e})()}}]);