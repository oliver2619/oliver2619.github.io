(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ekgB:function(e,t,n){"use strict";n.r(t),n.d(t,"GameModule",function(){return K});var i=n("ofXK"),s=n("tyNb"),r=n("4EtV"),a=n("XNiG"),c=n("fXoL"),o=n("0QSR"),b=n("9zBX");function l(e,t){if(1&e){const e=c.Ob();c.Nb(0,"div",7),c.Nb(1,"label"),c.Jb(2,"img",8),c.Mb(),c.Jb(3,"input",9),c.Nb(4,"button",10),c.Ub("click",function(){c.ec(e);const n=t.$implicit;return c.Wb().harvest(n.soil)}),c.ic(5,"+"),c.Mb(),c.Mb()}if(2&e){const e=t.$implicit;c.wb(2),c.bc("src","assets/images/",e.soil,".png",c.fc),c.wb(1),c.ac("value",e.amount),c.wb(1),c.ac("disabled",!e.canHarvest)}}let h=(()=>{class e{constructor(e,t){this.gameService=e,this.changeDetectorRef=t,this.onClose=new a.a,this.observer={resourcesChange:()=>this.changeDetectorRef.markForCheck(),turnChange:()=>this.checkClose()}}get playerColor(){return void 0!==this.player?this.gameService.getPlayerColorName(this.player):""}get soils(){const e=this.player;return void 0!==e?r.b.getAll().map(t=>({amount:this.gameService.getSoilsForPlayer(e,t),soil:t,canHarvest:this.gameService.canHarvest(e,t)})):[]}ngOnDestroy(){this.gameService.removeObserver(this.observer)}ngOnInit(){this.gameService.addObserver(this.observer)}harvest(e){this.gameService.harvest(this.player,e),this.checkClose()}checkClose(){this.gameService.canHarvestAnything(this.player)||this.onClose.next()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-harvest"]],decls:7,vars:3,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","harvest"],[1,"body"],[1,"grid-2"],["class","input-group",4,"ngFor","ngForOf"],[1,"input-group"],[3,"src"],["type","number","readonly","readonly","max","100","min","0",3,"value"],["type","button",3,"disabled","click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"div",5),c.hc(6,l,6,3,"div",6),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(3),c.yb(t.playerColor),c.wb(3),c.ac("ngForOf",t.soils))},directives:[b.a,i.j],styles:[""],changeDetection:0}),e})();var u=n("vnFs"),v=n("1+1J");function d(e,t){if(1&e&&(c.Nb(0,"tr"),c.Jb(1,"td",12),c.Nb(2,"td",13),c.ic(3),c.Xb(4,"number"),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.wb(3),c.kc("",c.Zb(4,1,e.buyCosts,"1.0-0")," kC")}}function g(e,t){if(1&e&&(c.Nb(0,"tr"),c.Jb(1,"td",14),c.Nb(2,"td",13),c.ic(3),c.Xb(4,"number"),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.wb(3),c.kc("",c.Zb(4,1,e.buyCosts,"1.0-0")," kC")}}function f(e,t){if(1&e&&(c.Nb(0,"tr"),c.Jb(1,"td",15),c.Nb(2,"td",13),c.ic(3),c.Xb(4,"number"),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.wb(3),c.kc("",c.Zb(4,1,e.sellCosts,"1.0-0")," kC")}}function m(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",16),c.Ub("click",function(){return c.ec(e),c.Wb().buy()}),c.Mb()}}function p(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",17),c.Ub("click",function(){return c.ec(e),c.Wb().upgrade()}),c.Mb()}}function y(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",18),c.Ub("click",function(){return c.ec(e),c.Wb().sell()}),c.Mb()}}let M=(()=>{class e{constructor(e){this.gameService=e,this.onClose=new a.a}get canBuy(){return void 0!==this.x&&void 0!==this.y&&this.gameService.canAddBuilding(this.x,this.y)}get canUpgrade(){return void 0!==this.x&&void 0!==this.y&&this.gameService.canUpgradeBuilding(this.x,this.y)}get canSell(){return void 0!==this.x&&void 0!==this.y&&this.gameService.canSellBuilding(this.x,this.y)}get buyCosts(){return void 0!==this.x&&void 0!==this.y?this.gameService.getBuildingBuyPrice(this.x,this.y):0}get sellCosts(){return void 0!==this.x&&void 0!==this.y?this.gameService.getBuildingSellPrice(this.x,this.y):0}buy(){this.gameService.addBuilding(this.x,this.y),this.onClose.next()}upgrade(){this.gameService.upgradeBuilding(this.x,this.y),this.onClose.next()}cancel(){this.onClose.next()}sell(){this.gameService.sellBuilding(this.x,this.y),this.onClose.next()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-building-context-menu"]],decls:16,vars:6,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","building"],[1,"body"],[4,"ngIf"],[1,"footer"],[1,"button-list"],["type","button","fTranslate","buy",3,"click",4,"ngIf"],["type","button","fTranslate","upgradeBuilding",3,"click",4,"ngIf"],["type","button","fTranslate","sell",3,"click",4,"ngIf"],["type","button","fTranslate","cancel",3,"click"],["fTranslate","buy"],[1,"text-right"],["fTranslate","upgradeBuilding"],["fTranslate","sell"],["type","button","fTranslate","buy",3,"click"],["type","button","fTranslate","upgradeBuilding",3,"click"],["type","button","fTranslate","sell",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"table"),c.Nb(6,"tbody"),c.hc(7,d,5,4,"tr",5),c.hc(8,g,5,4,"tr",5),c.hc(9,f,5,4,"tr",5),c.Mb(),c.Mb(),c.Mb(),c.Nb(10,"div",6),c.Nb(11,"div",7),c.hc(12,m,1,0,"button",8),c.hc(13,p,1,0,"button",9),c.hc(14,y,1,0,"button",10),c.Nb(15,"button",11),c.Ub("click",function(){return t.cancel()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(7),c.ac("ngIf",t.canBuy),c.wb(1),c.ac("ngIf",t.canUpgrade),c.wb(1),c.ac("ngIf",t.canSell),c.wb(3),c.ac("ngIf",t.canBuy),c.wb(1),c.ac("ngIf",t.canUpgrade),c.wb(1),c.ac("ngIf",t.canSell))},directives:[b.a,i.k],pipes:[i.d],styles:[""],changeDetection:0}),e})();function N(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",8),c.Ub("click",function(){return c.ec(e),c.Wb().place()}),c.Mb()}}let S=(()=>{class e{constructor(e){this.gameService=e,this.onClose=new a.a}get canPlace(){return void 0!==this.field&&this.gameService.canPlaceCatastrophy(this.field.x,this.field.y)}get title(){return void 0!==this.field?this.field.type:""}cancel(){this.onClose.next()}place(){this.gameService.placeCatastrophy(this.field.x,this.field.y),this.onClose.next()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-field-context-menu"]],decls:8,vars:2,consts:[[1,"dialog"],[1,"menu"],[1,"header"],[3,"fTranslate"],[1,"body"],[1,"button-list"],["type","button","fTranslate","placeCatastrophy",3,"click",4,"ngIf"],["type","button","fTranslate","cancel",3,"click"],["type","button","fTranslate","placeCatastrophy",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"div",5),c.hc(6,N,1,0,"button",6),c.Nb(7,"button",7),c.Ub("click",function(){return t.cancel()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(3),c.ac("fTranslate",t.title),c.wb(3),c.ac("ngIf",t.canPlace))},directives:[b.a,i.k],styles:[""],changeDetection:0}),e})();var w=n("/2Pu");const k=["canvas"];let C=(()=>{class e{constructor(e,t){this.gameService=e,this.modalService=t,this.offsetX=0,this.offsetY=0,this.onResize=()=>{const e=this.canvas.nativeElement;e.width=window.innerWidth,e.height=window.innerHeight,this.clampOffset(),this.paint()},this.gameObserver={buildingsChange:()=>this.paint()}}ngOnDestroy(){window.removeEventListener("resize",this.onResize),this.gameService.removeObserver(this.gameObserver)}ngAfterViewInit(){if(void 0!==this.canvas){const e=this.canvas.nativeElement.getContext("2d",{alpha:!0});null!==e&&(this.context=e),window.addEventListener("resize",this.onResize),this.onResize(),this.gameService.addObserver(this.gameObserver)}}click(e){let t=0|Math.round(2*(e.clientX-this.offsetX)/v.a.WIDTH),n=0|Math.round(4*(e.clientY-this.offsetY)/v.a.HEIGHT);if(t<0||n<0||t>12||n>16)return;const i=this.getBuilding(t,n);if(void 0!==i){const e=this.modalService.create(M);e.instance.x=i.x,e.instance.y=i.y,e.instance.onClose.subscribe({next:()=>e.destroy()})}else{const e=this.getField(t,n);if(void 0!==e){const t=this.modalService.create(S);t.instance.field=e,t.instance.onClose.subscribe({next:()=>t.destroy()})}}}mouseDown(e){void 0!==this.canvas&&void 0===this.pointerId&&(this.canvas.nativeElement.setPointerCapture(e.pointerId),this.pointerId=e.pointerId,e.preventDefault())}mouseMove(e){void 0!==this.canvas&&this.pointerId===e.pointerId&&(this.offsetX+=e.movementX,this.offsetY+=e.movementY,this.clampOffset(),this.paint(),e.preventDefault())}mouseUp(e){void 0!==this.canvas&&this.pointerId===e.pointerId&&(this.canvas.nativeElement.releasePointerCapture(e.pointerId),this.pointerId=void 0,e.preventDefault())}getBuilding(e,t){if((t+1)%3!=0){if(1==(1&e)){const n=t%6;return 0===n?w.a.newCoordinates(e,t/3|0):4===n?w.a.newCoordinates(e,(t-1)/3|0):void 0}{const n=(t+5)%6;return 0===n?w.a.newCoordinates(e,(t-1)/3|0):2===n?w.a.newCoordinates(e,t/3|0):void 0}}}getField(e,t){if(1==(1&e)){if((t+5)%6<3)return this.gameService.getField((e-1)/2|0,(t-1)/3|0)}else if((t+5)%6>=3)return this.gameService.getField(e/2-1|0,(t-1)/3|0)}paint(){const e=this.context;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.save();try{e.translate(this.offsetX,this.offsetY),this.gameService.paint(e)}finally{e.restore()}}clampOffset(){void 0!==this.canvas&&(this.gameService.paintWidth<this.canvas.nativeElement.width?this.offsetX=(this.canvas.nativeElement.width-this.gameService.paintWidth)/2:this.offsetX<this.canvas.nativeElement.width-this.gameService.paintWidth?this.offsetX=this.canvas.nativeElement.width-this.gameService.paintWidth:this.offsetX>0&&(this.offsetX=0),this.gameService.paintHeight<this.canvas.nativeElement.height?this.offsetY=(this.canvas.nativeElement.height-this.gameService.paintHeight)/2:this.offsetY<this.canvas.nativeElement.height-this.gameService.paintHeight?this.offsetY=this.canvas.nativeElement.height-this.gameService.paintHeight:this.offsetY>0&&(this.offsetY=0))}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(u.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-canvas"]],viewQuery:function(e,t){if(1&e&&c.mc(k,!0),2&e){let e;c.dc(e=c.Vb())&&(t.canvas=e.first)}},decls:2,vars:0,consts:[[3,"click","contextmenu","pointerdown","pointerup","pointermove"],["canvas",""]],template:function(e,t){1&e&&(c.Nb(0,"canvas",0,1),c.Ub("click",function(e){return t.click(e)})("contextmenu",function(e){return t.click(e)})("pointerdown",function(e){return t.mouseDown(e)})("pointerup",function(e){return t.mouseUp(e)})("pointermove",function(e){return t.mouseMove(e)}),c.Mb())},styles:[""],changeDetection:0}),e})();function T(e,t){if(1&e&&(c.Lb(0),c.Jb(1,"img",2),c.Nb(2,"label",3),c.ic(3),c.Mb(),c.Kb()),2&e){const e=t.$implicit;c.wb(1),c.bc("src","assets/images/",e.soil,".png",c.fc),c.wb(2),c.jc(e.amount)}}let O=(()=>{class e{constructor(e,t){this.gameService=e,this.changeDetectorRef=t,this.gameObserver={turnChange:()=>this.changeDetectorRef.markForCheck(),resourcesChange:()=>this.changeDetectorRef.markForCheck()}}get soils(){const e=this.gameService.playerOnTurn;return r.b.getAll().map(t=>({amount:void 0!==e?e.getSoils(t):0,soil:t}))}ngOnDestroy(){this.gameService.removeObserver(this.gameObserver)}ngOnInit(){this.gameService.addObserver(this.gameObserver)}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-soils"]],decls:2,vars:1,consts:[[1,"grid-2"],[4,"ngFor","ngForOf"],[1,"label-frame",3,"src"],[1,"white","text-right"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.hc(1,T,4,2,"ng-container",1),c.Mb()),2&e&&(c.wb(1),c.ac("ngForOf",t.soils))},directives:[i.j],styles:[""],changeDetection:0}),e})();function I(e,t){if(1&e&&c.Jb(0,"label",11),2&e){const e=c.Wb();c.zb("label-frame ",e.colorOnTurn,"")}}let x=(()=>{class e{constructor(e,t,n,i){this.gameService=e,this.changeDetectorRef=t,this.modalService=n,this.router=i,this.observer={buildingsChange:()=>{this.changeDetectorRef.markForCheck()},turnChange:()=>{this.changeDetectorRef.markForCheck()},phaseChange:()=>{this.changeDetectorRef.markForCheck(),this.gameService.isHarvestPhase?this.harvest():this.gameService.isGameOver&&this.router.navigateByUrl("/game/score")},resourcesChange:()=>{this.changeDetectorRef.markForCheck()}}}get colorOnTurn(){return void 0!==this.gameService.playerOnTurn?this.gameService.playerOnTurn.colorName:""}get customers(){return void 0!==this.gameService.playerOnTurn?this.gameService.playerOnTurn.customers:0}get hasUnplacedBuilding(){return this.gameService.hasUnplacedBuilding&&this.gameService.isHumanOnTurn}get playerTypeOnTurn(){return this.gameService.isHumanOnTurn?"humanPlayer":"aiPlayer"}get cash(){return void 0!==this.gameService.playerOnTurn?this.gameService.playerOnTurn.money:0}get runningCosts(){return void 0!==this.gameService.playerOnTurn?this.gameService.playerOnTurn.runningCosts:0}ngOnDestroy(){this.gameService.removeObserver(this.observer)}ngOnInit(){this.gameService.addObserver(this.observer),this.harvest()}harvest(){const e=this.gameService.getNextHumanPlayerToHarvest();if(void 0!==e){if(void 0===this.harvestComponent){this.harvestComponent=this.modalService.create(h);const e=this.harvestComponent;e.instance.onClose.subscribe({next:()=>{e.destroy(),this.harvestComponent=void 0,this.harvest()}})}this.harvestComponent.instance.player=e}}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h),c.Ib(u.a),c.Ib(s.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-game"]],decls:24,vars:17,consts:[[1,"game-menu","top","left"],[1,"game-menu-item"],[1,"grid-2"],["fTranslate","cash",1,"white"],[1,"white","text-right"],["fTranslate","runningCosts",1,"white"],["fTranslate","customers",1,"white"],[1,"game-menu","bottom","left"],[1,"game-menu","top","center"],[3,"fTranslate"],["fTranslate","placeBuilding",3,"class",4,"ngIf"],["fTranslate","placeBuilding"]],template:function(e,t){1&e&&(c.Jb(0,"f-canvas"),c.Nb(1,"div",0),c.Nb(2,"div",1),c.Nb(3,"div",2),c.Jb(4,"label",3),c.Nb(5,"label",4),c.ic(6),c.Xb(7,"number"),c.Mb(),c.Jb(8,"label",5),c.Nb(9,"label",4),c.ic(10),c.Xb(11,"number"),c.Mb(),c.Jb(12,"label",6),c.Nb(13,"label",4),c.ic(14),c.Xb(15,"number"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(16,"div",7),c.Nb(17,"div",1),c.Jb(18,"f-soils"),c.Mb(),c.Mb(),c.Nb(19,"div",8),c.Nb(20,"div",1),c.Jb(21,"label",9),c.hc(22,I,1,3,"label",10),c.Mb(),c.Mb(),c.Jb(23,"router-outlet")),2&e&&(c.wb(6),c.kc("",c.Zb(7,8,t.cash,"1.0-0")," kC"),c.wb(4),c.kc("",c.Zb(11,11,t.runningCosts,"1.0-0")," kC"),c.wb(4),c.jc(c.Zb(15,14,t.customers,"1.0-0")),c.wb(7),c.zb("label-frame ",t.colorOnTurn,""),c.ac("fTranslate",t.playerTypeOnTurn),c.wb(1),c.ac("ngIf",t.hasUnplacedBuilding))},directives:[C,b.a,O,i.k,s.d],pipes:[i.d],styles:[""],changeDetection:0}),e})(),J=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["f-cards"]],decls:8,vars:0,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","cards"],[1,"body"],[1,"footer"],[1,"button-list"],["routerLink","/game","type","button","fTranslate","close"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Jb(4,"div",4),c.Nb(5,"div",5),c.Nb(6,"div",6),c.Jb(7,"button",7),c.Mb(),c.Mb(),c.Mb(),c.Mb())},directives:[b.a,s.b],styles:[""],changeDetection:0}),e})(),D=(()=>{class e{constructor(e,t){this.router=e,this.gameService=t}exit(){this.gameService.exit(),this.router.navigateByUrl("/menu")}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(s.a),c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-menu"]],decls:10,vars:0,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","menu"],[1,"body"],[1,"button-list","vertical"],["routerLink","/game/score","type","button","fTranslate","score"],["routerLink","/game/settings","type","button","fTranslate","settings"],["routerLink","/game","type","button","fTranslate","continueGame"],["type","button","fTranslate","exit",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"div",5),c.Jb(6,"button",6),c.Jb(7,"button",7),c.Jb(8,"button",8),c.Nb(9,"button",9),c.Ub("click",function(){return t.exit()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb())},directives:[b.a,s.b],styles:[""],changeDetection:0}),e})();var F=n("rhnQ");function B(e,t){1&e&&c.Jb(0,"img",12),2&e&&c.bc("src","assets/images/",t.$implicit,".png",c.fc)}const P=function(e){return{visibility:e}};function U(e,t){if(1&e){const e=c.Ob();c.Nb(0,"tr"),c.Nb(1,"td",9),c.hc(2,B,1,1,"img",10),c.Mb(),c.Nb(3,"td"),c.ic(4),c.Xb(5,"number"),c.Mb(),c.Nb(6,"td"),c.Nb(7,"button",11),c.Ub("click",function(){c.ec(e);const n=t.$implicit;return c.Wb().sell(n)}),c.ic(8,"-"),c.Mb(),c.Mb(),c.Mb()}if(2&e){const e=t.$implicit,n=c.Wb();c.wb(2),c.ac("ngForOf",e.soils),c.wb(2),c.kc("",c.Zb(5,3,e.price,"1.0-0")," kC"),c.wb(3),c.ac("ngStyle",c.cc(6,P,n.canSell(e)?"visible":"hidden"))}}let X=(()=>{class e{constructor(e,t){this.gameService=e,this.changeDetectorRef=t,this.observer={resourcesChange:()=>this.changeDetectorRef.markForCheck()}}get products(){return F.a.getAll()}ngOnDestroy(){this.gameService.removeObserver(this.observer)}ngOnInit(){this.gameService.addObserver(this.observer)}canSell(e){return this.gameService.canSellProduct(e)}sell(e){this.gameService.sell(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-products"]],decls:11,vars:1,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","products"],[1,"body"],[4,"ngFor","ngForOf"],[1,"footer"],[1,"button-list"],["routerLink","/game","type","button","fTranslate","close"],[1,"label-frame"],[3,"src",4,"ngFor","ngForOf"],["type","button",3,"ngStyle","click"],[3,"src"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"table"),c.Nb(6,"tbody"),c.hc(7,U,9,8,"tr",5),c.Mb(),c.Mb(),c.Mb(),c.Nb(8,"div",6),c.Nb(9,"div",7),c.Jb(10,"button",8),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(7),c.ac("ngForOf",t.products))},directives:[b.a,i.j,s.b,i.l],pipes:[i.d],styles:[""],changeDetection:0}),e})();var R=n("Ryqz");function H(e,t){if(1&e&&(c.Nb(0,"tr"),c.Nb(1,"td",12),c.ic(2),c.Mb(),c.Nb(3,"td"),c.ic(4),c.Xb(5,"translate"),c.Mb(),c.Nb(6,"td",12),c.ic(7),c.Xb(8,"number"),c.Mb(),c.Nb(9,"td",12),c.ic(10),c.Mb(),c.Mb()),2&e){const e=t.$implicit,n=t.index;c.yb(e.colorName),c.wb(2),c.kc("",n+1,"."),c.wb(2),c.jc(c.Yb(5,6,e.colorName)),c.wb(3),c.kc("",c.Zb(8,8,e.money,"1.0-0")," kC"),c.wb(3),c.jc(e.score)}}let W=(()=>{class e{constructor(e,t){this.gameService=e,this.router=t,this.players=this.gameService.players,this.players.sort((e,t)=>e.score!==t.score?t.score-e.score:t.money-e.money),this.isGameOver=this.gameService.isGameOver}close(){this.isGameOver?(this.gameService.exit(),this.router.navigateByUrl("/menu")):this.router.navigateByUrl("/game")}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(s.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-score"]],decls:17,vars:2,consts:[[1,"dialog"],[1,"menu"],[1,"header"],[3,"fTranslate"],[1,"body"],["fTranslate","name"],["fTranslate","money"],["fTranslate","score"],[3,"class",4,"ngFor","ngForOf"],[1,"footer"],[1,"button-list"],["type","button","fTranslate","close",3,"click"],[1,"text-right"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"table"),c.Nb(6,"thead"),c.Nb(7,"tr"),c.Jb(8,"th"),c.Jb(9,"th",5),c.Jb(10,"th",6),c.Jb(11,"th",7),c.Mb(),c.Mb(),c.Nb(12,"tbody"),c.hc(13,H,11,11,"tr",8),c.Mb(),c.Mb(),c.Mb(),c.Nb(14,"div",9),c.Nb(15,"div",10),c.Nb(16,"button",11),c.Ub("click",function(){return t.close()}),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.wb(3),c.ac("fTranslate",t.isGameOver?"gameOver":"score"),c.wb(10),c.ac("ngForOf",t.players))},directives:[b.a,i.j],pipes:[R.a,i.d],styles:[""],changeDetection:0}),e})(),E=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["f-settings"]],decls:9,vars:0,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","settings"],[1,"body"],[1,"footer"],[1,"button-list"],["routerLink","/game","type","button","fTranslate","save"],["routerLink","/game","type","button","fTranslate","cancel"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Jb(4,"div",4),c.Nb(5,"div",5),c.Nb(6,"div",6),c.Jb(7,"button",7),c.Jb(8,"button",8),c.Mb(),c.Mb(),c.Mb(),c.Mb())},directives:[b.a,s.b],styles:[""],changeDetection:0}),e})(),L=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["f-trade"]],decls:8,vars:0,consts:[[1,"dialog"],[1,"menu"],[1,"header"],["fTranslate","trade"],[1,"body"],[1,"footer"],[1,"button-list"],["routerLink","/game","type","button","fTranslate","close"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"h1",3),c.Mb(),c.Jb(4,"div",4),c.Nb(5,"div",5),c.Nb(6,"div",6),c.Jb(7,"button",7),c.Mb(),c.Mb(),c.Mb(),c.Mb())},directives:[b.a,s.b],styles:[""],changeDetection:0}),e})();const Y=function(e){return{visibility:e}};function G(e,t){if(1&e&&(c.Nb(0,"div",1),c.Jb(1,"button",7),c.Mb()),2&e){const e=c.Wb(2);c.wb(1),c.ac("ngStyle",c.cc(1,Y,e.canSellAnyProducts?"visible":"hidden"))}}function j(e,t){1&e&&(c.Nb(0,"div",1),c.Jb(1,"button",8),c.Mb())}function z(e,t){1&e&&(c.Nb(0,"div",1),c.Jb(1,"button",9),c.Mb())}function A(e,t){if(1&e){const e=c.Ob();c.Nb(0,"button",10),c.Ub("click",function(){return c.ec(e),c.Wb(2).next()}),c.Mb()}}function Z(e,t){if(1&e&&(c.Nb(0,"div",4),c.hc(1,G,2,3,"div",5),c.hc(2,j,2,0,"div",5),c.hc(3,z,2,0,"div",5),c.Nb(4,"div",1),c.hc(5,A,1,0,"button",6),c.Mb(),c.Mb()),2&e){const e=c.Wb();c.wb(1),c.ac("ngIf",e.isTradePhase),c.wb(1),c.ac("ngIf",e.isTradePhase),c.wb(1),c.ac("ngIf",e.isTradePhase),c.wb(2),c.ac("ngIf",e.canNext)}}const $=[{path:"",component:x,children:[{path:"",pathMatch:"full",component:(()=>{class e{constructor(e,t){this.gameService=e,this.changeDetectorRef=t,this.gameObserver={turnChange:()=>this.changeDetectorRef.markForCheck(),phaseChange:()=>this.changeDetectorRef.markForCheck(),resourcesChange:()=>this.changeDetectorRef.markForCheck()}}get canNext(){return this.gameService.canProceedToNextPlayer}get canSellAnyProducts(){return this.gameService.canSellAnyProduct()}get isHumanOnTurn(){return this.gameService.isHumanOnTurn}get isTradePhase(){return this.gameService.isTradePhase}ngOnDestroy(){this.gameService.removeObserver(this.gameObserver)}ngOnInit(){this.gameService.addObserver(this.gameObserver)}next(){this.gameService.proceedToNextPlayer()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a),c.Ib(c.h))},e.\u0275cmp=c.Cb({type:e,selectors:[["f-menu-bar"]],decls:4,vars:1,consts:[[1,"game-menu","top","right"],[1,"game-menu-item"],["routerLink","/game/menu","type","button","fTranslate","menu"],["class","game-menu bottom right",4,"ngIf"],[1,"game-menu","bottom","right"],["class","game-menu-item",4,"ngIf"],["type","button","fTranslate","next",3,"click",4,"ngIf"],["routerLink","/game/products","type","button","fTranslate","products",3,"ngStyle"],["routerLink","/game/cards","type","button","fTranslate","cards"],["routerLink","/game/trade","type","button","fTranslate","trade"],["type","button","fTranslate","next",3,"click"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Jb(2,"button",2),c.Mb(),c.Mb(),c.hc(3,Z,6,4,"div",3)),2&e&&(c.wb(3),c.ac("ngIf",t.isHumanOnTurn))},directives:[s.b,b.a,i.k,i.l],styles:[""],changeDetection:0}),e})()},{path:"cards",pathMatch:"full",component:J},{path:"menu",pathMatch:"full",component:D},{path:"products",pathMatch:"full",component:X},{path:"score",pathMatch:"full",component:W},{path:"settings",pathMatch:"full",component:E},{path:"trade",pathMatch:"full",component:L}]}];let Q=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[s.c.forChild($)],s.c]}),e})();var V=n("PCNd");let K=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[i.b,V.a,Q]]}),e})()}}]);