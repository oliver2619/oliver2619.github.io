"use strict";(self.webpackChunknumbers=self.webpackChunknumbers||[]).push([[164],{4164:(C,p,i)=>{i.r(p),i.d(p,{GameModule:()=>M});var u=i(6814),m=i(6538),t=i(4946),d=i(9375),c=i(2271);const h=["svg"],l=function(n){return{visibility:n}},v=[{path:"main",component:(()=>{class n{get score(){return this.gameService.score}get isOver(){return this.gameService.isOver}constructor(e){this.gameService=e,this.shiftX=0,this.shiftY=0}ngOnDestroy(){this.gameService.endGame()}ngAfterViewInit(){this.gameService.updateSvg(this.svg.nativeElement)}pointerDown(e){!this.gameService.isAnimating&&void 0===this.pointerIdDown&&0===e.button&&(this.pointerIdDown=e.pointerId,this.svg.nativeElement.setPointerCapture(e.pointerId),this.shiftX=0,this.shiftY=0),e.preventDefault()}pointerUp(e){this.pointerIdDown===e.pointerId&&0===e.button&&(this.pointerIdDown=void 0,this.svg.nativeElement.releasePointerCapture(e.pointerId),this.gameService.moved(this.shiftX,this.shiftY)),e.preventDefault()}pointerMove(e){this.pointerIdDown===e.pointerId&&(this.shiftX+=e.movementX,this.shiftY+=e.movementY,this.gameService.moving(this.shiftX,this.shiftY)),e.preventDefault()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["n-main"]],viewQuery:function(e,s){if(1&e&&t.Gf(h,5),2&e){let r;t.iGM(r=t.CRH())&&(s.svg=r.first)}},decls:8,vars:4,consts:[["nText","game.score"],[3,"pointerdown","pointerup","pointermove"],["svg",""],["nText","game.over",3,"ngStyle"],[1,"button-list"],["type","button","nText","menu.back","routerLink","/menu"]],template:function(e,s){1&e&&(t.TgZ(0,"div"),t._UZ(1,"span",0),t._uU(2),t.qZA(),t.O4$(),t.TgZ(3,"svg",1,2),t.NdJ("pointerdown",function(a){return s.pointerDown(a)})("pointerup",function(a){return s.pointerUp(a)})("pointermove",function(a){return s.pointerMove(a)}),t.qZA(),t.kcU(),t._UZ(5,"div",3),t.TgZ(6,"div",4),t._UZ(7,"button",5),t.qZA()),2&e&&(t.xp6(2),t.hij(": ",s.score,""),t.xp6(3),t.Q6J("ngStyle",t.VKq(2,l,s.isOver?"visible":"hidden")))},dependencies:[u.PC,m.rH,c.f],styles:["[_nghost-%COMP%]{width:100%;height:100%;box-sizing:border-box;padding:2ex;display:flex;flex-direction:column;align-items:center;justify-content:space-between}"],changeDetection:0}),n})()},{path:"**",redirectTo:"main"}];let g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(v),m.Bz]}),n})();var f=i(6208);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,g,f.m]}),n})()}}]);