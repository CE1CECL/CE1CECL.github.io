"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[9948],{209948:(e,n,r)=>{r.r(n);r.d(n,{default:()=>Y});var t=r(785893),i=r(667294),o=r(496486),s=r.n(o),l=r(331535),a=r(34076),c=r(55690),u=r(807322),d=r(99298),f=r(67416),p=r(766936),h=r(917870),m=r(96920),y=r(339710),b=r(822157),v=r(469525),g=r(832010),j=r(757987),O=r(565228),x=r(410665),S=r(461061),C=r(959797),N=r(871548),I=r.n(N);function w(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function L(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}
function P(e){var n=e.applicationName,r=e.isSynced,i=e.onSync,o=!r,s=o&&null==i,a=r?O.Z:x.Z,c=r?C.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_SYNCED:C.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_UNSYNCED;return(0,t.jsxs)("div",{className:I().syncCard,children:[(0,t.jsx)(a,{width:20,height:20,color:(0,g.Lq)(S.Ilk.YELLOW_300)}),(0,t.jsx)("div",{className:I().label,children:(0,t.jsx)(l.xv,{variant:"text-md/normal",children:c.format({integrationName:n})})}),o?(0,t.jsx)(j.ZP,{text:C.Z.Messages.INTEGRATIONS_PERMISSIONS_SYNC_DISABLED,shouldShow:s,children:function(e){return(0,t.jsx)("div",L(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){w(e,n,r[n])}))}return e}({},e),{children:(0,t.jsx)(l.zx,{size:l.zx.Sizes.SMALL,
color:l.zx.Colors.PRIMARY,onClick:i,disabled:s,children:C.Z.Messages.SYNC_NOW})}))}}):null]})}var E=r(443080),M=r.n(E),A=r(100293),k=r.n(A);function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function R(e,n,r,t,i,o,s){try{var l=e[o](s),a=l.value}catch(e){r(e);return}l.done?n(a):Promise.resolve(a).then(t,i)}function z(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function s(e){R(o,t,i,s,l,"next",e)}function l(e){R(o,t,i,s,l,"throw",e)}s(void 0)}))}}function _(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function D(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(t=r.next()).done);s=!0){o.push(t.value);if(n&&o.length===n)break}}catch(e){l=!0;i=e}finally{try{
s||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Z(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=function(e,n){var r,t,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,t&&(i=2&o[0]?t.return:o[0]?t.throw||((i=t.return)&&i.call(t),
0):t.next)&&!(i=i.call(t,o[1])).done)return i;(t=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;t=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(i=s.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1];i=o;break}if(i&&s.label<i[2]){s.label=i[2];s.ops.push(o);break}i[2]&&s.ops.pop();s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e];t=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};function Y(e){var n=e.applicationIcon,r=e.applicationId,o=e.applicationName,p=e.command,h=e.guildId,g=e.onClose,j=e.transitionState,O=D(i.useState(null),2),x=O[0],S=O[1],N=D(i.useState(!1),2),I=N[0],w=N[1],L=(0,
b.Z)(h,r,p.id),E=L.applicationPermissions,A=L.hasChanges,k=L.isSynced,Z=L.permissions,R=L.selectedPermissionCount,Y=L.sync,U=i.useCallback(z((function(){var e,n,t,i,o,l,a,f,b,v,j,O,x,C,N;return T(this,(function(I){switch(I.label){case 0:if(!A){g();return[2]}i=s().difference(Object.keys(null!==(t=p.permissions)&&void 0!==t?t:{}),Object.keys(Z));o=s().omit(k?{}:function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){_(e,n,r[n])}))}return e}({},Z),i);l=h;a=(0,d.bD)(h);f=(0,y.rE)(l,u.Kw.ROLE);b=(0,y.rE)(a,u.Kw.CHANNEL);j=null===(v=null===(e=E[f])||void 0===e?void 0:e.permission)||void 0===v||v;x=null===(O=null===(n=E[b])||void 0===n?void 0:n.permission)||void 0===O||O;C=Object.values(o).map((function(e){return{id:e.id,permission:e.permission,
type:e.type}}));S(null);w(!0);I.label=1;case 1:I.trys.push([1,3,,4]);return[4,m.U3({defaultEveryoneValue:j,defaultEverywhereValue:x,applicationId:r,commandId:p.id,guildId:h,permissions:C})];case 2:I.sent();w(!1);g();return[3,4];case 3:N=I.sent();S(new c.Z(N));return[3,4];case 4:w(!1);return[2]}}))})),[r,E,p.id,p.permissions,h,A,k,g,Z,S,w]);i.useEffect((function(){return function(){m.Ui(p.id);a.Z.stopEditingCommandPermissions(p.id)}}),[p.id]);var B=(0,y.gw)(p.type,p.displayName);return(0,t.jsxs)(f.Y0,{"aria-label":C.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,size:f.Cg.MEDIUM,transitionState:j,children:[(0,t.jsxs)(f.xB,{separator:!1,className:M().modalHeader,children:[(0,t.jsx)(G,{icon:n,id:r,name:o}),(0,t.jsxs)("div",{className:M().headerDescription,children:[(0,t.jsx)(l.xv,{variant:"text-md/semibold",children:B}),(0,t.jsx)(l.xv,{color:"text-muted",variant:"text-sm/normal",children:p.displayDescription})]})]}),(0,t.jsxs)(f.hz,{className:M().modalBody,children:[(0,
t.jsx)("div",{className:M().section,children:(0,t.jsx)(P,{applicationName:o,isSynced:k,onSync:Y})}),null==x||x.hasFieldErrors()?null:(0,t.jsx)(l.kz,{children:x.getAnyErrorMessage()}),(0,t.jsx)(v.Z,{applicationId:r,commandId:p.id,guildId:h,inModal:!0,permissions:Z,selectedPermissionCount:R,applicationPermissions:E,isSynced:k})]}),(0,t.jsxs)(f.mz,{className:M().modalFooter,children:[(0,t.jsx)(l.zx,{type:"submit",disabled:I,onClick:U,color:!0===A?l.zx.Colors.GREEN:l.zx.Colors.PRIMARY,children:C.Z.Messages.SAVE}),(0,t.jsx)(l.zx,{onClick:g,look:l.zx.Looks.LINK,color:l.zx.Colors.PRIMARY,children:C.Z.Messages.CANCEL})]})]})}function G(e){var n,r=e.icon,i=e.id,o=null!==(n=h.ZP.getApplicationIconURL({id:i,icon:r,size:40}))&&void 0!==n?n:k();return(0,t.jsx)(p.ZP,{src:o,size:p.ZP.Sizes.SIZE_40,"aria-hidden":!0})}},565228:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(785893);r(667294);function i(e){
var n=e.width,r=void 0===n?18:n,i=e.height,o=void 0===i?18:i,s=e.color,l=void 0===s?"currentColor":s,a=e.foreground,c=e.className;return(0,t.jsx)("svg",{width:r,height:o,className:c,viewBox:"0 0 18 18",children:(0,t.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,t.jsx)("path",{d:"M9,3 L9,0.75 L6,3.75 L9,6.75 L9,4.5 C11.4825,4.5 13.5,6.5175 13.5,9 C13.5,9.7575 13.3125,10.4775 12.975,11.1 L14.07,12.195 C14.655,11.2725 15,10.1775 15,9 C15,5.685 12.315,3 9,3 Z M9,13.5 C6.5175,13.5 4.5,11.4825 4.5,9 C4.5,8.2425 4.6875,7.5225 5.025,6.9 L3.93,5.805 C3.345,6.7275 3,7.8225 3,9 C3,12.315 5.685,15 9,15 L9,17.25 L12,14.25 L9,11.25 L9,13.5 Z",fill:l,className:a,fillRule:"nonzero"})})})}},410665:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(785893);r(667294);function i(e){var n=e.width,r=void 0===n?18:n,i=e.height,o=void 0===i?18:i,s=e.color,l=void 0===s?"currentColor":s,a=e.foreground,c=e.background,u=e.className;return(0,t.jsx)("svg",{width:r,height:o,className:u,
viewBox:"0 0 18 18",children:(0,t.jsxs)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[(0,t.jsx)("polygon",{points:"0 0 18 0 18 18 0 18"}),(0,t.jsx)("path",{d:"M2.25,9 C2.25,10.6575 2.9325,12.15 4.02,13.23 L2.25,15 L6.75,15 L6.75,10.5 L5.07,12.18 C4.26,11.3625 3.75,10.245 3.75,9 C3.75,7.0425 5.0025,5.3775 6.75,4.7625 L6.75,3.195 C4.1625,3.8625 2.25,6.2025 2.25,9 Z M15.75,3 L11.25,3 L11.25,7.5 L12.93,5.82 C13.74,6.6375 14.25,7.755 14.25,9 C14.25,10.9575 12.9975,12.6225 11.25,13.2375 L11.25,14.805 C13.8375,14.1375 15.75,11.7975 15.75,9 C15.75,7.3425 15.0675,5.85 13.98,4.77 L15.75,3 Z",fillOpacity:"0.3",fill:l,fillRule:"nonzero",className:c}),(0,t.jsx)("path",{d:"M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",fill:l,className:a})]})})}}}]);
//# sourceMappingURL=42ab33e91efeead2f802.js.map