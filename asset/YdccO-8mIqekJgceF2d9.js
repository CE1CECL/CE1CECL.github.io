var d=Object.defineProperty;var u=(t,e,s)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>(u(t,typeof e!="symbol"?e+"":e,s),s);import{ac as c,ad as i,ae as h,ax as f}from"./D1zPwdc9cyvUD_PRY_dc.js";import{a as v,Q as l}from"./tPKrx76dYSp2YBD2znnk.js";var _=Object.defineProperty,y=Object.getOwnPropertyDescriptor,o=(t,e,s,a)=>{for(var r=a>1?void 0:a?y(e,s):e,p=t.length-1,m;p>=0;p--)(m=t[p])&&(r=(a?m(e,s,r):m(r))||r);return a&&r&&_(e,s,r),r};class n{constructor(e){g(this,"messages");this.app=e,this.messages=c.array([]),f(this)}add(e){const s=new v(this.app,e);return this.messages.push(s),s}remove(e){const s=this.messages.find(a=>a.id===e);this.messages.remove(s)}send(e){const s=this.messages.find(a=>a.id===e);s.status=l.SENDING}get(e){return this.messages.filter(s=>s.channel_id===e)}handleIncomingMessage(e){e.nonce&&this.get(e.channel_id).find(s=>s.id===e.nonce)&&this.remove(e.nonce.toString())}}o([c],n.prototype,"messages",2);o([i],n.prototype,"add",1);o([i],n.prototype,"remove",1);o([i],n.prototype,"send",1);o([h],n.prototype,"get",1);o([i],n.prototype,"handleIncomingMessage",1);export{n as M};
//# sourceMappingURL=YdccO-8mIqekJgceF2d9.js.map
