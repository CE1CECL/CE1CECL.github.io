var c=Object.defineProperty;var g=(n,t,r)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var o=(n,t,r)=>(g(n,typeof t!="symbol"?t+"":t,r),r);const s=class s{constructor(){throw new Error(`The ${this.constructor.name} class may not be instantiated.`)}static idToBinary(t){let r="",e=parseInt(t.slice(0,-10))||0,i=parseInt(t.slice(-10));for(;i>0||e>0;)r=String(i&1)+r,i=Math.floor(i/2),e>0&&(i+=5e9*(e%2),e=Math.floor(e/2));return r}static binaryToID(t){let r="";for(;t.length>50;){const e=parseInt(t.slice(0,-32),2),i=parseInt((e%10).toString(2)+t.slice(-32),2);r=(i%10).toString()+r,t=Math.floor(e/10).toString(2)+Math.floor(i/10).toString(2).padStart(32,"0")}for(t=parseInt(t,2);t>0;)r=(t%10).toString()+r,t=Math.floor(t/10);return r}static generateWorkerProcess(){const t=BigInt(Date.now()-s.EPOCH)<<BigInt(22),r=s.workerId<<17n,e=s.processId<<12n,i=s.INCREMENT++;return BigInt(t|r|e|i)}static generate(){return s.generateWorkerProcess().toString()}static deconstruct(t){const r=s.idToBinary(t).toString(2).padStart(64,"0"),e={timestamp:parseInt(r.substring(0,42),2)+s.EPOCH,workerID:parseInt(r.substring(42,47),2),processID:parseInt(r.substring(47,52),2),increment:parseInt(r.substring(52,64),2),binary:r};return Object.defineProperty(e,"date",{get:function(){return new Date(this.timestamp)},enumerable:!0}),e}};o(s,"EPOCH",14200704e5),o(s,"INCREMENT",BigInt(0)),o(s,"processId",BigInt(0%31)),o(s,"workerId",BigInt(0%31));let a=s;export{a as S};
//# sourceMappingURL=D1PEH0-ihVsLoLRNDxxE.js.map