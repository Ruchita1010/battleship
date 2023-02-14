(()=>{"use strict";var e={131:(e,r,n)=>{n.d(r,{Z:()=>l});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"#gameboards-screen {\r\n  min-height: 100vh;\r\n  padding: 2vmax;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gameboard-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.gameboard {\r\n  width: 35vmax;\r\n  height: 35vmax;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  border-top: 1px solid var(--color-blackolive);\r\n  border-left: 1px solid var(--color-blackolive);\r\n}\r\n\r\n.cell {\r\n  position: relative;\r\n  border-bottom: 1px solid var(--color-blackolive);\r\n  border-right: 1px solid var(--color-blackolive);\r\n}\r\n\r\n.board-btn {\r\n  padding: 10px;\r\n  font-size: 2vmin;\r\n  margin: 1rem;\r\n}\r\n\r\n.ship {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: var(--color-blackolive-transparent);\r\n  border: 4px solid var(--color-blackolive);\r\n}\r\n\r\n.hit::before {\r\n  content: '✕';\r\n  display: grid;\r\n  place-items: center;\r\n  font-size: 2.5vmax;\r\n  font-weight: bold;\r\n  color: var(--color-blackolive);\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.miss::before {\r\n  content: '•';\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n  font-size: 2vmax;\r\n  color: var(--color-blackolive);\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.veil {\r\n  position: absolute;\r\n  top: -4px;\r\n  left: -2px;\r\n  bottom: -4px;\r\n  right: -2px;\r\n  display: grid;\r\n  place-items: center;\r\n  backdrop-filter: blur(6px);\r\n}\r\n\r\n#play-btn {\r\n  padding: 1vmax;\r\n  font-size: 2vmax;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n",""]);const l=i},756:(e,r,n)=>{n.d(r,{Z:()=>u});var t=n(81),o=n.n(t),a=n(645),i=n.n(a),l=n(667),s=n.n(l),c=new URL(n(614),n.b),d=i()(o());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Source+Sans+Pro&display=swap);"]);var p=s()(c);d.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --color-blackolive: hsl(60, 11%, 21%);\r\n  --color-blackolive-transparent: hsla(60, 10%, 21%, 0.452);\r\n  --color-gainsboro: hsl(0, 0%, 87%);\r\n}\r\n\r\n#main-container {\r\n  min-height: 100vh;\r\n  background: url("+p+") no-repeat center center/cover;\r\n  font-family: 'Cinzel Decorative', cursive;\r\n}\r\n\r\n.btn {\r\n  color: var(--color-gainsboro);\r\n  background-color: var(--color-blackolive);\r\n  font-family: 'Cinzel Decorative', cursive;\r\n  letter-spacing: 4px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.btn:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.02);\r\n}\r\n",""]);const u=d},724:(e,r,n)=>{n.d(r,{Z:()=>u});var t=n(81),o=n.n(t),a=n(645),i=n.n(a),l=n(667),s=n.n(l),c=new URL(n(614),n.b),d=i()(o()),p=s()(c);d.push([e.id,"#modal {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background: url("+p+") no-repeat center/cover;\r\n}\r\n\r\n/* drag and drop ships */\r\n#port {\r\n  width: 35vmax;\r\n  height: 35vmax;\r\n  display: grid;\r\n  align-items: center;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.draggable-ship {\r\n  height: 3.5vmax;\r\n  margin-left: 2vmax;\r\n  background-color: var(--color-blackolive-transparent);\r\n  border: 4px solid var(--color-blackolive);\r\n  cursor: grab;\r\n}\r\n\r\n/* winner display */\r\n#winner-container {\r\n  display: grid;\r\n  place-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n#winner-name {\r\n  font-size: 5vmax;\r\n  color: var(--color-blackolive);\r\n}\r\n\r\n#restart-btn {\r\n  font-size: 1.5vmax;\r\n}\r\n",""]);const u=d},35:(e,r,n)=>{n.d(r,{Z:()=>l});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"#start-screen {\r\n  display: grid;\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  place-content: center;\r\n  gap: 3rem;\r\n  font-size: 2.4vmax;\r\n  padding: 10px;\r\n}\r\n\r\n#troop-name {\r\n  padding: 0.1rem;\r\n  font-size: 2.4vmax;\r\n  color: var(--color-blackolive);\r\n  background: transparent;\r\n  box-shadow: 0px 1.5px var(--color-blackolive);\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Cinzel Decorative', cursive;\r\n}\r\n\r\n#troop-name::placeholder {\r\n  font-size: 2vmax;\r\n  color: var(--color-blackolive);\r\n}\r\n\r\n.mode-label {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  margin-bottom: 3vmin;\r\n  color: var(--color-blackolive);\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type='radio'] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 4vmin;\r\n  height: 4vmin;\r\n  margin: 0;\r\n  background-color: transparent;\r\n  border: 1px solid var(--color-blackolive);\r\n  transition: background-color 0.25s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type='radio']:checked {\r\n  background-color: var(--color-blackolive);\r\n}\r\n\r\n#start-btn {\r\n  place-self: center;\r\n  padding: 1rem;\r\n  font-size: 2.4vmax;\r\n}\r\n",""]);const l=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},667:e=>{e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=t.base?s[0]+t.base:s[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var h=o(m,t);t.byIndex=l,r.splice(l,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);r[l].references--}for(var s=t(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},614:(e,r,n)=>{e.exports=n.p+"assets/bg.jpg"}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),i=n.n(a),l=n(565),s=n.n(l),c=n(216),d=n.n(c),p=n(589),u=n.n(p),m=n(131),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var v=n(756),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),r()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;var b=n(724),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),r()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var y=n(35),x={};x.styleTagTransform=u(),x.setAttributes=s(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),r()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;const w=(e,r)=>{const n=document.createElement("button");return n.textContent=e,n.id=r,n.classList.add("btn","board-btn"),n},S=e=>[...document.querySelectorAll(".gameboard")[e].children],k=()=>{const e=document.createElement("div");return e.id="modal",document.querySelector("#main-container").appendChild(e),e},E=()=>{const e=document.querySelector(".veil");if(e)return void e.remove();const r=document.querySelectorAll(".gameboard")[1];r.style.position="relative";const n=document.createElement("div");n.classList.add("veil");const t=w("PLAY","play-btn");n.appendChild(t),r.appendChild(n)},C=n.p+"assets/hit.mp3",A=n.p+"assets/miss.mp3",L=()=>{const e=document.createElement("div");return e.classList.add("gameboard-container"),e},z=e=>{const r=document.createElement("div");r.classList.add("gameboard");for(let n=0;n<e;n++)for(let t=0;t<e;t++){let e=document.createElement("div");e.classList.add("cell"),e.setAttribute("id",`${n}${t}`),r.appendChild(e)}return r},T=e=>{const r=document.createElement("div");r.id="gameboards-screen";const n=(e=>{const r=L(),n=z(e),t=(()=>{const e=document.createElement("div");e.id="board-btns";const r=w("RESET","reset-board-btn"),n=w("RANDOM","randomize-board-btn");return e.appendChild(n),e.appendChild(r),e})();return r.appendChild(n),r.appendChild(t),r})(e),t=(e=>{const r=L(),n=z(e);return r.appendChild(n),r})(e);return r.appendChild(n),r.appendChild(t),r},M=()=>{S(0).forEach((e=>{e.innerHTML=""}))},Z=(e,r,n)=>{const t=S(n).find((r=>r.id===`${e[0]}${e[1]}`));if(r)return t.classList.add("hit"),void new Audio(C).play();new Audio(A).play(),t.classList.add("miss")},q=(e,r)=>{const{ship:n,coordinates:t,orientation:o}=e,a=r.find((e=>e.id===`${t[0].xCoord}${t[0].yCoord}`)),i=document.createElement("div");i.classList.add("ship"),"vertical"===o?(i.style.height=3.5*n.length+"vmax",i.style.width="3.5vmax"):(i.style.width=3.5*n.length+"vmax",i.style.height="3.5vmax"),a.appendChild(i)},R=(e,r)=>{const n=r.target;if("horizontal"===n.dataset.orientation)return n.style.width="3.5vmax",n.style.height=3.5*e+"vmax",void(n.dataset.orientation="vertical");n.style.height="3.5vmax",n.style.width=3.5*e+"vmax",n.dataset.orientation="horizontal"},P=e=>{const r=S(0);e.forEach((e=>{q(e,r)}))},I=e=>{e.gameboard.reset(),M();const r=k(),n=z(e.gameboard.size),t=(e=>{const r=document.createElement("div");r.id="port";let n,t=0,o=0;return e.forEach((e=>{const a=document.createElement("div");a.id=o,a.classList.add("draggable-ship"),a.setAttribute("draggable","true"),a.setAttribute("data-orientation","horizontal"),a.style.width=3.5*e.length+"vmax",a.addEventListener("click",R.bind(null,e.length)),t===e.length||(n=document.createElement("div"),n.classList.add("ship-container",`ship-size-${e.length}`)),n.appendChild(a),o++,t=e.length,r.appendChild(n)})),r})(e.ships);r.appendChild(n),r.appendChild(t),((e,r)=>{let n,t=0;document.querySelectorAll(".draggable-ship").forEach((e=>{e.addEventListener("dragstart",(e=>{n=e.target}))})),r.addEventListener("dragover",(e=>{e.preventDefault()})),r.addEventListener("drop",(o=>{const[a,i]=o.target.id.split("");if(e.gameboard.placeShip(e.ships[n.id],Number(a),Number(i),n.dataset.orientation)){t++,n.remove();const o=e.gameboard.placedShips[t-1];q(o,[...r.children])}if(10!==t);else{document.querySelector("#modal").remove();const r=e.gameboard.placedShips;P(r)}}))})(e,n)},$=e=>{M(),e.placeShipsRandomly();const r=e.gameboard.placedShips;P(r)},j=e=>{const r=k(),n=(e=>{const r=document.createElement("div");r.id="winner-container";const n=document.createElement("p");n.id="winner-name",n.textContent=`${e} wins!`;const t=w("RESTART","restart-btn");return t.addEventListener("click",(()=>{location.reload()})),r.appendChild(n),r.appendChild(t),r})(e);r.appendChild(n)},N=[],D=e=>{const r=S(1);e.gameboard.placedShips.forEach((e=>{const n=N.includes(e.ship);if(e.ship.isSunk()&&!n)return q(e,r),void N.push(e.ship)}))},F=async(e,r,n)=>{let t;t=e.play(r,n.target.id,!1),Z(t.coords,t.hit,1),D(r),t.win?j(e.name):(await new Promise((e=>setTimeout(e,1e3))),t=r.play(e,null,!0),Z(t.coords,t.hit,0),t.win&&j(r.name))},O=(e,r)=>{S(1).forEach((n=>{n.style.cursor="crosshair",n.addEventListener("click",F.bind(null,e,r),{once:!0})}))},U=(e,r,n)=>{document.querySelectorAll(".board-btn").forEach((e=>{e.remove()})),E(),"manual"!==e?((e,r)=>{let n=e;const t=setInterval((()=>{const o=n===e?r:e,a=n.play(o,null,!0),i=n===e?1:0;Z(a.coords,a.hit,i),n===e&&D(o),a.win&&(j(n.name),clearInterval(t)),n=n===e?r:e}),500)})(r,n):O(r,n)},H=(e,r)=>{const n=(e=>{const r=[],n=new Array(e).fill(0).map((()=>new Array(e).fill(0))),t=[];return{grid:n,missedShots:t,placedShips:r,size:e,isFleetSunk:()=>r.every((e=>e.ship.isSunk())),placeShip:(t,o,a,i)=>{let l=[];if(o+t.length>e||a+t.length>e)return!1;for(let e=0;e<t.length;e++){let r="vertical"===i?o+e:o,t="vertical"===i?a:a+e;if(0!==n[r][t])return!1;n[r][t]=1,l.push({xCoord:r,yCoord:t})}return r.push({ship:t,orientation:i,coordinates:l}),!0},receiveAttack:(e,o)=>{if(0===n[e][o])return t.push({x:e,y:o}),!1;const a=r.find((r=>r.coordinates.some((({xCoord:r,yCoord:n})=>r===e&&n===o))));return a&&a.ship.hit(),!0},reset:()=>{n.forEach((e=>{e.forEach(((r,n)=>{e[n]=0}))})),r.length=0}}})(r),t=[4,3,3,2,2,2,1,1,1,1].map((e=>(e=>{let r=0;return{length:e,hit:()=>{r+=1},isSunk:()=>e===r}})(e)));return{attackedCoordinates:[],gameboard:n,name:e,ships:t,placeShipsRandomly:()=>{n.reset(),t.forEach((e=>{let t=!1;for(;!t;){let o=Math.floor(Math.random()*r),a=Math.floor(Math.random()*r),i=Math.random()<.5?"horizontal":"vertical";t=n.placeShip(e,o,a,i)}}))},play:(e,n,t)=>{const[o,a]=((e,n,t)=>{if(!t)return n.split("").map(Number);let o,a;do{o=Math.floor(Math.random()*r),a=Math.floor(Math.random()*r)}while(e.some((e=>e.x===o&&e.y===a)));return e.push({x:o,y:a}),[o,a]})(e.attackedCoordinates,n,t);let i={coords:[o,a],hit:e.gameboard.receiveAttack(o,a),win:!1};return e.gameboard.isFleetSunk()&&(i.win=!0),i}}};document.querySelector("#start-screen").addEventListener("submit",(e=>{e.preventDefault();const r=document.querySelector("#troop-name").value,n=document.querySelector('input[type="radio"]:checked').value,t=H(r,10),o=H("Robobo",10);(e=>{document.querySelector("#main-container").innerHTML="";const r=T(e);document.querySelector("#main-container").appendChild(r),E()})(t.gameboard.size),o.placeShipsRandomly(),t.placeShipsRandomly(),P(t.gameboard.placedShips),document.querySelector("#randomize-board-btn").addEventListener("click",$.bind(null,t)),document.querySelector("#reset-board-btn").addEventListener("click",I.bind(null,t)),document.querySelector("#play-btn").addEventListener("click",U.bind(null,n,t,o))}))})()})();