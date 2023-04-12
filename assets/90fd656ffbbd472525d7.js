"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[12898,62322,93229,23647],{662322:(t,e,n)=>{n.d(e,{W:()=>u});var r=n(675860),o=n(173436),i=n(630206),c=n(461061);function u(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(i.Z.needsRefresh()){o.Z.dispatch({type:"LOAD_USER_AFFINITIES"});return r.Z.get({url:c.ANM.USER_AFFINITIES,retries:t?3:0,oldFormErrors:!0}).then((function(t){var e=t.body;o.Z.dispatch({type:"LOAD_USER_AFFINITIES_SUCCESS",affinities:e})}),(function(){o.Z.dispatch({type:"LOAD_USER_AFFINITIES_FAILURE"})}))}return Promise.resolve()}},630206:(t,e,n)=>{n.d(e,{Z:()=>v});var r=n(363010),o=n(173436),i=n(105405);function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function f(t){f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){
return t.__proto__||Object.getPrototypeOf(t)};return f(t)}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){u(t,e,n[e])}))}return t}function a(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t,e){l=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return l(t,e)}var p=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var h=864e5,d=!1,b=Object.freeze({userAffinities:[],affinityUserIds:new Set,lastFetched:0}),O=s({},b);function g(){O.affinityUserIds=new Set(O.userAffinities.map((function(t){return t.user_id})).filter((function(t){return!i.Z.isBlocked(t)})))}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&l(t,e)}(n,t);var e=y(n);function n(){c(this,n);return e.apply(this,arguments)}var r=n.prototype;r.initialize=function(t){this.waitFor(i.Z);if(null!=t){O.userAffinities=t.userAffinities;O.affinityUserIds=new Set(t.affinityUserIds);O.lastFetched=t.lastFetched}
this.syncWith([i.Z],g)};r.needsRefresh=function(){return Date.now()-O.lastFetched>h};r.getFetching=function(){return d};r.getState=function(){return O};r.getUserAffinities=function(){return O.userAffinities};r.getUserAffinitiesUserIds=function(){return O.affinityUserIds};r.__getLocalVars=function(){return{USER_AFFINITY_TTL:h,fetching:d,DEFAULT_AFFINITY_STORE_STATE:b,state:O}};return n}(r.ZP.PersistedStore);m.displayName="UserAffinitiesStore";m.persistKey="UserAffinitiesStore";m.migrations=[function(t){return null}];const v=new m(o.Z,{LOAD_USER_AFFINITIES_SUCCESS:function(t){var e,n=t.affinities;O.userAffinities=null!==(e=n.user_affinities)&&void 0!==e?e:[];O.lastFetched=Date.now();g();d=!1},LOAD_USER_AFFINITIES:function(){d=!0},LOAD_USER_AFFINITIES_FAILURE:function(){d=!1},LOGOUT:function(){O=s({},b)}})},246887:(t,e,n)=>{n.d(e,{ox:()=>A,OZ:()=>P,ZP:()=>R});var r=n(785893),o=n(667294),i=n(294184),c=n.n(i),u=n(331535),f=n(487502),s=n(461061),a=n(643193),l=n.n(a),p=n(380203),y=n.n(p)
;function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function b(t){b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return b(t)}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&S(t,e)}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){d(t,e,n[e])}))}return t}function m(t,e){e=null!=e?e:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function v(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t,e){S=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return S(t,e)}var _=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}var j=o.createContext(s.BRd.DARK),E=j.Provider,I=j.Consumer,A=function(t){O(n,t);var e=w(n);function n(){h(this,n);return e.apply(this,arguments)}n.prototype.render=function(){var t=this.props,e=t.lightSrc,n=t.darkSrc,o=t.width,i=t.height,u=t.offsetX,a=t.offsetY,p=t.style;return(0,r.jsx)(I,{children:function(t){return(0,r.jsx)(f.Z.Child,{grow:0,className:c()(l().image,y().marginBottom40),style:m(g({},p),{width:o,height:i,marginLeft:u,marginTop:a,backgroundImage:"url(".concat(t===s.BRd.DARK?n:e,")")})})}})};return n}(o.PureComponent),P=function(t){var e=t.children,n=t.className,o=t.noteClassName,i=t.note,s=t.style;return(0,r.jsxs)(f.Z.Child,{grow:0,direction:f.Z.Direction.VERTICAL,style:s,children:[null!=e&&(0,r.jsx)(u.H,{
className:c()(n,l().title),children:e}),null!=i?(0,r.jsx)("div",{className:c()(o,l().text,y().marginTop8),children:i}):null]})},R=function(t){O(n,t);var e=w(n);function n(){h(this,n);return e.apply(this,arguments)}n.prototype.render=function(){var t=this.props,e=t.children,n=t.theme,o=t.className,i=t.style;return(0,r.jsx)(E,{value:n,children:(0,r.jsx)(f.Z,{direction:f.Z.Direction.VERTICAL,align:f.Z.Align.CENTER,justify:f.Z.Justify.CENTER,className:c()(l().wrapper,o),style:i,children:e})})};return n}(o.PureComponent);R.Text=P;R.Image=A}}]);
//# sourceMappingURL=90fd656ffbbd472525d7.js.map