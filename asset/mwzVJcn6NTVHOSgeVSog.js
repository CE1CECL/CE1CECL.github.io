var a=Object.defineProperty;var n=(t,e,s)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var o=(t,e,s)=>(n(t,typeof e!="symbol"?e+"":e,s),s);import{ac as m,U as u}from"./D1zPwdc9cyvUD_PRY_dc.js";import{U as c}from"./DGKQDzYxD1Yh073TVjtD.js";import{U as f}from"./CiaK8-Kbkj7ud8qjwQjF.js";var g=Object.defineProperty,_=Object.getOwnPropertyDescriptor,v=(t,e,s,r)=>{for(var i=r>1?void 0:r?_(e,s):e,p=t.length-1,h;p>=0;p--)(h=t[p])&&(i=(r?h(e,s,i):h(i))||i);return r&&i&&g(e,s,i),i};class l{constructor(e,s){o(this,"id");o(this,"content");o(this,"timestamp");o(this,"type");o(this,"author");if(this.app=e,this.id=s.id,this.content=s.content,this.timestamp=new Date(s.timestamp),this.type=s.type,this.app.users.has(s.author.id))this.author=this.app.users.get(s.author.id);else{const r=new f(s.author);this.app.users.users.set(r.id,r),this.author=r}}getJoinMessage(){if(this.type!==u.UserJoin)throw new Error("Message is not a user join message");return c[this.timestamp.getTime()%13]}}v([m],l.prototype,"content",2);export{l as M};
//# sourceMappingURL=mwzVJcn6NTVHOSgeVSog.js.map
