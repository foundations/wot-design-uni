import{_ as l,a as e}from"./wd-sidebar.2495e506.js";import{d as a,r as t,o as s,c as i,w as d,a as o,e as u,f as r,F as b,x as n,a6 as m,h as c,j as p,i as f,a4 as w}from"./index-bc8b5b89.js";import{b as h,e as _,_ as v,a as g}from"./page-wraper.7cfd0783.js";import{_ as y}from"./wd-cell-group.9d4af2cb.js";import"./wd-badge.ffec3106.js";import"./useChildren.f02a69c0.js";const j=g(a({__name:"demo2",setup(a){const g=t(1),j=t(0),x=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),k=t([{label:"分类一",title:"标题一",icon:"thumb-up",items:x,disabled:!1},{label:"分类二",title:"标题二",icon:"thumb-up",items:x,disabled:!1},{label:"分类三",title:"标题三",icon:"thumb-up",items:x.slice(0,18),disabled:!1},{label:"分类四",title:"标题四",icon:"thumb-up",items:x.slice(0,21),disabled:!1},{label:"分类五",title:"标题五",icon:"thumb-up",items:x,disabled:!1},{label:"分类六",title:"标题六",icon:"thumb-up",items:x.slice(0,18),disabled:!1},{label:"分类七",title:"标题七",icon:"thumb-up",items:x,disabled:!0}]);function V({value:l}){g.value=l,j.value=-1,m((()=>{j.value=0}))}return(a,t)=>{const m=c(p("wd-sidebar-item"),l),x=c(p("wd-sidebar"),e),C=c(p("wd-icon"),h),q=c(p("wd-cell"),_),z=c(p("wd-cell-group"),y),A=w,F=f,I=c(p("page-wraper"),v);return s(),i(I,null,{default:d((()=>[o(F,{class:"wraper"},{default:d((()=>[o(x,{modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=l=>g.value=l),onChange:V},{default:d((()=>[(s(!0),u(b,null,r(k.value,((l,e)=>(s(),i(m,{key:e,value:e,label:l.label,icon:l.icon,disabled:l.disabled},null,8,["value","label","icon","disabled"])))),128))])),_:1},8,["modelValue"]),o(F,{class:"content",style:n(`transform: translateY(-${100*g.value}%)`)},{default:d((()=>[(s(!0),u(b,null,r(k.value,((l,e)=>(s(),i(A,{key:e,class:"category","scroll-y":"","scroll-with-animation":"","show-scrollbar":!1,"scroll-top":j.value,throttle:!1},{default:d((()=>[o(z,{title:l.title,border:""},{default:d((()=>[(s(!0),u(b,null,r(l.items,((l,e)=>(s(),i(q,{key:e,title:l.title,label:l.label},{default:d((()=>[o(C,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1032,["scroll-top"])))),128))])),_:1},8,["style"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-73c8bb46"]]);export{j as default};
