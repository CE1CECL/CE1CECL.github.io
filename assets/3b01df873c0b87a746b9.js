(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[32290],{182765:(e,t,n)=>{e.exports=n.p+"092b071c3b3141a58787415450c27857.png"},130058:(e,t,n)=>{e.exports=n.p+"5653db0e5f0ad6258ede457561a86b97.png"},361820:(e,t,n)=>{e.exports=n.p+"239c4e9bd43706cd775a16162391b234.png"},488687:(e,t,n)=>{e.exports=n.p+"068fab5e97080d7f61de96c40808aff5.png"},312805:(e,t,n)=>{e.exports=n.p+"a04d48658b7cded5ac237dfa0c3a15a7.png"},401246:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(785893),o=n(667294),i=n(101653),s=n(163585),c=n.n(s);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function u(e){u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return u(e)}function O(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&d(e,t)}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){l(e,t,n[t])}))}return e}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function f(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){d=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return d(e,t)}var _=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var N=n(182765),h=function(e){O(n,e);var t=p(n);function n(){a(this,n);return t.apply(this,arguments)}n.prototype.render=function(){var e=this.props,t=e.className,n=e.text,o=E(e,["className","text"]);return(0,r.jsx)("div",{style:{padding:8,borderRadius:4,width:o.size,
height:o.size,backgroundColor:o.bgColor},className:t,children:(0,r.jsx)(i.Z,C({value:n,level:"M"},o))})};return n}(o.PureComponent);h.defaultProps={size:128,bgColor:"#ffffff",fgColor:"#000000"};(function(e){O(n,e);var t=p(n);function n(){a(this,n);return t.apply(this,arguments)}n.prototype.render=function(){return(0,r.jsxs)("div",{className:c().qrCodeContainer,children:[(0,r.jsx)(h,C({},this.props)),(0,r.jsx)("div",{className:c().qrCodeOverlay,children:(0,r.jsx)("img",{src:N,alt:""})})]})};return n}(o.PureComponent)).defaultProps={size:144,bgColor:"#ffffff",fgColor:"#000000"};const g=h},259849:(e,t,n)=>{"use strict";n.d(t,{bJ:()=>i,X3:()=>s,zM:()=>c,tA:()=>a,uu:()=>l,KL:()=>u,Lc:()=>O,YE:()=>r,al:()=>E,Ry:()=>C,e8:()=>f})
;var r,o=n(461061),i="xbox://communitylinking/donut/audio",s="https://www.xbox.com/en-US/apps/xbox-app-for-mobile",c="https://login.live.com",a=[o.xVR.VOICE,o.xVR.DM_CHANNELS_READ,o.xVR.GUILDS,o.xVR.GUILDS_MEMBERS_READ,o.xVR.IDENTIFY,o.xVR.CONNECTIONS],l="https://my.account.sony.com",u=a,O=function(e){var t=e.guildId,n=e.channelName,r=e.guildName,o=e.channelId,i=e.muted,s=e.deafened,c=e.nonce,a={channelid:o,guildid:t,channelname:n,guildname:r,muted:String(i),deafened:String(s)};null!=c&&(a.nonce=c);return new URLSearchParams(a)};!function(e){e.PLAYSTATION="playstation";e.XBOX="xbox"}(r||(r={}));var C,E=new Set([r.XBOX,r.PLAYSTATION]);!function(e){e[e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED=27e4]="CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED";e[e.CONSOLE_DEVICE_UNAVAILABLE=270001]="CONSOLE_DEVICE_UNAVAILABLE";e[e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS=270002]="CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS"
;e[e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED=270003]="CONSOLE_DEVICE_COMMUNICATION_RESTRICTED";e[e.CONSOLE_DEVICE_INVALID_POWER_MODE=270004]="CONSOLE_DEVICE_INVALID_POWER_MODE";e[e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR=270005]="CONSOLE_DEVICE_ACCOUNT_LINK_ERROR";e[e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED=270006]="CONSOLE_DEVICE_MAX_MEMBERS_REACHED";e[e.CONSOLE_DEVICE_BAD_COMMAND=270007]="CONSOLE_DEVICE_BAD_COMMAND"}(C||(C={}));var f=new Set([C.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED])},932290:(e,t,n)=>{"use strict";n.r(t);n.d(t,{default:()=>F});var r=n(785893),o=(n(667294),n(954766)),i=n(67416),s=n(23415),c=n(222295),a=n(4666),l=n(461061),u=n(259849);function O(e){var t=e.authToken,n=e.onContinue,o=e.onError,i=e.onClose;return(0,r.jsx)(a.Z,{platformType:l.ABu.XBOX,clientId:c.t.XBOX_APPLICATION_ID,scopes:u.tA,authToken:t,onContinue:n,onError:o,onClose:i})}var C=n(529531),E=n(959797);function f(e){var t=e.onContinue,n=e.onClose;return(0,r.jsx)(C.n,{title:E.Z.Messages.CONNECT_XBOX_ERROR_TITLE,
body:E.Z.Messages.CONNECT_XBOX_ERROR_BODY,onClose:n,onContinue:t})}var d=n(240243);function _(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function p(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function N(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r]
;t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function h(e){var t=e.width,n=void 0===t?24:t,o=e.height,i=void 0===o?24:o,s=e.color,c=void 0===s?"currentColor":s,a=e.foreground,l=N(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){_(e,t,n[t])}))}return e}({},(0,d.Z)(l)),{width:n,height:i,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{className:a,fill:c,fillRule:"evenodd",clipRule:"evenodd",
d:"M5.66493 5H18.3351C19.9079 5 21.2137 6.21463 21.3273 7.78329L21.9932 16.9774C22.0684 18.0165 21.2871 18.9198 20.248 18.9951C20.2027 18.9984 20.1572 19 20.1117 19C18.9191 19 17.8786 18.1904 17.5855 17.0342L17.0699 15H6.93021L6.41455 17.0342C6.12148 18.1904 5.081 19 3.88832 19C2.84651 19 2.00195 18.1554 2.00195 17.1136C2.00195 17.0682 2.0036 17.0227 2.00688 16.9774L2.67277 7.78329C2.78638 6.21463 4.09216 5 5.66493 5ZM14.5001 10C15.3285 10 16.0001 9.32843 16.0001 8.5C16.0001 7.67157 15.3285 7 14.5001 7C13.6716 7 13.0001 7.67157 13.0001 8.5C13.0001 9.32843 13.6716 10 14.5001 10ZM18.5001 13C19.3285 13 20.0001 12.3284 20.0001 11.5C20.0001 10.6716 19.3285 10 18.5001 10C17.6716 10 17.0001 10.6716 17.0001 11.5C17.0001 12.3284 17.6716 13 18.5001 13ZM6.00007 9H4.00008V11H6.00007V13H8.00007V11H10.0001V9H8.00007V7H6.00007V9Z","aria-hidden":!0})}))}var g=n(915306),b=n(95467),x=n(250081),I=n(13918),S=n(488687),A=n.n(S);function y(){return(0,r.jsxs)(I.yC,{children:[(0,r.jsx)(I.Ux,{
text:E.Z.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,children:(0,r.jsx)(g.Z,{})}),(0,r.jsx)(I.Ux,{text:E.Z.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,children:(0,r.jsx)(h,{})})]})}function j(e){var t=e.onContinue,n=e.onClose,o=b.Z.getArticleURL(l.BhN.XBOX_CONNECTION);return(0,r.jsx)(x.Y,{platformType:l.ABu.XBOX,headerConnect:E.Z.Messages.CONNECT_XBOX_LANDING_TITLE,headerReconnect:E.Z.Messages.RECONNECT_XBOX_LANDING_TITLE,body:E.Z.Messages.CONNECT_XBOX_LANDING_BODY,learnMoreLink:o,onClose:n,onContinue:t,img:(0,r.jsx)("img",{src:A(),width:234,height:152,alt:""}),valueProps:(0,r.jsx)(y,{})})}var T=n(540011),L=n(130058),D=n.n(L),R=n(361820),v=n.n(R);function m(e){var t=e.isWaitingForConnection,n=e.onWaitingForConnection,o=e.expectedCallbackState,i=e.onAuthToken,s=e.onError,c=e.onClose,a=t?(0,r.jsx)("img",{src:v(),width:"168",height:"124",alt:""}):(0,r.jsx)("img",{src:D(),width:"152",height:"124",alt:""
}),O=t?E.Z.Messages.XBOX_DETAILS_TITLE_WAITING:E.Z.Messages.XBOX_DETAILS_TITLE,C=t?E.Z.Messages.XBOX_DETAILS_BODY_WAITING:E.Z.Messages.XBOX_DETAILS_BODY;return(0,r.jsx)(T.w,{platformType:l.ABu.XBOX,isWaitingForConnection:t,onWaitingForConnection:n,expectedCallbackState:o,onAuthToken:i,onError:s,onClose:c,img:a,title:O,body:C,redirectDestination:u.zM})}var P=n(331535),X=n(401246),M=n(332233),B=n(652585),w=n(245171),V=n.n(w),U=n(312805),Z=n.n(U);function k(){return(0,r.jsxs)("div",{className:V().getXboxApp,children:[(0,r.jsxs)("div",{className:V().getXboxAppBody,children:[(0,r.jsxs)(P.X6,{className:V().getXboxAppHeading,variant:"text-lg/semibold",children:[(0,r.jsx)("div",{className:V().xboxLogoBox,children:(0,r.jsx)("img",{src:M.Z.get(l.ABu.XBOX).icon.whiteSVG,alt:""})}),E.Z.Messages.GET_XBOX_APP]}),(0,r.jsx)(P.xv,{tag:"p",variant:"text-md/normal",color:"header-secondary",children:E.Z.Messages.CONNECT_XBOX_SUCCESS_APP_BODY}),(0,r.jsx)(P.xv,{variant:"text-sm/medium",
color:"header-secondary",children:(0,r.jsx)(P.ee,{href:b.Z.getArticleURL(l.BhN.XBOX_CONNECTION),children:E.Z.Messages.LEARN_MORE})})]}),(0,r.jsx)(X.Z,{className:V().getXboxAppQR,text:u.X3,size:90})]})}function Y(e){var t=e.onClose;return(0,r.jsx)(B.k,{img:(0,r.jsx)("img",{src:Z(),width:"232",height:"113",alt:""}),title:E.Z.Messages.CONNECT_XBOX_SUCCESS_TITLE,body:E.Z.Messages.CONNECT_XBOX_SUCCESS_BODY,content:(0,r.jsx)(k,{}),onClose:t})}var G=n(999861),H=n(627985),W=n.n(H);function F(e){var t=e.transitionState,n=e.onClose,c=e.analyticsLocation,a=(0,s.l)(c,l.ABu.XBOX),u=a.slide,C=a.gotoNext,E=a.gotoError,d=a.handleWaitingForConnection,_=a.handleAuthToken,p=a.expectedCallbackState,N=a.callbackData;return(0,r.jsx)(i.Y0,{className:W().modal,transitionState:t,disableTrack:!0,children:(0,r.jsxs)(o.My,{activeSlide:u,width:408,children:[(0,r.jsx)(o.Mi,{id:G.E.LANDING,children:(0,r.jsx)(j,{onContinue:C,onClose:n})}),(0,r.jsx)(o.Mi,{id:G.E.PRE_CONNECT,children:(0,r.jsx)(m,{
isWaitingForConnection:!1,onWaitingForConnection:d,onAuthToken:_,onError:E,onClose:n})}),(0,r.jsx)(o.Mi,{id:G.E.PRE_CONNECT_WAITING,children:(0,r.jsx)(m,{isWaitingForConnection:!0,expectedCallbackState:p,onAuthToken:_,onError:E,onClose:n})}),(0,r.jsx)(o.Mi,{id:G.E.DISCORD_CONSENT,children:(0,r.jsx)(O,{authToken:N,onContinue:C,onError:E,onClose:n})}),(0,r.jsx)(o.Mi,{id:G.E.ERROR,children:(0,r.jsx)(f,{onContinue:C,onClose:n})}),(0,r.jsx)(o.Mi,{id:G.E.SUCCESS,children:(0,r.jsx)(Y,{onClose:n})})]})})}},222295:(e,t,n)=>{"use strict";n.d(t,{t:()=>r,M:()=>o});var r;!function(e){e.XBOX_APPLICATION_ID="622174530214821906";e.PLAYSTATION_APPLICATION_ID="1008890872156405890";e.PLAYSTATION_STAGING_APPLICATION_ID="984193235868065795"}(r||(r={}));var o={PLAYSTATION_APPLICATION_IDS:new Set(["984193235868065795","1008890872156405890"]),ALL:new Set(["622174530214821906","984193235868065795","1008890872156405890"])}}}]);
//# sourceMappingURL=3b01df873c0b87a746b9.js.map