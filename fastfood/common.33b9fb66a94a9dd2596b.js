(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9zBX":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("fXoL"),i=n("ri4N");let a=(()=>{class e{constructor(e,t){this.translateService=e,this.elementRef=t}ngOnInit(){void 0!==this.text&&(this.elementRef.nativeElement.innerText=this.translateService.get(this.text))}}return e.\u0275fac=function(t){return new(t||e)(r.Ib(i.a),r.Ib(r.l))},e.\u0275dir=r.Db({type:e,selectors:[["","fTranslate",""]],inputs:{text:["fTranslate","text"]}}),e})()},ri4N:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("fXoL");const i={aiPlayer:"Computer",aiPlayerAmateur:"Amateur KI",aiPlayerBeginner:"Anf\xe4nger KI",aiPlayerProfessional:"Profi KI",blue:"Blau",building:"Geb\xe4ude",buy:"Kaufen",cancel:"Abbrechen",cards:"Karten",cash:"Geld",city:"Stadt",close:"Schliessen",continueGame:"Fortsetzen",customers:"Kunden",exit:"Beenden",farm:"Bauernhof",field:"Feld",gameOver:"Spiel zuende",green:"Gr\xfcn",harvest:"Ernte",industry:"Industrie",initialBuildings:"Startgeb\xe4ude",initialMoney:"Startgeld",initialMoneyLittle:"Wenig",initialMoneyNormal:"Normal",initialMoneyPlenty:"Viel",menu:"Men\xfc",money:"Geld",name:"Name",newGame:"Neues Spiel",next:"Weiter",numberOfPlayers:"Anzahl Spieler",placeBuilding:"Geb\xe4ude errichten",placeDisaster:"Katastrophe setzen",plantation:"Plantage",player:"Spieler",products:"Produkte",put:"Setzen",red:"Rot",remainingScore:"Verbleibende Punkte",runningCosts:"Kosten",save:"Speichern",score:"Punkte",sell:"Verkaufen",settings:"Einstellungen",soils:"Rohstoffe",start:"Starten",statistics:"Statistik",tile:"Feld",trade:"Handeln",upgradeBuilding:"Ausbauen",userName:"Dein Name",yellow:"Gelb"};let a=(()=>{class e{constructor(){const e=/^([A-Z]+)/gi.exec(navigator.language);null!==e&&e[1].toLowerCase(),this.dictionary=i}get(e,...t){const n=this.dictionary[e];return void 0===n?(console.warn(`Text '${e}' not translated.`),e):t.length>0?this.format(n,t):n}format(e,t){const n=/\$\{([0-9]+)\}/g;for(;;){const r=n.exec(e);if(null===r)break;{const i=String(t[Number(r[1])]);e=e.substring(0,r.index)+i+e.substring(r.index+r[0].length),n.lastIndex=r.index+i.length}}return e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);