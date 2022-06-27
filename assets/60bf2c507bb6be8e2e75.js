"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[40856],{410671:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(667294)),a=O(r(294184)),l=O(r(151097)),u=O(r(956117)),i=O(r(558402)),d=O(r(16941)),s=r(772575),f=r(645758),c=O(r(279950)),p=r(354479),v=O(r(510596)),y=r(3400),h=O(r(247001)),b=O(r(949095));function O(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}
function m(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=o;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function M(e,t){M=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return M(e,t)}var P=m("br",{}),_=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;M(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).headerId=(0,p.uid)();t.state={code:"",errorMessage:"",retrySuccess:!1};t.setRef=function(e){t._input=e};t.getLabelText=function(){var e
;return null!==(e=t.props.label)&&void 0!==e?e:t.props.disallowBackupCodes?h.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL:h.default.Messages.TWO_FA_ENTER_TOKEN_LABEL};t.getSupportedCodeTypes=function(){return t.props.disallowBackupCodes?h.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP:h.default.Messages.TWO_FA_AUTH_CODE};t.getPlaceholder=function(){var e;return t.props.forceNoPlaceholder?null:null!==(e=t.props.placeholder)&&void 0!==e?e:t.getSupportedCodeTypes()};t.errorPresent=function(){return null!=t.props.error&&""!==t.props.error||null!=t.state.errorMessage&&""!==t.state.errorMessage};t.handleRetry=function(){var e=t.props.onRetry;null==e||e().then((function(){return t.setState({retrySuccess:!0})}))};t.handleSubmit=function(e){e.preventDefault();var r=t.props,n=r.handleSubmit,o=r.onError;n(t.state.code).catch((function(e){if(null!=e.body){null==o||o(e.body);e.body.message&&t.setState({errorMessage:e.body.message})}}))};t.handleCancel=function(){
var e=t.props,r=e.onClose,n=e.handleEarlyClose;r();null==n||n()};t.handleCodeChange=function(e){t.setState({code:e})};return t}t.prototype.render=function(){var e,t=this.props,r=t.title,n=t.actionText,p=t.children,O=t.error,g=t.isLoading,M=t.maxLength,_=t.transitionState,j=t.helpMessage,C=t.retryPrompt,w=t.retrySuccessMessage,k=this.state,N=k.code,T=k.errorMessage,S=k.retrySuccess,E=o.Children.count(p)>0?m(i.default,{type:i.default.Types.WARNING,className:b.default.card},void 0,m(f.Text,{variant:"text-md/normal"},void 0,p)):null,x=null!=C?m(f.Text,{className:(0,a.default)(b.default.submitText,b.default.spacing),variant:"text-sm/normal"},void 0,P,m(d.default,{className:(0,a.default)(b.default.spacing,b.default.link),onClick:this.handleRetry},void 0,m(l.default,{},void 0,C))):null,A=S?m(i.default,{type:i.default.Types.SUCCESS,className:b.default.card},void 0,m(f.Text,{variant:"text-md/normal"},void 0,w)):null;return m(y.ModalRoot,{transitionState:_,"aria-labelledby":this.headerId
},void 0,m("form",{onSubmit:this.handleSubmit},void 0,m(y.ModalHeader,{separator:!1,id:this.headerId},void 0,m(s.Heading,{variant:"heading-lg/medium",level:2},void 0,r)),m(y.ModalContent,{},void 0,null!=j?m(f.Text,{color:"text-normal",variant:"text-md/normal",className:b.default.spacing},void 0,j):null,E,A,m(v.default,{title:this.getLabelText(),className:b.default.spacing},void 0,m(c.default,{inputRef:this.setRef,onChange:this.handleCodeChange,placeholder:null!==(e=this.getPlaceholder())&&void 0!==e?e:void 0,maxLength:null!=M?M:10,value:N,autoComplete:"one-time-code",autoFocus:!0}),this.errorPresent()?m(f.Text,{color:"text-danger",variant:"text-xs/normal",className:b.default.error},void 0,null!=O?O:T):null,x)),m(y.ModalFooter,{},void 0,m(u.default,{type:"submit",disabled:g},void 0,null!=n?n:h.default.Messages.CONFIRM),m(u.default,{onClick:this.handleCancel,disabled:g,look:u.default.Looks.LINK,color:u.default.Colors.PRIMARY},void 0,h.default.Messages.CANCEL))))};return t
}(o.PureComponent);_.displayName="MFAConfirm";_.defaultProps={btnClass:"",isLoading:!1,disallowBackupCodes:!1,error:null,forceNoPlaceholder:!1};var j=_;t.default=j},558402:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=t.Types=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=i(r(294184)),a=r(773336),l=i(r(66636)),u=["children","editable","type","className","outline"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}
function s(){s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return s.apply(this,arguments)}function f(e,t){f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var c={PRIMARY:"cardPrimary",DANGER:"cardDanger",WARNING:"cardWarning",SUCCESS:"cardSuccess",BRAND:"cardBrand",CUSTOM:"card"};t.Types=c;var p=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;f(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e,t=this.props,r=t.children,i=t.editable,d=t.type,f=t.className,p=t.outline,v=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++){r=a[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(t,u);p?e="outline":d===c.PRIMARY&&i&&(e="editable");return n.createElement("div",s({className:(0,o.default)(f,(0,a.getClass)(l.default,d,e))},v),r)}
;return t}(n.PureComponent);p.displayName="Card";p.Types=c;p.defaultProps={type:c.PRIMARY,outline:!1,editable:!1};var v=p;t.default=v},510596:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=s(r(667294)),a=r(354479),l=r(865229),u=s(r(662197)),i=["children","disabled","className","titleClassName","tag","required","style","title","error"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}function f(e,t,r,o){
n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=o;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return c.apply(this,arguments)}var p=function(e){var t,r=e.children,n=e.disabled,d=void 0!==n&&n,s=e.className,p=e.titleClassName,v=e.tag,y=void 0===v?u.Tags.H5:v,h=e.required,b=void 0!==h&&h,O=e.style,g=e.title,m=e.error,M=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++){r=a[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,i),P=(0,
a.useUID)(),_=null!==(t=M.titleId)&&void 0!==t?t:P;return f("div",{className:null!=s?s:void 0,style:null!=O?O:void 0},void 0,null!=g||null!=m?o.createElement(u.default,c({tag:y,disabled:d,required:b,error:m,className:p,id:_},M),g):null,f(l.FormContextProvider,{titleId:_},void 0,r))};p.displayName="FormItem";p.Tags=u.Tags;var v=p;t.default=v},86997:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.resolveThunk=t.default=void 0;var n,o=(n=r(496486))&&n.__esModule?n:{default:n};var a=function(e){return"function"==typeof e?e():e};t.resolveThunk=a;var l=o.default.curry((function(e,t,r){return a(t)?e(r):r({})}));t.default=l},40856:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o,a=c(r(496486)),l=c(r(728429)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(86997)),i=["promiseFn","resolve","reject","code","mfaCodeHandler","isModalOpen"],d=["hooks"],s=["checkEnabled"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++){r=a[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}function v(){v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return v.apply(this,arguments)}var y=function(){throw new Error("updateModal has not been implemented.")},h=r(546331);n=h.showModal;y=h.updateModalProps;o=r(194322).closeModal
;function b(){var e,t;return null!==(e=null===(t=l.default.getCurrentUser())||void 0===t?void 0:t.mfaEnabled)&&void 0!==e&&e}function O(e){var t=e.promiseFn,r=e.resolve,a=e.reject,l=e.confirmModalProps,u=e.hooks.onEarlyClose;if(null!=n)var i=n(c,d,l);else u();function d(){null==u||u()}function s(e){o(i);r(e)}function f(e){o(i);a(e)}function c(e){y(i,c,d,v({},l,{isLoading:!0}));return g({promiseFn:t,resolve:s,reject:f,code:e,mfaCodeHandler:p,isModalOpen:!0})}function p(e){var t=e.res;y(i,c,d,v({},l,{error:t.body.message}))}}function g(e){var t=e.promiseFn,r=e.resolve,n=e.reject,o=e.code,a=e.mfaCodeHandler,l=void 0===a?O:a,u=e.isModalOpen,d=void 0!==u&&u,s=p(e,i);return t(null!=o?{code:o}:{}).then(r,(function(e){if(function(e,t){return e.body&&60008===e.body.code||t&&429===e.status}(e,d))return l(v({promiseFn:t,resolve:r,reject:n,res:e},s));n(e)}))}var m=a.default.curry((function(e,t,r){void 0===r&&(r={});var n=r,o=n.checkEnabled,a=void 0===o?b:o;return function(e,t){
var r=e.hooks,n=void 0===r?{}:r,o=p(e,d);return(0,u.default)((function(e){return new Promise((function(r,a){((0,u.resolveThunk)(t)?O:g)(v({promiseFn:e,resolve:r,reject:a,hooks:n},o))}))}),!0)}(v({confirmModalProps:e},p(n,s)),a)(t)}),2);t.default=m},546331:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.showModal=function(e,t,r){return(0,l.openModal)(d(e,t,r))};t.updateModalProps=function(e,t,r,n){return(0,l.updateModal)(e,d(t,r,n))};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(667294)),a=(n=r(410671))&&n.__esModule?n:{default:n},l=r(194322);function u(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function i(){i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return i.apply(this,arguments)}var d=function(e,t,r){return function(n){return o.createElement(a.default,i({handleSubmit:e,handleEarlyClose:t},r,n))}}}}]);
//# sourceMappingURL=60bf2c507bb6be8e2e75.js.map