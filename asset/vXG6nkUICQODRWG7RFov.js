var u=Object.defineProperty;var d=(r,e,s)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var h=(r,e,s)=>(d(r,typeof e!="symbol"?e+"":e,s),s);import{ac as l,ad as i,ae as v,ab as f}from"./D1zPwdc9cyvUD_PRY_dc.js";import{P as m}from"./DeI8QHBAAxpZrwPHG1Ez.js";var y=Object.defineProperty,P=Object.getOwnPropertyDescriptor,p=(r,e,s,o)=>{for(var t=o>1?void 0:o?P(e,s):e,n=r.length-1,c;n>=0;n--)(c=r[n])&&(t=(o?c(e,s,t):c(t))||t);return o&&t&&y(e,s,t),t};class a{constructor(e){h(this,"app");h(this,"presences",l.map());this.app=e,f(this)}add(e){this.presences.has(e.user.id)?this.update(e):this.presences.set(e.user.id,new m(this.app,e))}addAll(e){e.forEach(s=>this.add(s))}get all(){return Array.from(this.presences.values())}remove(e){this.presences.delete(e)}update(e){var s;(s=this.presences.get(e.user.id))==null||s.update(e)}get(e){return this.presences.get(e)}has(e){return this.presences.has(e)}asList(){return Array.from(this.presences.values())}get size(){return this.presences.size}}p([l],a.prototype,"presences",2);p([i],a.prototype,"add",1);p([i],a.prototype,"addAll",1);p([v],a.prototype,"all",1);p([i],a.prototype,"remove",1);p([i],a.prototype,"update",1);export{a as P};
//# sourceMappingURL=vXG6nkUICQODRWG7RFov.js.map
