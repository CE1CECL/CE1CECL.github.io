var c=Object.defineProperty;var u=(a,e,t)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var h=(a,e,t)=>(u(a,typeof e!="symbol"?e+"":e,t),t);import{ac as v,ad as n,ae as d,az as f}from"./D1zPwdc9cyvUD_PRY_dc.js";import{C as m}from"./z91KtZf8l0p5ve1n1Obm.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(a,e,t,p)=>{for(var r=p>1?void 0:p?b(e,t):e,l=a.length-1,i;l>=0;l--)(i=a[l])&&(r=(p?i(e,t,r):i(r))||r);return p&&r&&y(e,t,r),r};class o{constructor(e){h(this,"app");h(this,"channels",new f);this.app=e}add(e){this.channels.set(e.id,new m(this.app,e))}update(e){const t=this.channels.get(e.id);t?t.update(e):this.add(e)}addAll(e){e.forEach(t=>this.add(t))}get(e){return this.channels.get(e)}get all(){return Array.from(this.channels.values())}remove(e){this.channels.delete(e)}get count(){return this.channels.size}}s([v],o.prototype,"channels",2);s([n],o.prototype,"add",1);s([n],o.prototype,"update",1);s([n],o.prototype,"addAll",1);s([d],o.prototype,"all",1);s([n],o.prototype,"remove",1);s([d],o.prototype,"count",1);export{o as P};
//# sourceMappingURL=6j2LioaD41mtTKz9b5j8.js.map
