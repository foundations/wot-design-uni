import{d as a,r as e,h as s,j as t,o as l,c as r,w as o,b as d,t as i,u as n,p as u,e as m,F as c,a as f,n as _,x as g,g as p,i as v,B as x,C as w,f as h,k as y}from"./index-bc8b5b89.js";import{_ as k}from"./wd-divider.ad353068.js";import{g as T,m as j,b,t as C,a as I,_ as S}from"./page-wraper.7cfd0783.js";import{u as z}from"./useTranslate.670742f3.js";const B=I(a({name:"wd-loadmore",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...T,state:String,loadingText:String,finishedText:String,errorText:j("加载失败，点击重试")},emits:["reload"],setup(a,{emit:x}){const w=a,{translate:h}=z("loadmore"),y=e(null);function T(){"error"===w.state&&(y.value="loading",x("reload"))}return(a,e)=>{const x=s(t("wd-divider"),k),w=p,y=s(t("wd-icon"),b),j=s(t("wd-loading"),C),I=v;return l(),r(I,{class:_(["wd-loadmore",a.customClass]),style:g(a.customStyle),onClick:T},{default:o((()=>["finished"===a.state?(l(),r(x,{key:0},{default:o((()=>[d(i(a.finishedText||n(h)("finished")),1)])),_:1})):u("",!0),"error"===a.state?(l(),m(c,{key:1},[a.errorText?(l(),m(c,{key:0},[d(i(a.errorText),1)],64)):(l(),m(c,{key:1},[f(w,{class:"wd-loadmore__text"},{default:o((()=>[d(i(n(h)("error")),1)])),_:1}),f(w,{class:"wd-loadmore__text is-light"},{default:o((()=>[d(i(n(h)("retry")),1)])),_:1}),f(y,{name:"refresh",size:"16px","custom-class":"wd-loadmore__refresh"})],64))],64)):u("",!0),"loading"===a.state?(l(),m(c,{key:2},[f(j,{size:"16px","custom-class":"wd-loadmore__loading"}),f(w,{class:"wd-loadmore__text"},{default:o((()=>[d(i(a.loadingText||n(h)("loading")),1)])),_:1})],64)):u("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-8a66592a"]]),E=I(a({__name:"Index",setup(a){const n=e("loading"),u=e(0),_=e(60);function g(){setTimeout((()=>{u.value=u.value+15,n.value="loading"}),200)}return x((()=>{45===u.value?n.value="error":u.value<_.value?g():u.value===_.value&&(n.value="finished")})),w((()=>{g()})),(a,e)=>{const _=y,p=v,x=s(t("wd-loadmore"),B),w=s(t("page-wraper"),S);return l(),r(w,null,{default:o((()=>[f(p,{class:"container"},{default:o((()=>[(l(!0),m(c,null,h(u.value,(a=>(l(),r(p,{key:a,class:"list-item"},{default:o((()=>[f(_,{src:"https://img10.360buyimg.com/jmadvertisement/jfs/t1/70325/36/14954/36690/5dcd3e3bEee5006e0/aed1ccf6d5ffc764.png"}),f(p,{class:"right"},{default:o((()=>[d("这是一条测试"+i(a+1),1)])),_:2},1024)])),_:2},1024)))),128)),f(x,{state:n.value,onReload:g},null,8,["state"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-7db38e08"]]);export{E as default};