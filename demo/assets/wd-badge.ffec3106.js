import{d as s,r as e,q as a,v as t,o,c as l,w as r,z as d,u,n,x as i,b as m,t as p,p as c,i as b}from"./index-bc8b5b89.js";import{g,h as f,m as y,a as N}from"./page-wraper.7cfd0783.js";const h=N(s({name:"wd-badge",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...g,modelValue:{type:[Number,String,null],default:null},showZero:f(!1),bgColor:String,max:Number,isDot:Boolean,hidden:Boolean,type:y(void 0),top:Number,right:Number},setup(s){const g=s,f=e(null);a([()=>g.modelValue,()=>g.max,()=>g.isDot],(()=>{!function(){if(g.isDot)return;let s=g.modelValue;const e=g.max;s&&e&&"number"==typeof s&&!Number.isNaN(s)&&!Number.isNaN(e)&&(s=e<s?`${e}+`:s);f.value=s}()}),{immediate:!0,deep:!0});const y=t((()=>`background-color: ${g.bgColor};top:${g.top||0}px;right:${g.right||0}px`)),N=t((()=>{let s=!1;return!g.hidden&&(f.value||0===f.value&&g.showZero||g.isDot)&&(s=!0),s}));return(s,e)=>{const a=b;return o(),l(a,{class:n(["wd-badge",s.customClass]),style:i(s.customStyle)},{default:r((()=>[d(s.$slots,"default",{},void 0,!0),u(N)?(o(),l(a,{key:0,class:n(["wd-badge__content","is-fixed",s.type?"wd-badge__content--"+s.type:"",s.isDot?"is-dot":""]),style:i(u(y))},{default:r((()=>[m(p(f.value),1)])),_:1},8,["class","style"])):c("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-40df7a14"]]);export{h as _};
