import{g as e,z as a,A as s,i as l,h as d,p as t,b as i,a as o}from"./page-wraper.7cfd0783.js";import{d as n,v as r,h as u,j as m,o as c,c as b,w as p,z as f,p as v,a as g,ab as w,b as _,t as h,n as x,u as y,x as C,i as $}from"./index-bc8b5b89.js";import{_ as I}from"./wd-badge.ffec3106.js";import{u as S}from"./useChildren.f02a69c0.js";const j=Symbol("wd-sidebar"),V={...e,modelValue:a(0)},k=o(n({name:"wd-sidebar-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,label:s(String),value:s([Number,String]),badge:{type:[String,Number,null],default:null},badgeProps:Object,icon:String,isDot:Boolean,max:l(99),disabled:d(!1)},setup(e){const a=e,{parent:s}=t(j),l=r((()=>{let e=!1;return s&&s.props.modelValue===a.value&&(e=!0),e})),d=r((()=>{let e=!1;if(s){let l=s.children.findIndex((e=>e.value===s.props.modelValue));s.children.findIndex((e=>e.value===a.value))===l-1&&(e=!0)}return e})),o=r((()=>{let e=!1;if(s){let l=s.children.findIndex((e=>e.value===s.props.modelValue));s.children.findIndex((e=>e.value===a.value))===l+1&&(e=!0)}return e}));function n(){a.disabled||s&&s.setChange(a.value,a.label)}return(e,a)=>{const s=u(m("wd-icon"),i),t=u(m("wd-badge"),I),r=$;return c(),b(r,{onClick:n,class:x(`wd-sidebar-item ${y(l)?"wd-sidebar-item--active":""} ${y(d)?"wd-sidebar-item--prefix":""}  ${y(o)?"wd-sidebar-item--suffix":""} ${e.disabled?"wd-sidebar-item--disabled":""} ${e.customClass}`),style:C(e.customStyle)},{default:p((()=>[f(e.$slots,"icon",{},void 0,!0),!e.$slots.icon&&e.icon?(c(),b(s,{key:0,"custom-class":"wd-sidebar-item__icon",name:e.icon,size:"20px"},null,8,["name"])):v("",!0),g(t,w({"model-value":e.badge,"is-dot":e.isDot,max:e.max},e.badgeProps,{"custom-class":"wd-sidebar-item__badge"}),{default:p((()=>[_(h(e.label),1)])),_:1},16,["model-value","is-dot","max"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-a09fcd08"]]),z=o(n({name:"wd-sidebar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:V,emits:["change","update:modelValue"],setup(e,{emit:a}){const s=e,{linkChildren:l}=S(j);return l({props:s,setChange:function(e,s){a("update:modelValue",e),a("change",{value:e,label:s})}}),(e,a)=>{const s=$;return c(),b(s,{class:x(`wd-sidebar ${e.customClass}`),style:C(e.customStyle)},{default:p((()=>[f(e.$slots,"default",{},void 0,!0),g(s,{class:"wd-sidebar__padding"})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-b869d8c9"]]);export{k as _,z as a};
