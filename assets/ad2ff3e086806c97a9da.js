"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[1139],{4080:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});r.default=void 0;var n,o=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i(r);if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in e)if("default"!==C&&Object.prototype.hasOwnProperty.call(e,C)){var u=o?Object.getOwnPropertyDescriptor(e,C):null;u&&(u.get||u.set)?Object.defineProperty(n,C,u):n[C]=e[C]}n.default=e;t&&t.set(e,n);return n}(t(67294)),C=["outer","inner","checkmark"];function i(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:r})(e)}function u(){u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}
;return u.apply(this,arguments)}function l(e,r,t,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var C=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),1===i)r.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];r.children=u}if(r&&C)for(var f in C)void 0===r[f]&&(r[f]=C[f]);else r||(r=C||{});return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}function f(e,r){f=Object.setPrototypeOf||function(e,r){e.__proto__=r;return e};return f(e,r)}var a=function(e){!function(e,r){e.prototype=Object.create(r.prototype);e.prototype.constructor=e;f(e,r)}(r,e);function r(){return e.apply(this,arguments)||this}r.prototype.render=function(){var e=this.props,r=e.outer,t=e.inner,n=e.checkmark,i=function(e,r){if(null==e)return{};var t,n,o={},C=Object.keys(e);for(n=0;n<C.length;n++){t=C[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,C);return o.createElement("svg",u({},i,{viewBox:"0 0 20 20"
}),l("g",{fill:"none",fillRule:"evenodd"},void 0,l("path",{fill:r,
d:"M10,19.9894372 C10.1068171,19.9973388 10.2078869,20.000809 10.3011305,19.9998419 C11.2600164,19.8604167 12.3546966,19.5885332 12.8510541,19.0579196 C13.25685,18.6241176 13.617476,18.0901301 13.7559228,17.5412583 C14.9847338,18.4452692 17.0357846,18.1120142 18.1240732,16.9486174 C19.1632035,15.8377715 18.521192,14.1691402 18.1240732,13.1586037 C18.4557396,12.9959068 18.8016154,12.6966801 19.0750308,12.4043949 C19.7126372,11.7227841 20.0201294,10.9139249 19.9989792,10.0282152 C20.0201294,9.14250542 19.7126372,8.3336462 19.0750308,7.65203538 C18.8016154,7.35975019 18.4557396,7.06052352 18.1240732,6.89782664 C18.521192,5.88729007 19.1632035,4.21865882 18.1240732,3.10781287 C17.0357846,1.94441607 14.9847338,1.61116112 13.7559228,2.51517206 C13.617476,1.96630024 13.25685,1.4323127 12.8510541,0.998510722 C12.3546966,0.467897141 11.2584098,0.139640848 10.2995239,0.036840309 C10.2065991,-0.000647660524 10.1059015,0.00279555358 9.99948865,0.0106399384 C9.87772075,0.00268415336 9.76807998,-0.00081194858 9.67455589,0.000158000197 C8.88885259,0.157529668 7.63153446,0.482616331 7.14894593,0.998510722 C6.74314998,1.4323127 6.382524,1.96630024 6.24407717,2.51517206 C5.01526618,1.61116112 2.96421535,1.94441607 1.87592682,3.10781287 C0.836796482,4.21865882 1.47880798,5.88729007 1.87592682,6.89782664 C1.54426039,7.06052352 1.19838464,7.35975019 0.924969216,7.65203538 C0.287362828,8.3336462 -0.0201294289,9.14250542 0.00102081603,10.0282151 C-0.0201294289,10.9139249 0.287362828,11.7227841 0.924969216,12.4043949 C1.19838464,12.6966801 1.54426039,12.9959068 1.87592682,13.1586037 C1.47880798,14.1691402 0.836796482,15.8377715 1.87592682,16.9486174 C2.96421535,18.1120142 5.01526618,18.4452692 6.24407717,17.5412583 C6.382524,18.0901301 6.74314998,18.6241176 7.14894593,19.0579196 C7.63153446,19.573814 8.89045919,19.8426283 9.6761625,19.9541287 C9.7694061,20.000809 9.87866986,19.9973388 10,19.9894372 Z"
}),l("path",{fill:t,
d:"M10.0004091,17.9551224 C10.0858672,17.9614327 10.1667272,17.964204 10.2413259,17.9634317 C11.0084737,17.8520863 11.8842627,17.6349594 12.281369,17.2112099 C12.6060224,16.8647745 12.8945379,16.4383305 13.005301,16 C13.9884001,16.7219456 15.6293247,16.4558073 16.5,15.5267154 C17.3313468,14.6395908 16.8177113,13.3070173 16.5,12.5 C16.7653467,12.3700698 17.0420615,12.1311066 17.260805,11.8976868 C17.7709162,11.3533505 18.0169226,10.7073933 18.0000015,10.0000632 C18.0169226,9.29273289 17.7709162,8.64677569 17.260805,8.10243942 C17.0420615,7.86901966 16.7653467,7.63005642 16.5,7.50012624 C16.8177113,6.69310896 17.3313468,5.36053545 16.5,4.47341082 C15.6293247,3.54431894 13.9884001,3.27818062 13.005301,4.00012624 C12.8945379,3.5617957 12.6060224,3.13535178 12.281369,2.78891632 C11.8842627,2.36516686 11.0071884,2.10302048 10.2400405,2.02092369 C10.1656968,1.99098569 10.0851346,1.99373545 10,2 C9.9025807,1.99364649 9.8148636,1.99085449 9.7400405,1.9916291 C9.11144571,2.11730654 8.10553978,2.37692165 7.71944921,2.78891632 C7.39479585,3.13535178 7.10628031,3.5617957 6.99551718,4.00012624 C6.01241812,3.27818062 4.37149355,3.54431894 3.5008182,4.47341082 C2.66947142,5.36053545 3.18310688,6.69310896 3.5008182,7.50012624 C3.23547149,7.63005642 2.95875674,7.86901966 2.74001321,8.10243942 C2.22990202,8.64677569 1.98389563,9.29273289 2.00081669,10.0000631 C1.98389563,10.7073933 2.22990202,11.3533505 2.74001321,11.8976868 C2.95875674,12.1311066 3.23547149,12.3700698 3.5008182,12.5 C3.18310688,13.3070173 2.66947142,14.6395908 3.5008182,15.5267154 C4.37149355,16.4558073 6.01241812,16.7219456 6.99551718,16 C7.10628031,16.4383305 7.39479585,16.8647745 7.71944921,17.2112099 C8.10553978,17.6232046 9.11273107,17.8378805 9.74132585,17.926925 C9.81592455,17.964204 9.90334002,17.9614327 10.0004091,17.9551224 Z"
}),l("path",{fill:n,d:"M8.84273967,12.8167603 L13.8643,7.7952 C14.0513,7.6072 14.0513,7.3042 13.8643,7.1172 C13.6773,6.9312 13.3743,6.9312 13.1863,7.1172 L8.52303089,11.78139 L6.8883,10.1475 C6.6843,9.9445 6.3553,9.9445 6.1523,10.1475 C5.9493,10.3515 5.9493,10.6805 6.1523,10.8835 L8.08381122,12.8160053 C8.09561409,12.8309877 8.10844368,12.8454178 8.1223,12.8592 C8.3093,13.0472 8.6123,13.0472 8.8003,12.8592 L8.82157566,12.8379243 C8.82518839,12.8345112 8.82876362,12.8310364 8.8323,12.8275 C8.83584168,12.8239583 8.83932157,12.820378 8.84273967,12.8167603 Z"})))};return r}(o.PureComponent);a.displayName="Verified";a.defaultProps={width:20,height:20,outer:"transparent",inner:"currentColor",checkmark:"#FFFFFF"};var p=a;r.default=p}}]);
//# sourceMappingURL=ad2ff3e086806c97a9da.js.map