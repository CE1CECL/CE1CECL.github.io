var n=Object.defineProperty;var v=(e,t,s)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var r=(e,t,s)=>(v(e,typeof t!="symbol"?t+"":t,s),s);import{ac as u,ad as h}from"./D1zPwdc9cyvUD_PRY_dc.js";import{U as _}from"./B5c6BBNNBMLkAVKBLaK0.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(e,t,s,a)=>{for(var i=a>1?void 0:a?g(t,s):t,c=e.length-1,l;c>=0;c--)(l=e[c])&&(i=(a?l(t,s,i):l(i))||i);return a&&i&&f(t,s,i),i};class o{constructor(t,s){r(this,"app");r(this,"user");r(this,"guildId");r(this,"status");r(this,"activities");r(this,"clientStatus");this.app=t,this.user=this.app.users.get(s.user.id)??new _(s.user),this.guildId=s.guild_id,this.status=s.status,this.activities=s.activities,this.clientStatus=s.client_status}update(t){Object.assign(this,t)}}p([u],o.prototype,"user",2);p([u],o.prototype,"guildId",2);p([u],o.prototype,"status",2);p([u],o.prototype,"activities",2);p([u],o.prototype,"clientStatus",2);p([h],o.prototype,"update",1);export{o as P};
//# sourceMappingURL=D_JIEthl7xLAYRLIzCMd.js.map