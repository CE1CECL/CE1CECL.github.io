"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[81664],{454313:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(785893),i=(t(667294),t(64833));function o(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){o(e,n,t[n])}))}return e}function c(e,n){return function(t){var o=(0,i.Z)(n).AnalyticsLocationProvider;return(0,r.jsx)(o,{children:(0,r.jsx)(e,a({},t))})}}},981664:(e,n,t)=>{t.r(n);t.d(n,{default:()=>R});var r=t(785893),i=(t(667294),t(281081)),o=t(454313),a=t(859169),c=t(41225),u=t(282998),l=t(386704),s=t(769672),f=t(363010),d=t(354445),b=t(710348),p=t(356004),h=t(461061),O=t(959797);function y(e){return(0,
f.e7)([b.Z,p.Z],(function(){var n=p.Z.getMutableBasicGuildChannelsForGuild(e.guild_id),t=Object.values(n).filter((function(e){return e.type===h.d4z.GUILD_CATEGORY}));return 0===t.length||t.every((function(e){return b.Z.isCollapsed(e.id)}))}))?null:(0,r.jsx)(s.sN,{id:"collapse-all-categories",label:O.Z.Messages.COLLAPSE_ALL_CATEGORIES,action:function(){return(0,d.N5)(e.guild_id)}})}function g(e){var n=(0,f.e7)([b.Z],(function(){return b.Z.isCollapsed(e.id)}),[e.id]);return(0,r.jsx)(s.S8,{id:"collapse-category",label:O.Z.Messages.COLLAPSE_CATEGORY,action:function(){return n?(0,d.mJ)(e.id):(0,d.c4)(e.id)},checked:n})}var _=t(729924),E=t(620700),v=t(897576);function Z(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){t(e);return}c.done?n(u):Promise.resolve(u).then(r,i)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){Z(o,r,i,a,c,"next",e)}function c(e){Z(o,r,i,a,c,"throw",e)}a(void 0)}))}}function N(e,n,t){
n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function P(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var A=function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),
0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:a.label++;return{value:o[1],done:!1};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(o);break}i[2]&&a.ops.pop();a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e];r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};function w(e){return(0,r.jsx)(s.sN,{id:"delete-channel",label:O.Z.Messages.DELETE_CATEGORY,color:"danger",action:function(){return(0,v.ZD)(j((function(){var n,i;return A(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(40709)]).then(t.bind(t,440709))];case 1:n=o.sent(),i=n.default;return[2,function(n){return(0,
r.jsx)(i,P(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){N(e,n,t[n])}))}return e}({},n),{onConfirm:function(){n.onClose();(0,E.xh)(e.id)},channel:e}))}]}}))})))}})}var S=t(539404),M=t(75139),m=t(753717),L=t(592079),T=t(485859),C=t(450324),x=t(11827);function G(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){G(e,n,t[n])}))}return e}function I(e){
var n=e.channel,t=e.onSelect,o=(0,m.Z)(n),a=(0,L.ZP)(n),u=(0,T.Z)(n),f=g(n),d=y(n),b=(0,l.Z)(n),p=w(n),h=(0,c.Z)(n.id);return(0,r.jsxs)(s.ZP,{navId:"channel-context",onClose:i.Zy,"aria-label":O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,onSelect:t,children:[(0,r.jsx)(s.kS,{children:o}),(0,r.jsxs)(s.kS,{children:[a,u]}),(0,r.jsxs)(s.kS,{children:[f,d,b]}),(0,r.jsx)(s.kS,{children:p}),(0,r.jsx)(s.kS,{children:h})]})}function D(e){var n=e.channel,t=e.guild,o=e.onSelect,a=(0,m.Z)(n),u=(0,L.ZP)(n),f=(0,T.Z)(n),d=g(n),b=y(n),p=(0,M.Z)(n),h=(0,l.Z)(n),E=(0,_.Z)(n,t),v=(0,S.Z)(n),Z=(0,c.Z)(n.id),j=(0,C.Z)(n),N=(0,x.Z)(n);return(0,r.jsxs)(s.ZP,{navId:"channel-context",onClose:i.Zy,"aria-label":O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,onSelect:o,children:[(0,r.jsx)(s.kS,{children:a},"mark-as-read"),(0,r.jsxs)(s.kS,{children:[j,d,b]},"channel-actions"),(0,r.jsxs)(s.kS,{children:[u,f,N]},"notifications"),(0,r.jsxs)(s.kS,{children:[p,h,E,v]},"admin-actions"),(0,r.jsx)(s.kS,{children:Z
},"developer-actions")]})}const R=(0,o.Z)((function(e){return(0,u.Z)()?(0,r.jsx)(I,k({},e)):(0,r.jsx)(D,k({},e))}),[a.Z.CONTEXT_MENU,a.Z.CHANNEL_CATEGORY_MENU])},729924:(e,n,t)=>{t.d(n,{Z:()=>O});var r=t(785893),i=(t(667294),t(363010)),o=t(769672),a=t(940712),c=t(897576),u=t(461061),l=t(959797);function s(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){t(e);return}c.done?n(u):Promise.resolve(u).then(r,i)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){s(o,r,i,a,c,"next",e)}function c(e){s(o,r,i,a,c,"throw",e)}a(void 0)}))}}function d(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){d(e,n,t[n])}))}return e}function p(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var h=function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),
0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:a.label++;return{value:o[1],done:!1};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(o);break}i[2]&&a.ops.pop();a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e];r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};function O(e,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.type,d=(0,i.e7)([a.Z],(function(){return a.Z.can(u.Plq.MANAGE_CHANNELS,e)}),[e]);if(__OVERLAY__||!d)return null;var O=function(){(0,c.ZD)(f((function(){var n,i;return h(this,(function(o){switch(o.label){case 0:
return[4,Promise.all([t.e(40532),t.e(17810),t.e(58169)]).then(t.bind(t,217810))];case 1:n=o.sent(),i=n.default;return[2,function(n){return(0,r.jsx)(i,p(b({},n),{channelType:s,guildId:e.guild_id,categoryId:e.parent_id}))}]}}))})))};switch(s){case u.d4z.GUILD_TEXT:return(0,r.jsx)(o.sN,{id:"create-text-channel",label:l.Z.Messages.CREATE_TEXT_CHANNEL,action:O});case u.d4z.GUILD_VOICE:return(0,r.jsx)(o.sN,{id:"create-voice-channel",label:l.Z.Messages.CREATE_VOICE_CHANNEL,action:O});default:return null}}},75139:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(785893),i=(t(667294),t(363010)),o=t(483562),a=t(769672),c=t(940712),u=t(461061),l=t(959797);function s(e){var n=(0,i.cj)([c.Z],(function(){return{canManageChannels:c.Z.can(u.Plq.MANAGE_CHANNELS,e),canManageRoles:c.Z.can(u.Plq.MANAGE_ROLES,e),canManageWebhooks:c.Z.can(u.Plq.MANAGE_WEBHOOKS,e),canAccessChannel:c.Z.can(e.accessPermissions,e)}}),[e]),t=n.canManageChannels,s=n.canManageRoles,f=n.canManageWebhooks,d=n.canAccessChannel
;return __OVERLAY__?null:d&&(t||s||f)?(0,r.jsx)(a.sN,{id:"edit-channel",label:e.type===u.d4z.GUILD_CATEGORY?l.Z.Messages.EDIT_CATEGORY:l.Z.Messages.EDIT_CHANNEL,action:function(){return o.ZP.open(e.id)}}):null}},753717:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(785893),i=(t(667294),t(363010)),o=t(320646),a=t(769672),c=t(577028),u=t(973381),l=t(668479),s=t(53551),f=t(384995),d=t(283369),b=t(461061),p=t(959797);function h(e){var n=function(e){return(0,i.e7)([d.ZP,f.Z,u.Z,c.Z,l.Z],(function(){if(e.isForumPost())return d.ZP.isForumPostUnread(e.id);if(e.isForumChannel())return c.Z.getUnreadThreadsCountForParent(e.guild_id,e.id)>0;if(e.type===b.d4z.GUILD_CATEGORY){var n=f.Z.getCategories(e.getGuildId());if(null==n[e.id])return!1;if(n[e.id].some((function(e){var n=e.channel;return(0,s.Em)(n.type)&&d.ZP.hasUnread(n.id)})))return!0;var t=new Set(n[e.id].map((function(e){return e.channel.id}))),r=u.Z.getThreadsForGuild(e.guild_id)
;for(var i in r)if(t.has(i))for(var o in r[i])if(l.Z.hasJoined(o)&&!l.Z.isMuted(o)&&d.ZP.hasUnread(o))return!0;return!1}return d.ZP.hasUnread(e.id)}),[e])}(e);return(0,r.jsx)(a.sN,{id:"mark-channel-read",label:p.Z.Messages.MARK_AS_READ,action:function(){e.isForumChannel()?(0,o.g5)(e):(0,o.U6)(e)},disabled:!n})}},450324:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(785893),i=(t(667294),t(363010)),o=t(769672),a=t(290495),c=t(513073),u=t(390504),l=t(461061),s=t(959797);function f(e){var n=(0,c.DM)(e.guild_id),t=(0,i.e7)([u.Z],(function(){return u.Z.isChannelOptedIn(e.guild_id,e.id)})),f=(0,i.e7)([u.Z],(function(){return null!=e.parent_id&&u.Z.isChannelOptedIn(e.guild_id,e.parent_id)})),d=(0,i.e7)([u.Z],(function(){return u.Z.isFavorite(e.guild_id,e.id)})),b=function(){(0,a.XQ)(e.guild_id,e.id,!t,{section:l.jXE.CONTEXT_MENU})};return!n||e.isThread()?null:e.isCategory()?(0,r.jsx)(o.sN,{id:"opt-into-category",label:t?s.Z.Messages.CHANNEL_OPT_OUT:s.Z.Messages.CHANNEL_OPT_IN,action:function(){return b()}
}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.sN,{id:"opt-in-favorite-channel",label:d?s.Z.Messages.REMOVE_FAVORITE:s.Z.Messages.ADD_FAVORITE,action:function(){(0,a.dM)(e.guild_id,e.id,!d,{section:l.jXE.CONTEXT_MENU})}}),f?(0,r.jsx)(o.sN,{id:"opt-out-category",label:s.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,action:function(){null!=e.parent_id&&(0,a.XQ)(e.guild_id,e.parent_id,!1,{section:l.jXE.CONTEXT_MENU})}}):(0,r.jsx)(o.sN,{id:"opt-into-channel",label:t?s.Z.Messages.CHANNEL_OPT_OUT:s.Z.Messages.CHANNEL_OPT_IN,action:function(){return b()}})]})}},11827:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(785893),i=(t(667294),t(363010)),o=t(359590),a=t(825431),c=t(685740),u=t(769672),l=t(390504),s=t(53619),f=t(959797);function d(e){var n=(0,c.nH)(e),t=function(e){return[{setting:s.N.NULL,label:null!=e.parent_id?f.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY:f.Z.Messages.FORM_LABEL_DEFAULT},{setting:s.N.ALL_MESSAGES,label:f.Z.Messages.FORM_LABEL_ALL_MESSAGES},{setting:s.N.MENTIONS_AND_HIGHLIGHTS,
label:f.Z.Messages.HIGHLIGHTS_AND_MENTIONS}]}(e);return(0,r.jsx)(r.Fragment,{children:t.map((function(t){var i=t.setting,a=t.label;return(0,r.jsx)(u.k5,{group:"channel-unreads",id:"".concat(i),label:a,subtext:i===s.N.NULL?f.Z.Messages.HIGHLIGHTS_AND_MENTIONS:void 0,action:function(){return function(n){(0,o.MR)(e.guild_id,e.id,n)}(i)},checked:i===n},i)}))})}function b(e){var n=(0,c.nH)(e),t=(0,a.RX)(),o=(0,i.e7)([l.Z],(function(){return l.Z.isGuildUnreadSettingEnabled(e.guild_id)})),b=t&&o,p=d(e);return b?(0,r.jsx)(u.sN,{id:"channel-unreads",label:f.Z.Messages.UNREAD_SETTINGS,subtext:n===s.N.ALL_MESSAGES?f.Z.Messages.FORM_LABEL_ALL_MESSAGES:f.Z.Messages.HIGHLIGHTS_AND_MENTIONS,children:p}):null}},282998:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(363010),i=t(971738),o=t(461061);function a(){return(0,r.e7)([i.Z],(function(){return i.Z.getGuildId()}))===o.I_8}},386704:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(785893),i=(t(667294),t(363010)),o=t(769672),a=t(971738),c=t(897576),u=t(461061),l=t(959797)
;function s(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){t(e);return}c.done?n(u):Promise.resolve(u).then(r,i)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){s(o,r,i,a,c,"next",e)}function c(e){s(o,r,i,a,c,"throw",e)}a(void 0)}))}}function d(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function b(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var p=function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]}
;return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:a.label++;return{value:o[1],done:!1};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(o);break}i[2]&&a.ops.pop();a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e];r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};function h(e){var n=(0,
i.e7)([a.Z],(function(){return a.Z.getGuildId()}));return __OVERLAY__||n!==u.I_8?null:(0,r.jsx)(o.sN,{id:"set-channel-nickname",label:l.Z.Messages.CHANGE_NICKNAME,action:function(){(0,c.ZD)(f((function(){var n,i;return p(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(98418)]).then(t.bind(t,598418))];case 1:n=o.sent(),i=n.default;return[2,function(n){return(0,r.jsx)(i,b(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){d(e,n,t[n])}))}return e}({},n),{channelId:e.id}))}]}}))})))}})}}}]);
//# sourceMappingURL=cfe66f64c459943ffa0a.js.map