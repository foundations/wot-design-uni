import{d as e,r as a,o as l,c as t,w as o,a as n,b as u,t as s,u as d,A as r,h as c,j as i,i as p,g as m}from"./index-bc8b5b89.js";import{c as f,d as _,b as v,_ as V,a as h}from"./page-wraper.7cfd0783.js";import{_ as w}from"./wd-search.9df476ca.js";import{_ as x}from"./demo-block.cc9b58b1.js";import{_ as g}from"./wd-popover.cb2e6b57.js";import{u as j}from"./clickoutside.5ec67e1b.js";import"./useTranslate.670742f3.js";import"./usePopover.f600fe30.js";const k=h(e({__name:"Index",setup(e){const{closeOutside:h}=j();f();const k=a(!1),U=a(""),b=a("初始文案"),C=a(""),y=a(""),I=a(""),z=a("全部"),A=a([{content:"全部"},{content:"订单号"},{content:"退款单号"}]);function M(e){r({title:"搜索"+e.value})}function O(){r({title:"清空"})}function P(){r({title:"取消"})}function S(e){console.log(e.value)}function T({item:e,index:a}){}return(e,a)=>{const r=c(i("wd-toast"),_),f=c(i("wd-search"),w),j=c(i("demo-block"),x),q=p,B=m,D=c(i("wd-icon"),v),E=c(i("wd-popover"),g),F=c(i("page-wraper"),V);return l(),t(q,{onClick:d(h)},{default:o((()=>[n(r),n(F,null,{default:o((()=>[n(j,{title:"基本用法",transparent:""},{default:o((()=>[n(f,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),onSearch:M,onChange:S,onCancel:P,onClear:O},null,8,["modelValue"])])),_:1}),n(j,{title:"白色输入框",transparent:""},{default:o((()=>[n(f,{light:""})])),_:1}),n(j,{title:"搜索占位符居左",transparent:""},{default:o((()=>[n(f,{"placeholder-left":""})])),_:1}),n(j,{title:"禁用且隐藏取消按钮",transparent:""},{default:o((()=>[n(f,{disabled:"","hide-cancel":""})])),_:1}),n(q,{style:{margin:"15px 0",color:"#666"}},{default:o((()=>[n(q,{style:{padding:"0 15px",margin:"10px 0","font-size":"13px"}},{default:o((()=>[u("自定义左侧插槽")])),_:1}),n(f,{modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=e=>C.value=e)},{prefix:o((()=>[n(E,{modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=e=>k.value=e),mode:"menu",content:A.value,onMenuclick:T},{default:o((()=>[n(q,{class:"search-type"},{default:o((()=>[n(B,null,{default:o((()=>[u(s(z.value),1)])),_:1}),n(D,{class:"icon-arrow",name:"fill-arrow-down"})])),_:1})])),_:1},8,["modelValue","content"])])),_:1},8,["modelValue"])])),_:1}),n(j,{title:"自定义右侧文案",transparent:""},{default:o((()=>[n(f,{placeholder:"请输入订单号/订单名称","cancel-txt":"搜索"})])),_:1}),n(j,{title:"设置最大长度",transparent:""},{default:o((()=>[n(f,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),maxlength:4},null,8,["modelValue"])])),_:1}),n(j,{title:"清空后自动聚焦",transparent:""},{default:o((()=>[n(f,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=e=>y.value=e),"focus-when-clear":""},null,8,["modelValue"])])),_:1}),n(j,{title:"自动聚焦",transparent:""},{default:o((()=>[n(f,{modelValue:I.value,"onUpdate:modelValue":a[5]||(a[5]=e=>I.value=e),focus:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["onClick"])}}}),[["__scopeId","data-v-cef44379"]]);export{k as default};
