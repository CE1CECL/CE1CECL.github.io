"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[50936],{950936:(e,r,t)=>{t.r(r);t.d(r,{default:()=>v});var n=t(785893),a=t(667294),l=t(331535),s=t(55690),i=t(487502),o=t(67416),u=t(735843),c=t(541405),d=t(959797),f=t(133191),h=t.n(f);function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function y(e,r,t,n,a,l,s){try{var i=e[l](s),o=i.value}catch(e){t(e);return}i.done?r(o):Promise.resolve(o).then(n,a)}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,l=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(n=t.next()).done);s=!0){l.push(n.value);if(r&&l.length===r)break}}catch(e){i=!0;a=e}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return l}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(e,r){var t,n,a,l,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(a=2&l[0]?n.return:l[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;(n=0,a)&&(l=[2&l[0],a.value]);switch(l[0]){case 0:case 1:a=l;break;case 4:s.label++;return{value:l[1],done:!1};case 5:s.label++;n=l[1];l=[0];continue;case 7:
l=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){s=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){s.label=l[1];break}if(6===l[0]&&s.label<a[1]){s.label=a[1];a=l;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(l);break}a[2]&&s.ops.pop();s.trys.pop();continue}l=r.call(e,s)}catch(e){l=[6,e];n=0}finally{t=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}};function v(e){var r,t,f,p,v=e.transitionState,g=e.onClose,x=e.entry,E=b(a.useState(null!==(r=x.description)&&void 0!==r?r:""),2),I=E[0],D=E[1],_=b(a.useState(null!==(t=x.primaryCategoryId)&&void 0!==t?t:c.AR.UNCATEGORIZED),2),S=_[0],A=_[1],C=b(a.useState(!1),2),T=C[0],w=C[1],j=b(a.useState(null),2),N=j[0],L=j[1],U=(p=(f=function(){var e;return m(this,(function(r){switch(r.label){case 0:L(null);if(I===x.description&&S===x.primaryCategoryId)return[3,4];w(!0);r.label=1;case 1:r.trys.push([1,3,,4]);return[4,(0,u.Dr)(x.channelId,x.guildId,I,S)];case 2:
r.sent();w(!1);g();return[3,4];case 3:e=r.sent();w(!1);L(new s.Z(e));return[3,4];case 4:return[2]}}))},function(){var e=this,r=arguments;return new Promise((function(t,n){var a=f.apply(e,r);function l(e){y(a,t,n,l,s,"next",e)}function s(e){y(a,t,n,l,s,"throw",e)}l(void 0)}))}),function(){return p.apply(this,arguments)});return(0,n.jsxs)(o.Y0,{transitionState:v,"aria-label":d.Z.Messages.PAYMENT_SOURCES_ADD,children:[(0,n.jsxs)(o.xB,{direction:i.Z.Direction.VERTICAL,className:h().header,separator:!1,children:[(0,n.jsx)(l.X6,{className:h().title,variant:"heading-xl/semibold",children:d.Z.Messages.HUB_ENTRY_UPDATE_DESCRIPTION_TITLE.format({guildName:x.name})}),(0,n.jsx)(l.xv,{className:h().subtitle,color:"header-secondary",variant:"text-md/normal",children:d.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_HELP}),null!=g&&(0,n.jsx)(o.ol,{className:h().closeButton,onClick:g})]}),(0,n.jsxs)(o.hz,{className:h().createGuild,paddingFix:!1,children:[(0,n.jsx)(l.xJ,{
title:d.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_TITLE,children:(0,n.jsx)(l.Kx,{value:I,maxLength:200,placeholder:d.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_PLACEHOLDER,onChange:D,error:null==N?void 0:N.getAnyErrorMessage()})}),(0,n.jsx)(l.xJ,{className:h().formItemSpaced,title:d.Z.Messages.HUB_ADD_GUILD_CATEGORY_TITLE,children:(0,n.jsx)(l.q4,{placeholder:d.Z.Messages.SELECT,options:(0,c.b7)(x.channelId),clearable:!1,value:S,onChange:A,maxVisibleItems:4})})]}),(0,n.jsx)(o.mz,{justify:i.Z.Justify.BETWEEN,children:(0,n.jsx)(l.zx,{color:l.zx.Colors.BRAND,onClick:U,submitting:T,children:d.Z.Messages.SAVE})})]})}}}]);
//# sourceMappingURL=82c9af2c5777598518f1.js.map