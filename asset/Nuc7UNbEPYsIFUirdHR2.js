import{o as j,R as i,u as y,r as b,j as e,F as w,a as A,b as o,g as L,c as S,p as C,d as P,v as G,l as R}from"./D1zPwdc9cyvUD_PRY_dc.js";import{A as s}from"./Btiz9w87TnVlSBgvveKH.js";import{L as k}from"./BqrCr_RuABtekyQLbmdo.js";import{N as E}from"./DVqndjQgApqRYPKW0bHR.js";import{R as N}from"./Ci-HuM-FTpZmpR-l-HiV.js";import{E as v}from"./BTRZpqw0RH0DnQr-nBmY.js";import{L as V}from"./D6j0u6cgIyNM71oESs74.js";import{O as B}from"./BsYKU9Obw84PCk4rbigD.js";import{U as p}from"./DH1jGWsrIdR2k1u1WmJA.js";import{B as O}from"./CHVWewaBqhofhPnBvRM7.js";import{u as F}from"./DMCex30FeWvvThtDj-pY.js";import{A as m}from"./Bb4bfSkVyKDsDlRsmMAf.js";import{L as T}from"./CUv2-evLg129Kl1Nh5KW.js";import{C as I}from"./COCxQ1GOqQ5RoCcHoeER.js";import{u as U}from"./BITss_lCxr8k6CkeN0VZ.js";import{G as l}from"./BbvRrMjL3MsrffvEdAHV.js";import{i as W}from"./p91ReBh2MzHDYaH0T7ID.js";function D(){const t=U(),n=i.useContext(O),r=F("App"),c=y();return i.useEffect(()=>{const f=b(()=>t.token,a=>{a?(t.rest.setToken(a),t.gateway.readyState===WebSocket.CLOSED?(t.setGatewayReady(!1),t.gateway.connect(l.routeSettings.gateway)):r.debug("Gateway connect called but socket is not closed")):(r.debug("user no longer authenticated"),t.gateway.readyState===WebSocket.OPEN&&t.gateway.disconnect(1e3,"user is no longer authenticated"),c("/"))});return W&&(async()=>{const[a,g,u,d,x,h]=await Promise.all([L(),S(),C(),P(),G(),R()]);window.globals={tauriVersion:a,appVersion:g,platform:{name:u,arch:d,version:x,locale:h}}})(),l.load(),t.loadSettings(),r.debug("Loading complete"),t.setAppLoading(!1),f},[]),i.useEffect(()=>{t.isNetworkConnected?n.close():n.setContent({forced:!0,element:e.jsx(B,{})})},[t.isNetworkConnected,n]),e.jsxs(v,{section:"app",children:[t.fpsShown&&e.jsx(w,{}),e.jsx(V,{children:e.jsxs(A,{children:[e.jsx(o,{index:!0,path:"/",element:e.jsx(s,{component:m})}),e.jsx(o,{path:"/app",element:e.jsx(s,{component:m})}),e.jsx(o,{path:"/channels/:guildId/:channelId?",element:e.jsx(s,{component:I})}),e.jsx(o,{path:"/login",element:e.jsx(p,{component:k})}),e.jsx(o,{path:"/register",element:e.jsx(p,{component:N})}),e.jsx(o,{path:"/logout",element:e.jsx(s,{component:T})}),e.jsx(o,{path:"*",element:e.jsx(E,{})})]})})]})}const re=j(D);export{re as A};
//# sourceMappingURL=Nuc7UNbEPYsIFUirdHR2.js.map