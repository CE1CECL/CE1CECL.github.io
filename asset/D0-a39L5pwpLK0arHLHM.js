var n=Object.defineProperty;var c=(r,e,s)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var a=(r,e,s)=>(c(r,typeof e!="symbol"?e+"":e,s),s);import{ac as d,ad as h,ab as f}from"./D1zPwdc9cyvUD_PRY_dc.js";import{M as u}from"./DOjn4a2WvvtjkngHntBH.js";var _=Object.defineProperty,g=Object.getOwnPropertyDescriptor,i=(r,e,s,t)=>{for(var o=t>1?void 0:t?g(e,s):e,p=r.length-1,b;p>=0;p--)(b=r[p])&&(o=(t?b(e,s,o):b(o))||o);return t&&o&&_(e,s,o),o},v=(r=>(r.SENDING="sending",r.FAILED="failed",r))(v||{});class l extends u{constructor(s,t){super(s,t);a(this,"channel_id");a(this,"guild_id");a(this,"files");a(this,"progress",0);a(this,"status");a(this,"error");a(this,"abortCallback");this.id=t.id,this.channel_id=t.channel_id,this.guild_id=t.guild_id,this.files=t.files,this.status="sending",f(this)}updateProgress(s){this.progress=Math.round(s.loaded/s.total*100)}setAbortCallback(s){this.abortCallback=s}abort(){this.abortCallback&&this.abortCallback()}fail(s){this.error=s,this.status="failed"}delete(){}}i([d],l.prototype,"progress",2);i([d],l.prototype,"status",2);i([d],l.prototype,"error",2);i([h],l.prototype,"updateProgress",1);i([h],l.prototype,"setAbortCallback",1);i([h],l.prototype,"fail",1);export{v as Q,l as a};
//# sourceMappingURL=D0-a39L5pwpLK0arHLHM.js.map