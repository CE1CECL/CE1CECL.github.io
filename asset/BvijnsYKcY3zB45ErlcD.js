import{q as f,u as h,a3 as j,a4 as v,j as e}from"./D1zPwdc9cyvUD_PRY_dc.js";import{m as a}from"./6aRcOSQM8zX5wtujqK9H.js";import"./Dh4_hynRBFtJWPBMQL-H.js";import{u as b}from"./DMCex30FeWvvThtDj-pY.js";import{u as y}from"./CrgmpKfgK6p9QwyFKmqD.js";import{m as L}from"./BDzl6LkRQpjGU2VD4La_.js";import{L as k,a as E,b as I,I as S}from"./DHl6qXLxfX-P_8rTMqVp.js";import{T as w}from"./BqRj4Kh8YikLdguz1juN.js";import{M as C}from"./ClW3pBdWUrkPBtn0jDG4.js";const F=f.div`
	display: flex;
	flex-direction: column;
`;function G({...d}){const c=b("JoinServerModal"),m=y(),p=h(),{register:u,handleSubmit:g,formState:{errors:o,isLoading:n},setError:s,setValue:J}=j(),l=g(i=>{const x=i.code.split("/").reverse()[0];m.rest.post(v.invite(x)).then(r=>{p(`/channels/${r.guild_id}/${r.channel_id}`),a.closeAll()}).catch(r=>{if("message"in r)if(r.errors){const t=L(r.errors);t?s(t.field,{type:"manual",message:t.error}):s("code",{type:"manual",message:r.message})}else s("code",{type:"manual",message:r.message});else c.error(r),s("code",{type:"manual",message:"Unknown Error"})})});return e.jsx(C,{...d,onClose:()=>a.closeAll(),title:"Join a Guild",description:"Enter an invite below to join an existing guild.",actions:[{onClick:l,children:e.jsx("span",{children:"Join"}),palette:"primary",confirmation:!0,disabled:n},{onClick:()=>a.pop("close"),children:e.jsx("span",{children:"Back"}),palette:"link",disabled:n}],children:e.jsx("form",{onKeyDown:i=>{i.key==="Enter"&&(i.preventDefault(),l())},children:e.jsxs(F,{children:[e.jsxs(k,{error:!!o.code,children:[e.jsx(E,{children:"Invite Link"}),o.code&&e.jsx(I,{children:e.jsxs(e.Fragment,{children:[e.jsx(w,{children:"-"}),o.code.message]})})]}),e.jsx(S,{...u("code",{required:!0}),placeholder:`${window.location.origin}/invite/`,type:"text",maxLength:9999,required:!0,error:!!o.code,disabled:n,autoFocus:!0,minLength:6})]})})})}export{G as J};
//# sourceMappingURL=BvijnsYKcY3zB45ErlcD.js.map