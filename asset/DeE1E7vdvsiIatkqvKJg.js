var y=Object.defineProperty;var b=(o,t,p)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:p}):o[t]=p;var a=(o,t,p)=>(b(o,typeof t!="symbol"?t+"":t,p),p);import{ac as i,k as v,I as c}from"./D1zPwdc9cyvUD_PRY_dc.js";import{R as n}from"./QYpFnEzuinoxVZvJrekf.js";var d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,e=(o,t,p,l)=>{for(var s=l>1?void 0:l?h(t,p):t,m=o.length-1,f;m>=0;m--)(f=o[m])&&(s=(l?f(t,p,s):f(s))||s);return l&&s&&d(t,p,s),s};class r{constructor(t){a(this,"id");a(this,"username");a(this,"discriminator");a(this,"avatar");a(this,"avatarDecoration");a(this,"email",null);a(this,"verified",!1);a(this,"bot",!1);a(this,"system",!1);a(this,"mfaEnabled",!1);a(this,"premiumType");a(this,"flags");a(this,"publicFlags");a(this,"raw");this.raw=t,this.id=t.id,this.username=t.username,this.discriminator=t.discriminator,this.avatar=t.avatar,t.email&&(this.email=t.email),t.verified&&(this.verified=t.verified),t.bot&&(this.bot=t.bot),t.system&&(this.system=t.system),t.mfa_enabled&&(this.mfaEnabled=t.mfa_enabled),t.premium_type&&(this.premiumType=t.premium_type),t.flags&&(this.flags=t.flags),t.public_flags&&(this.publicFlags=t.public_flags)}get defaultAvatarUrl(){return n.makeCDNUrl(v.defaultUserAvatar(Number(this.discriminator)%5))}get avatarUrl(){return this.avatar?n.makeCDNUrl(v.userAvatar(this.id,this.avatar,c.PNG)):this.defaultAvatarUrl}}e([i],r.prototype,"username",2);e([i],r.prototype,"discriminator",2);e([i],r.prototype,"avatar",2);e([i],r.prototype,"avatarDecoration",2);e([i],r.prototype,"email",2);e([i],r.prototype,"verified",2);e([i],r.prototype,"bot",2);e([i],r.prototype,"system",2);e([i],r.prototype,"mfaEnabled",2);e([i],r.prototype,"premiumType",2);e([i],r.prototype,"flags",2);e([i],r.prototype,"publicFlags",2);e([i],r.prototype,"raw",2);export{r as A};
//# sourceMappingURL=DeE1E7vdvsiIatkqvKJg.js.map