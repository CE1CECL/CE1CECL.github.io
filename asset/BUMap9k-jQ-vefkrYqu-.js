import{u as M,R as o,a3 as V,a4 as W,j as e}from"./D1zPwdc9cyvUD_PRY_dc.js";import{S as G}from"./nS5X1rqYDTx-qoLepjc2.js";import{W as K,A as N,S as $,F as z,d as j,L as y,a as b,b as p,c as S,I as k,e as J,f as O,g as Q,h as X}from"./DHl6qXLxfX-P_8rTMqVp.js";import{T as h}from"./BqRj4Kh8YikLdguz1juN.js";import{H as Y,a as Z}from"./CBnsuOs82AqnXU0YOHQi.js";import{u as ee}from"./DMCex30FeWvvThtDj-pY.js";import{u as se}from"./CSsGLCL489yt6drEKgfD.js";import{G as w}from"./BbvRrMjL3MsrffvEdAHV.js";import{R as te}from"./QYpFnEzuinoxVZvJrekf.js";import{m as re}from"./BDzl6LkRQpjGU2VD4La_.js";import{M as ae}from"./Dew7NpxHGuyW--meDngE.js";function xe(){const m=se(),c=ee("LoginPage"),T=M(),[l,C]=o.useState(!1),[v,L]=o.useState(),[R,g]=o.useState(),x=o.useRef(null),[F,A]=o.useState(null),[q,u]=o.useState(!1),{register:f,handleSubmit:P,formState:{errors:r},setError:a,setValue:E,clearErrors:B}=V(),d=()=>{var t;(t=x.current)==null||t.resetCaptcha(),E("captcha_key",void 0)},U=t=>{try{return new URL(t)}catch{return}},I=P(t=>{C(!0),L(void 0),g(void 0),m.rest.post(W.login(),{login:t.login,password:t.password,captcha_key:t.captcha_key,undelete:!1}).then(s=>{if("token"in s&&"settings"in s){m.setToken(s.token,!0);return}else if("bot@bot.bot"in t){m.setToken(t.password,!0);return}else if("ticket"in s){c.info("MFA Required",s),g(s);return}else c.error(s),a("login",{type:"manual",message:"Unknown Error"})}).catch(s=>{var i;if("captcha_key"in s){if(s.captcha_key[0]!=="captcha-required")a("login",{type:"manual",message:`Captcha Error: ${s.captcha_key[0]}`});else if(s.captcha_service!=="hcaptcha")a("login",{type:"manual",message:`Unsupported captcha service: ${s.captcha_service}`});else{L(s.captcha_sitekey),(i=x.current)==null||i.execute();return}d()}else if("message"in s){if(s.errors){const n=re(s.errors);n?a(n.field,{type:"manual",message:n.error}):a("login",{type:"manual",message:s.message})}else a("login",{type:"manual",message:s.message});d()}else c.error(s),a("login",{type:"manual",message:"Unknown Error"}),d()}).finally(()=>C(!1))}),D=t=>{E("captcha_key",t),I()},H=t=>{B("instance"),u(!1),F&&clearTimeout(F),A(setTimeout(async()=>{const i=U(t.target.value);if(!i)return;u(!0);let n;try{n=await te.getEndpointsFromDomain(i)}catch(_){return u(!1),a("instance",{type:"manual",message:_ instanceof Error&&_.message||"Instance could not be resolved"})}c.debug("Instance lookup has set routes to",n),w.routeSettings=n,w.save(),u(!1)},500))};return v?e.jsx(Y,{captchaRef:x,sitekey:v,onVerify:D}):R?e.jsx(ae,{...R,close:()=>{g(void 0),d()}}):e.jsx(K,{children:e.jsxs(N,{children:[e.jsx(Z,{children:e.jsxs(e.Fragment,{children:[e.jsx(G,{height:48,width:"auto"}),e.jsx($,{noBranding:!0,children:"Log into Spacebar"})]})}),e.jsxs(z,{onSubmit:I,children:[e.jsxs(j,{marginBottom:!0,style:{marginTop:0},children:[e.jsxs(y,{error:!!r.instance,children:[e.jsx(b,{children:"Instance"}),q!=!1&&e.jsx(p,{children:e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"-"}),"Checking"]})}),r.instance&&e.jsx(p,{children:e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"-"}),r.instance.message]})})]}),e.jsx(S,{children:e.jsx(k,{type:"url",...f("instance",{required:!0,value:w.routeSettings.wellknown}),placeholder:"Instance Root URL",onChange:H,error:!!r.instance,disabled:l})})]}),e.jsxs(j,{marginBottom:!0,children:[e.jsxs(y,{error:!!r.login,children:[e.jsx(b,{children:"Email"}),r.login&&e.jsx(p,{children:e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"-"}),r.login.message]})})]}),e.jsx(S,{children:e.jsx(k,{type:"email",placeholder:"Email",autoFocus:!0,...f("login",{required:!0}),error:!!r.login,disabled:l})})]}),e.jsxs(j,{marginBottom:!0,children:[e.jsxs(y,{error:!!r.password,children:[e.jsx(b,{children:"Password"}),r.password&&e.jsx(p,{children:e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"-"}),r.password.message]})})]}),e.jsx(S,{children:e.jsx(k,{type:"password",placeholder:"Password",...f("password",{required:!0}),error:!!r.password,disabled:l})})]}),e.jsx(J,{palette:"primary",type:"submit",disabled:l,children:"Login"}),e.jsxs(O,{children:[e.jsx(Q,{children:"New to Spacebar? "}),e.jsx(X,{onClick:()=>{T("/register")},type:"button",children:"Register"})]})]})]})})}export{xe as L};
//# sourceMappingURL=BUMap9k-jQ-vefkrYqu-.js.map
