"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[95321],{910866:(e,t,r)=>{r.d(t,{m:()=>n});var n;!function(e){e.MP4="video/mp4"}(n||(n={}))},395321:(e,t,r)=>{r.d(t,{Z:()=>g});var n,o=r(785893),i=(r(667294),r(294184)),a=r.n(i),l=r(952013),c=r(832010),u=r(379579),s=r(760654),f=r(51477),p=r(461061),d=r(627962),b=r.n(d);function y(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){y(e,t,r[t])}))}return e}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t)
;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}var m=(y(n={},p.BRd.DARK,p.Ilk.PRIMARY_400),y(n,p.BRd.LIGHT,p.Ilk.PRIMARY_500),n);function g(e){var t,r=e.enabled,n=e.imageClassName,i=e.iconWrapperClassName,p=O(e,["enabled","imageClassName","iconWrapperClassName"]),d=(0,l.ZP)(),g={height:18,width:18,color:(0,c.Lq)(m[d])};return(0,o.jsx)(f.Z,h({className:a()((t={},y(t,b().avatarUploader,r),y(t,b().avatarUploaderDisabled,!r),t)),imageClassName:a()(n,b().avatarUploaderInnerSquare,y({},b().avatarUploaderInnerSquareDisabled,!r)),icon:null!=p.image&&""!==p.image?(0,o.jsx)(u.Z,h({},g)):(0,o.jsx)(s.Z,h({},g)),iconClassName:a()(b().avatarUploadIcon,b().hideDefaultIcon),iconWrapperClassName:i,showIcon:!0,showIconDisabled:!0,hideSize:!0},p))}},567895:(e,t,r)=>{r.d(t,{Zj:()=>y,Fq:()=>h,ZP:()=>m})
;var n=r(785893),o=r(667294),i=r(678081),a=r(212271),l=r(910866),c=r(959797);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return s(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return p(e,t)}var d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){
var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function y(){return[{name:c.Z.Messages.IMAGES,extensions:["jpg","jpeg","png","gif"]}]}function h(e,t,r){!function(e,t){if(null!=e){var r=new FileReader;r.onload=function(r){var n;"string"==typeof(null===(n=r.target)||void 0===n?void 0:n.result)&&t(r.target.result,e)};r.readAsDataURL(e)}}(e,(function(n){if(e.type===l.m.MP4)return t(n,e);var o=new Image;o.src=n;o.onload=function(){t(n,e)};o.onerror=function(){r()}}))}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&p(e,t)}(r,e);var t=b(r);function r(){u(this,r);var e;(e=t.apply(this,arguments))._ref=o.createRef();e._isMounted=!1;e.handleFileChange=function(t){var r=e.props,n=r.onFileSizeError,o=r.maxFileSizeBytes;t.stopPropagation()
;t.preventDefault();if(null!=t.currentTarget.files)for(var i=0;i<t.currentTarget.files.length;i++){var a=t.currentTarget.files[i];a.size>o?null==n||n(o,a.size):h(a,e.handleFileRead,e.handleFileError)}};e.handleFileRead=function(t,r){var n=e.props.onChange;e._isMounted&&n(t,r)};e.handleFileError=function(){(0,a.xT)({title:c.Z.Messages.PREMIUM_ALERT_ERROR_TITLE,help:c.Z.Messages.UNABLE_TO_PROCESS_IMAGE})};return e}var l=r.prototype;l.componentDidMount=function(){this._isMounted=!0};l.activateUploadDialogue=function(){var e;null===(e=this._ref.current)||void 0===e||e.activateUploadDialogue()};l.render=function(){var e=this.props,t=e.multiple,r=e.disabled,o=e.className,a=e.tabIndex,l=e["aria-label"],c=e.filters;return(0,n.jsx)(i.Z,{ref:this._ref,onChange:this.handleFileChange,filters:null!=c?c:y(),multiple:t,disabled:r,className:o,tabIndex:a,"aria-label":l})};return r}(o.PureComponent);O.defaultProps={multiple:!0,tabIndex:-1,maxFileSizeBytes:1/0};const m=O},51477:(e,t,r)=>{r.d(t,{S:()=>S,
Z:()=>I});var n=r(785893),o=r(667294),i=r(294184),a=r.n(i),l=r(441143),c=r.n(l),u=r(647446),s=r(331535),f=r(912551),p=r(567895),d=r(461061),b=r(959797),y=r(307436),h=r.n(y);function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return g(e)}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){m(e,t,r[t])}))}return e}function j(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){
var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function w(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e,t){P=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return P(e,t)}var x=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){
var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function S(e){var t=e.className,r=e.icon,o=void 0===r?null:r;return(0,n.jsx)("div",{className:a()(h().imageUploaderIcon,t),children:o})}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&P(e,t)}(r,e);var t=R(r);function r(){O(this,r);var e;(e=t.apply(this,arguments)).inputRef=o.createRef();e.handleRemove=function(){e.props.onChange(null)};return e}var i=r.prototype;i.handleExternalFileChange=function(e){c()(null!=this.inputRef.current,"ImageInputRef asked to handleExternalFileChange when not mounted");this.inputRef.current.handleFileChange(e)};i.render=function(){
var e,t,r,o,i,l=this.props,c=l.image,y=l.hint,O=l.name,m=l.makeURL,g=l.disabled,w=l.onChange,P=l.showIcon,x=l.showIconDisabled,R=l.className,C=l.imageClassName,I=l.iconClassName,E=l.iconWrapperClassName,_=l.icon,N=l.hideSize,M=l.imageStyle,Z=l.showRemoveButton,D=l.maxFileSizeBytes,U=l.onFileSizeError,k=l.onOpenImageSelectModal,L=l["aria-label"];null!=(e=null!=c&&/^data:/.test(c)?c:m(c))?t='url("'.concat(e,'")'):null!=O&&(r=(0,n.jsx)("div",{className:h().imageUploaderAcronym,children:(0,f.Zg)(O)}));if(g)return(0,n.jsx)("div",{className:a()(h().imageUploader,h().disabled,R),children:(0,n.jsxs)("div",{className:a()(h().imageUploaderInner,C),style:j(v({},M),{backgroundImage:t}),children:[r,x&&(0,n.jsx)("div",{className:a()(h().imageUploaderIcon,h().imageUploaderIconDisabled,I),children:_})]})});null!=c?o=(0,n.jsx)(s.ee,{className:h().removeButton,onClick:this.handleRemove,children:b.Z.Messages.REMOVE}):N||(o=(0,n.jsx)("small",{className:h().sizeInfo,
children:b.Z.Messages.MINIMUM_SIZE.format({size:d.IXf})}));var F=null!==(i=null!=L?L:y)&&void 0!==i?i:b.Z.Messages.CHANGE_AVATAR;return(0,n.jsxs)("div",{className:a()(h().imageUploader,R),children:[(0,n.jsx)(u.tE,{within:!0,children:(0,n.jsxs)("div",{className:P?a()(h().imageUploaderIconWrapper,E):void 0,children:[(0,n.jsxs)("div",{className:a()(h().imageUploaderInner,C),style:j(v({},M),{backgroundImage:t}),children:[(0,n.jsx)("span",{"aria-hidden":!0,children:r}),null!=k?(0,n.jsx)(s.P3,{className:h().imageUploaderFileInput,"aria-label":F,onClick:k}):(0,n.jsx)(p.ZP,{ref:this.inputRef,onChange:w,className:h().imageUploaderFileInput,"aria-label":F,tabIndex:0,maxFileSizeBytes:D,onFileSizeError:U})]}),null!=y&&(0,n.jsx)("div",{className:h().imageUploaderHint,"aria-hidden":"true",children:y}),P&&(0,n.jsx)(S,{className:I,icon:_})]})}),Z?o:null]})};return r}(o.PureComponent);C.defaultProps={name:"",makeURL:function(e){return e},disabled:!1,showIcon:!1,hideSize:!1,showRemoveButton:!0,
maxFileSizeBytes:1/0,icon:null};const I=C},379579:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(785893),o=(r(667294),r(240243));function i(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function a(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n]
;t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}function c(e){var t=e.color,r=e.height,c=void 0===r?24:r,u=e.width,s=void 0===u?24:u,f=l(e,["color","height","width"]);return(0,n.jsx)("svg",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){i(e,t,r[t])}))}return e}({},(0,o.Z)(f)),{width:s,height:c,viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",
d:"M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",fill:t})}))}},760654:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(785893),o=(r(667294),r(240243));function i(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function a(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){
Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}function c(e){var t=e.width,r=void 0===t?24:t,c=e.height,u=void 0===c?24:c,s=e.color,f=void 0===s?"currentColor":s,p=l(e,["width","height","color"]);return(0,n.jsxs)("svg",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){i(e,t,r[t])}))}return e}({},(0,o.Z)(p)),{width:r,height:u,
viewBox:"0 0 24 24",fill:"none",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",fill:f}),(0,n.jsx)("path",{d:"M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",fill:f})]}))}}}]);
//# sourceMappingURL=8fc97784e6f63e95afbb.js.map