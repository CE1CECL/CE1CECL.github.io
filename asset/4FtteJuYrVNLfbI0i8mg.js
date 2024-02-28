import{q as H,R as t,a3 as B,j as e,B as $,a4 as V}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as W}from"./DMCex30FeWvvThtDj-pY.js";import{u as q}from"./DGL6_RycxmHvVHT1mxd4.js";import{m as z}from"./BDzl6LkRQpjGU2VD4La_.js";import{L as x,a as v,b as G,I as K}from"./DHl6qXLxfX-P_8rTMqVp.js";import{B as P}from"./uuvkXtht0VTmVXFBNbxL.js";import{T as J}from"./BqRj4Kh8YikLdguz1juN.js";import{I as E,a as S}from"./C1Dt-7uAHvvQYHl271Q1.js";import{I as Q}from"./Zr3IUOdpzckDlmHgYvaT.js";import{I as X}from"./BbskXcjEs2w1MwLMBVgW.js";import{M as Z,I as g}from"./ClW3pBdWUrkPBtn0jDG4.js";const r={MINUTES_30:{label:"30 Minutes",value:1800},HOUR_1:{label:"1 Hour",value:3600},HOURS_6:{label:"6 Hours",value:21600},HOURS_12:{label:"12 Hours",value:43200},DAY_1:{label:"1 Day",value:86400},DAY_7:{label:"7 Days",value:604800},DAYS_30:{label:"30 Days",value:2592e3},NEVER:{label:"Never",value:0}},o={NO_LIMIT:{label:"No Limit",value:0},USE_1:{label:"1 use",value:1},USE_5:{label:"5 uses",value:5},USE_10:{label:"10 uses",value:10},USE_25:{label:"25 uses",value:25},USE_50:{label:"50 uses",value:50},USE_100:{label:"100 uses",value:100}};function D(l,i){return Object.values(i).find(u=>u.value===l)}const f=H.div`
	width: 100%;
	display: flex;
	align-items: center;
`;function de({target:l,...i}){var y;const h=W("CreateInviteModal"),u=q(),[U,w]=t.useState(r.DAY_7),[C,O]=t.useState(o.NO_LIMIT),[M,c]=t.useState(!1),[j,A]=t.useState(null),{register:d,handleSubmit:T,formState:{errors:p},setError:n,setValue:N,clearErrors:R,getValues:L}=B(),[b,k]=t.useState(null),_=a=>{R(),u.rest.post(V.channelInvites(l.id),Object.assign({flags:0,target_type:null,target_user_id:null,max_age:r.DAY_7.value,max_uses:0,temporary:!1},a,{code:void 0})).then(s=>{N("code",`${window.location.origin}/invite/${s.code}`),A(s.expires_at?new Date(s.expires_at):null)}).catch(s=>{if("message"in s)if(s.errors){const m=z(s.errors);m?n(m.field,{type:"manual",message:m.error}):n("code",{type:"manual",message:s.message})}else n("code",{type:"manual",message:s.message});else h.error(s),n("code",{type:"manual",message:"Unknown Error"})})},I=T(a=>{b&&clearTimeout(b),k(setTimeout(()=>_(a),500)),c(!1)}),Y=a=>{w(D(Number(a.target.value),r)??r.DAY_7),c(!0)},F=a=>{O(D(Number(a.target.value),o)??o.NO_LIMIT),c(!0)};return t.useEffect(()=>_(),[]),e.jsx(Z,{...i,title:"Invite People",description:`to #${l.name} in ${(y=l.guild)==null?void 0:y.name}`,children:e.jsxs("form",{onKeyDown:a=>{a.key==="Enter"&&(a.preventDefault(),I())},children:[e.jsxs(g,{children:[e.jsx(x,{error:!1,children:e.jsx(v,{children:"Expire after"})}),e.jsx(f,{children:e.jsx(E,{...d("max_age",{value:r.DAY_7.value}),onChange:Y,value:U.value,children:Object.entries(r).map(([a,s])=>e.jsx(S,{value:s.value,children:s.label}))})})]}),e.jsxs(g,{children:[e.jsx(x,{error:!1,children:e.jsx(v,{children:"Max Number of Uses"})}),e.jsx(f,{children:e.jsx(E,{...d("max_uses",{value:0}),onChange:F,value:C.value,children:Object.entries(o).map(([a,s])=>e.jsx(S,{value:s.value,children:s.label}))})})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",margin:"24px 0 12px 0"},children:e.jsx(P,{disabled:!M,onClick:I,children:"Generate New Link"})}),e.jsxs(g,{style:{marginTop:"0"},children:[e.jsxs(x,{error:!!p.code,children:[e.jsx(v,{children:"Invite Code"}),p.code&&e.jsx(G,{children:e.jsxs(e.Fragment,{children:[e.jsx(J,{children:"-"}),p.code.message]})})]}),e.jsxs(f,{style:{background:"var(--background-secondary-alt)",borderRadius:"12px"},children:[e.jsx(K,{autoFocus:!0,...d("code"),readOnly:!0,placeholder:`${window.location.origin}/invite/`}),e.jsx(X,{style:{marginRight:"8px"},onClick:a=>{a.preventDefault(),navigator.clipboard.writeText(L("code"))},children:e.jsx(Q,{icon:"mdiContentCopy",size:"20px",color:"white"})})]}),e.jsx("span",{style:{color:"var(--text-secondary)",marginTop:"8px",fontSize:"12px",fontWeight:"var(--font-weight-regular)",padding:"0 8px"},children:j?e.jsxs(e.Fragment,{children:["This invite will expire ",$(j).fromNow()]}):"Invite will never expire."})]})]})})}export{de as C};
//# sourceMappingURL=4FtteJuYrVNLfbI0i8mg.js.map
