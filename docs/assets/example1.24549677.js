import{d as h,b as l,z as y,q as k,_ as b,o as w,h as S,j as c,C as I,B as m,n as x,r as T,p as i,G as v,F as C,t as _,s as W,x as B}from"./index.c2734ee4.js";var E=(e,o=null)=>{const n=()=>{const a=e.scrollTop||document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;o&&o(a)};e.addEventListener("scroll",n)};const H=h({name:"ScrollWrap",props:{long:{type:[String,Number],default:"0"},background:{type:String,default:""},listen:{type:HTMLDocument,default:window}},emits:["done"],setup(e,o){const n=document.documentElement.clientHeight||document.body.clientHeight,a=l(!1),s=l(0),r=l(0),d=l(null),t=l(null),f=l(null),$=l(""),p=l(0);return y(async()=>{await k(),s.value=t.value.offsetTop,r.value=s.value+parseInt(String(e.long),10),E(e.listen,u=>{let g=0;u>s.value&&u<=r.value?(g=(u-s.value)/(r.value-s.value),p.value=g,a.value=!1,t.value.style.top=0):u>r.value&&(o.emit("done"),p.value=1,a.value=!0,t.value&&(t.value.style.top=f.value.offsetHeight+"px"))})}),{wh:n,relative:a,startIndex:s,endIndex:r,wrap:d,el:t,body:f,url:$,scroll:p}}}),z={ref:"wrap",class:"sticky"};function F(e,o,n,a,s,r){return w(),S("div",z,[c("div",{ref:"el",style:m({height:e.wh+"px",background:e.background}),class:x(["box",{"release-scroll":e.relative}])},[I(e.$slots,"default",{progress:e.scroll},void 0,!0)],6),c("div",{ref:"body",style:m("height:"+e.long+"px;")},null,4)],512)}var L=b(H,[["render",F],["__scopeId","data-v-e8c2ffd8"]]);const N=h({components:{ScrollWrap:L},setup(){const e=n=>(n*100).toFixed(2)+"%",o=l(window);return y(()=>{o.value=document.querySelector(".example-content")}),{listen:o,percentage:e}}}),q=e=>(W("data-v-25c80531"),e=e(),B(),e),D={class:"content"},M={class:"content"},V={class:"content"},j=q(()=>c("iframe",{src:"/#/docs/scroll-wrap/-scroll-wrap?preview=true",frameborder:"0"},null,-1));function G(e,o,n,a,s,r){const d=T("ScrollWrap");return w(),S(C,null,[i(d,{background:"#98bec8",long:1e3,listen:e.listen},{default:v(t=>[c("div",D,_(e.percentage(t.progress)),1)]),_:1},8,["listen"]),i(d,{background:"#e8c3b9",long:1200,listen:e.listen},{default:v(t=>[c("div",M,_(e.percentage(t.progress)),1)]),_:1},8,["listen"]),i(d,{background:"#9ba5b6",long:1e3,listen:e.listen},{default:v(t=>[c("div",V,_(e.percentage(t.progress)),1)]),_:1},8,["listen"]),j],64)}var Y=b(N,[["render",G],["__scopeId","data-v-25c80531"]]);export{Y as default};