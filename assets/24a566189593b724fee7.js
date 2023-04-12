/*! For license information please see 24a566189593b724fee7.js.LICENSE.txt */
(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[331],{178598:function(e,t,n){var r,o=o||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),a=e.webkitRequestFileSystem,s=e.requestFileSystem||a||e.mozRequestFileSystem,c=function(t){(e.setImmediate||e.setTimeout)((function(){throw t}),0)},l="application/octet-stream",u=0,f=function(e){setTimeout((function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()}),4e4)},d=function(e,t,n){for(var r=(t=[].concat(t)).length;r--;){var o=e["on"+t[r]];if("function"==typeof o)try{o.call(e,n||e)}catch(e){c(e)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["ï»¿",e],{type:e.type}):e},h=function(t,c,h){h||(t=p(t))
;var S,y,b,O=this,_=t.type,m=!1,v=function(){d(O,"writestart progress write writeend".split(" "))},M=function(){if(y&&i&&"undefined"!=typeof FileReader){var r=new FileReader;r.onloadend=function(){var e=r.result;y.location.href="data:attachment/file"+e.slice(e.search(/[,;]/));O.readyState=O.DONE;v()};r.readAsDataURL(t);O.readyState=O.INIT}else{!m&&S||(S=n().createObjectURL(t));if(y)y.location.href=S;else{void 0===e.open(S,"_blank")&&i&&(e.location.href=S)}O.readyState=O.DONE;v();f(S)}},g=function(e){return function(){if(O.readyState!==O.DONE)return e.apply(this,arguments)}},w={create:!0,exclusive:!1};O.readyState=O.INIT;c||(c="download");if(o){S=n().createObjectURL(t);setTimeout((function(){r.href=S;r.download=c;e=r,t=new MouseEvent("click"),e.dispatchEvent(t);var e,t;v();f(S);O.readyState=O.DONE}))}else{if(e.chrome&&_&&_!==l){b=t.slice||t.webkitSlice;t=b.call(t,0,t.size,l);m=!0}a&&"download"!==c&&(c+=".download");(_===l||a)&&(y=e);if(s){u+=t.size;s(e.TEMPORARY,u,g((function(e){
e.root.getDirectory("saved",w,g((function(e){var n=function(){e.getFile(c,w,g((function(e){e.createWriter(g((function(n){n.onwriteend=function(t){y.location.href=e.toURL();O.readyState=O.DONE;d(O,"writeend",t);f(e)};n.onerror=function(){var e=n.error;e.code!==e.ABORT_ERR&&M()};"writestart progress write abort".split(" ").forEach((function(e){n["on"+e]=O["on"+e]}));n.write(t);O.abort=function(){n.abort();O.readyState=O.DONE};O.readyState=O.WRITING})),M)})),M)};e.getFile(c,{create:!1},g((function(e){e.remove();n()})),g((function(e){e.code===e.NOT_FOUND_ERR?n():M()})))})),M)})),M)}else M()}},S=h.prototype;if("undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob)return function(e,t,n){n||(e=p(e));return navigator.msSaveOrOpenBlob(e,t||"download")};S.abort=function(){var e=this;e.readyState=e.DONE;d(e,"abort")};S.readyState=S.INIT=0;S.WRITING=1;S.DONE=2;S.error=S.onwritestart=S.onprogress=S.onwrite=S.onabort=S.onerror=S.onwriteend=null;return function(e,t,n){return new h(e,t,n)}}
}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);e.exports?e.exports.saveAs=o:null!==n.amdD&&null!==n.amdO&&void 0!==(r=function(){return o}.apply(t,[]))&&(e.exports=r)},394330:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(667294),o=n(178598),i=n(891153),a=n(742269);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return c(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){u=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return u(e,t)}var f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&u(e,t)}(n,e);var t=d(n);function n(){s(this,n);var e;(e=t.apply(this,arguments)).handleFileDownload=function(t){t.preventDefault();var n=e.getFileContents(),r=e.props,o=r.fileName,i=r.onDownload;a.FB?e.downloadNative(n,o):e.downloadHtml5(n,o);null==i||i()};return e}var c=n.prototype;c.getFileContents=function(){var e=this.props.fileContents;"function"==typeof e&&(e=e());return e};c.downloadNative=function(e,t){
i.Z.fileManager.saveWithDialog(e,t)};c.downloadHtml5=function(e,t){var n=new Blob([e],{type:this.props.contentType});(0,o.saveAs)(n,t)};c.render=function(){var e=this.props.children,t=r.Children.only(e);return r.cloneElement(t,{onClick:this.handleFileDownload})};return n}(r.Component)},900331:(e,t,n)=>{"use strict";n.r(t);n.d(t,{default:()=>L});var r=n(785893),o=n(667294),i=n(441143),a=n.n(i),s=n(363010),c=n(331535),l=n(179211),u=n(394330),f=n(997846),d=n(74907),p=n(828917),h=n(585771),S=n(859023),y=n(487502),b=n(30741),O=n(67416),_=n(897576),m=n(444133),v=n(461061),M=n(330665),g=n(959797),w=n(748350),x=n.n(w);function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function C(e){C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return C(e)}function N(e){
for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){A(e,t,n[t])}))}return e}function j(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){
var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function D(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e,t){F=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return F(e,t)}var P=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return D(this,n)}}var Z=function(e){
var t=e.label,n=e.text,o=e.children,i=R(e,["label","text","children"]);return(0,r.jsxs)(y.Z,j(N({direction:y.Z.Direction.VERTICAL},i),{children:[(0,r.jsx)(c.vw,{tag:"h2",children:t}),null!=n?(0,r.jsx)(c.xv,{variant:"text-md/normal",className:x().sectionBody,children:n}):null,(0,r.jsx)(y.Z.Child,{wrap:!0,children:o})]}))},B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&F(e,t)}(n,e);var t=T(n);function n(){E(this,n);var e;(e=t.apply(this,arguments)).state={didAddBackup:!1,showConfirmModal:!1};e.handleCloseModal=function(){var t=e.props,n=t.onClose,r=t.currentUser,o=e.state.didAddBackup,i=r.hasFlag(v.xW$.MFA_SMS);o||i?null==n||n():e.setState({showConfirmModal:!0})};e.getDownloadFileContents=function(){var t=e.props.backupCodes.map((function(e){var t=e.consumed,n=e.code
;return"* ".concat(n.substr(0,4),"-").concat(n.substr(4)," ").concat(t?"(".concat(g.Z.Messages.TWO_FA_BACKUP_CODE_USED,")"):"")})).join("\r\n"),n=g.Z.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({email:e.props.currentUser.email});return"".concat(n,"\r\n\r\n").concat(t)};e.handleChangePhoneNumber=function(){e.openPhoneVerificationModal()};e.handleEnableSMS=function(){var t=function(){(0,_.h7)((function(t){return(0,r.jsx)(m.default,j(N({},t),{handleSubmit:function(t){e.setState({didAddBackup:!0});return l.Z.enableSMS(t)},title:g.Z.Messages.MFA_SMS_ENABLE}))}))};null==e.props.currentUser.phone?e.openPhoneVerificationModal({onAddedPhone:t}):t()};return e}var o=n.prototype;o.renderSMSSection=function(){var e=this.props.currentUser,t=null!=this.props.currentUser.phone,n=e.hasFlag(v.xW$.MFA_SMS),o=e.hasFlag(v.xW$.PARTNER)||e.hasFlag(v.xW$.STAFF);return t?(0,r.jsxs)(Z,{label:g.Z.Messages.MFA_SMS_ENABLE,text:g.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,children:[(0,r.jsxs)(c.xv,{
variant:"text-md/normal",className:x().sectionBody,children:[(0,r.jsx)("strong",{className:x().phoneNumber,children:g.Z.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({phoneNumber:e.phone})}),(0,r.jsx)(c.zx,{look:c.zx.Looks.LINK,color:c.zx.Colors.LINK,size:c.zx.Sizes.MIN,className:x().linkButton,onClick:this.handleChangePhoneNumber,children:g.Z.Messages.CHANGE_PHONE_NUMBER})]}),(0,r.jsx)(c.zx,{onClick:this.handleEnableSMS,disabled:n||o,color:c.zx.Colors.GREEN,size:c.zx.Sizes.SMALL,children:o?g.Z.Messages.MFA_SMS_DISABLED_PARTNER:n?g.Z.Messages.MFA_SMS_ALREADY_ENABLED:g.Z.Messages.MFA_SMS_ENABLE})]}):(0,r.jsx)(Z,{label:g.Z.Messages.MFA_SMS_ENABLE,text:g.Z.Messages.MFA_SMS_AUTH_SALES_PITCH,children:(0,r.jsx)(c.zx,{onClick:this.handleEnableSMS,color:c.zx.Colors.GREEN,size:c.zx.Sizes.SMALL,disabled:o,children:o?g.Z.Messages.MFA_SMS_DISABLED_PARTNER:g.Z.Messages.MFA_SMS_ADD_PHONE})})};o.renderBackupCodesSection=function(){var e=this;return(0,r.jsx)(Z,{label:g.Z.Messages.TWO_FA_DOWNLOAD_CODES,
text:g.Z.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),children:(0,r.jsx)(u.Z,{fileContents:this.getDownloadFileContents,contentType:"text/plain",fileName:"discord_backup_codes.txt",onDownload:function(){return e.setState({didAddBackup:!0})},children:(0,r.jsx)(c.zx,{color:c.zx.Colors.GREEN,size:c.zx.Sizes.SMALL,children:g.Z.Messages.TWO_FA_DOWNLOAD_CODES})})})};o.renderHeader=function(){return(0,r.jsxs)(O.xB,{separator:!1,children:[(0,r.jsxs)(y.Z.Child,{grow:1,shrink:1,children:[(0,r.jsx)(c.X6,{variant:"heading-lg/semibold",className:x().header,children:d.Z.parse(g.Z.Messages.TWO_FA_SUCCESS_HEADER)}),(0,r.jsx)(c.xv,{variant:"text-xs/normal",className:x().subHeader,children:g.Z.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()})]}),(0,r.jsx)(y.Z.Child,{grow:0,children:(0,r.jsx)(O.ol,{onClick:this.handleCloseModal})})]})};o.renderConfirmModal=function(){var e=this,t=this.props.onClose;return(0,r.jsx)(b.DeclarativeConfirmModal,{dismissable:!0,header:g.Z.Messages.TWO_FA_CONFIRM_TITLE,
confirmText:g.Z.Messages.TWO_FA_CONFIRM_CONFIRM,cancelText:g.Z.Messages.CANCEL,onCancel:function(){return e.setState({showConfirmModal:!1})},onConfirm:t,children:(0,r.jsx)(c.xv,{variant:"text-md/normal",color:"text-normal",children:g.Z.Messages.TWO_FA_CONFIRM_BODY})})};o.render=function(){var e=this.props.transitionState,t=this.state.showConfirmModal;return(0,r.jsxs)(O.Y0,{transitionState:e,className:x().modal,children:[this.renderHeader(),(0,r.jsxs)(O.hz,{className:x().modalInner,children:[this.renderSMSSection(),(0,r.jsx)(c.$i,{className:x().divider}),this.renderBackupCodesSection()]}),t&&this.renderConfirmModal()]})};o.openPhoneVerificationModal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,_.h7)((function(t){return(0,r.jsx)(f.default,N({reason:p.L.MFA_PHONE_UPDATE},t,e))}),{modalKey:M.M})};return n}(o.PureComponent);const L=s.ZP.connectStores([S.default,h.Z],(function(){var e=S.default.getCurrentUser()
;a()(null!=e,"MFAEnableSuccess: currentUser cannot be undefined");return{currentUser:e,backupCodes:h.Z.getBackupCodes()}}))(B)}}]);
//# sourceMappingURL=24a566189593b724fee7.js.map