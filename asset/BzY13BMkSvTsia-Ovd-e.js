var n=Object.defineProperty;var m=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var s=(t,e,r)=>(m(t,typeof e!="symbol"?e+"":e,r),r);import{ab as c,ac as x,ad as o,ae as i,j as a}from"./D1zPwdc9cyvUD_PRY_dc.js";import{A as p}from"./Cgf2_kqnAKP8K9jokY9W.js";import{B as d}from"./BVlhR6l_ap0UfWc62lwO.js";import{C as h}from"./DftzFKwYCUNlpFDKNnjr.js";import{C as v}from"./C9cGUAOIT_J9f_LsUNeH.js";import{D as k}from"./CQK3WufgiMbdGl-Ry7Tl.js";import{E as b}from"./B8fs25i4Ly6vLBqndWEb.js";import{I as M}from"./DoKG5kTOSyMgbpYzmlYc.js";import{J as f}from"./Bk_E9XvGylsa6Rpw6fpP.js";import{K as g}from"./BO-QHK46McLNaGJojIg-.js";import{L as u}from"./BI2tmRPAQZfjuuDTWGvN.js";import{S as C}from"./DrJMZkN-MSFUlNjWHHjs.js";function _(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}class S{constructor(e){s(this,"stack",[]);s(this,"components");this.components=e,c(this,{stack:x,push:o,pop:o,remove:o,rendered:i,isVisible:i}),this.close=this.close.bind(this),this.closeAll=this.closeAll.bind(this)}push(e){this.stack=[...this.stack,{...e,key:_()}]}pop(e){this.stack=this.stack.map((r,l)=>l===this.stack.length-1?{...r,signal:e}:r)}close(){this.pop("close")}closeAll(){this.stack=[]}remove(e){this.stack=this.stack.filter(r=>r.key!==e)}get rendered(){return a.jsx(a.Fragment,{children:this.stack.map(e=>{const r=this.components[e.type];return r?a.jsx(r,{...e,onClose:()=>this.remove(e.key)}):null})})}get isVisible(){return this.stack.length>0}}class y extends S{writeText(e){navigator.clipboard?navigator.clipboard.writeText(e):this.push({type:"clipboard",text:e})}}const F=new y({add_server:p,ban_member:d,leave_server:u,create_invite:h,create_server:v,join_server:f,delete_message:k,error:b,image_viewer:M,kick_member:g,settings:C});export{F as m};
//# sourceMappingURL=BzY13BMkSvTsia-Ovd-e.js.map