import{c as e,d as l,_ as a}from"./page-wraper.7cfd0783.js";import{d as o,r as n,o as u,c as t,w as d,a as r,h as m,j as i}from"./index-bc8b5b89.js";import{_ as s}from"./wd-datetime-picker.d345a305.js";import{_ as f}from"./wd-cell-group.9d4af2cb.js";import{_ as c}from"./demo-block.cc9b58b1.js";import"./wd-datetime-picker-view.060298a4.js";import"./wd-picker-view.eed693f2.js";import"./useTranslate.670742f3.js";import"./useChildren.f02a69c0.js";const v=o({__name:"Index",setup(o){n("date");const v=n(""),p=n(Date.now()),V=n(Date.now()),b=n("09:20"),w=n(Date.now()),g=n(Date.now()),C=n(Date.now()),U=n(Date.now()),D=n(Date.now()),_=n(Date.now()),j=n(""),$=n(""),h=n(Date.now()),k=n(["",""]),y=n(["",Date.now()]);n([Date.now()-864e5,Date.now()]),n(!1);const x=(e,l)=>{switch(e){case"year":return l+"年";case"month":return l+"月";case"date":return l+"日";case"hour":return l+"时";case"minute":return l+"分";default:return l}},T=(e,l)=>"minute"===e?l.filter((e=>e%5==0)):l,q=e=>`${e[0].label}年${e[1].label}月${e[2].label}日 ${e[3].label}:${e[4].label}`,L=e(),z=(e,l,a)=>{a.setLoading(!0),setTimeout((()=>{a.setLoading(!1),e>Date.now()?(l(!1),L.error("不能选择大于今天的日期")):l(!0)}),2e3)},H=e=>`${e[0].label}年${e[1].label}月${e[2].label}日 ${e[3].label}:${e[4].label}`;function I({value:e}){console.log(new Date(e))}function S({value:e}){console.log(e)}function A({value:e}){console.log(e)}function B({value:e}){console.log(e)}function E({value:e}){console.log(e)}function F({value:e}){console.log(e)}function G({value:e}){console.log(e)}function J({value:e}){console.log(e)}function K({value:e}){console.log(e)}function M({value:e}){console.log(e)}function N({value:e}){console.log(e)}function O({value:e}){console.log(e)}function P({value:e}){console.log(e)}function Q({value:e}){console.log(e)}function R({value:e}){console.log(e)}return(e,o)=>{const n=m(i("wd-toast"),l),L=m(i("wd-datetime-picker"),s),W=m(i("wd-cell-group"),f),X=m(i("demo-block"),c),Y=m(i("page-wraper"),a);return u(),t(Y,null,{default:d((()=>[r(n),r(X,{transparent:""},{default:d((()=>[r(W,{border:""},{default:d((()=>[r(L,{label:"日期选择",modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),onConfirm:I},null,8,["modelValue"]),r(L,{label:"年月日",modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=e=>p.value=e),type:"date",onConfirm:S},null,8,["modelValue"]),r(L,{label:"年月",modelValue:V.value,"onUpdate:modelValue":o[2]||(o[2]=e=>V.value=e),type:"year-month",onConfirm:A},null,8,["modelValue"]),r(L,{label:"时分",modelValue:b.value,"onUpdate:modelValue":o[3]||(o[3]=e=>b.value=e),type:"time",onConfirm:B},null,8,["modelValue"]),r(L,{label:"展示格式",modelValue:w.value,"onUpdate:modelValue":o[4]||(o[4]=e=>w.value=e),"display-format":q,onConfirm:E},null,8,["modelValue"]),r(L,{label:"内部格式",modelValue:g.value,"onUpdate:modelValue":o[5]||(o[5]=e=>g.value=e),formatter:x,onConfirm:F},null,8,["modelValue"]),r(L,{label:"过滤选项",modelValue:C.value,"onUpdate:modelValue":o[6]||(o[6]=e=>C.value=e),filter:T,onConfirm:G},null,8,["modelValue"]),r(L,{label:"before-confirm",modelValue:U.value,"onUpdate:modelValue":o[7]||(o[7]=e=>U.value=e),"before-confirm":z,onConfirm:J},null,8,["modelValue"]),r(L,{label:"错误",modelValue:D.value,"onUpdate:modelValue":o[8]||(o[8]=e=>D.value=e),error:"",onConfirm:K},null,8,["modelValue"]),r(L,{label:"必填",modelValue:_.value,"onUpdate:modelValue":o[9]||(o[9]=e=>_.value=e),required:"",onConfirm:M},null,8,["modelValue"]),r(L,{label:"默认日期",modelValue:p.value,"onUpdate:modelValue":o[10]||(o[10]=e=>p.value=e),"default-value":p.value},null,8,["modelValue","default-value"])])),_:1})])),_:1}),r(X,{title:"label 不传",transparent:""},{default:d((()=>[r(L,{modelValue:j.value,"onUpdate:modelValue":o[11]||(o[11]=e=>j.value=e),onConfirm:N},null,8,["modelValue"])])),_:1}),r(X,{title:"大小",transparent:""},{default:d((()=>[r(L,{label:"日期选择",size:"large",modelValue:$.value,"onUpdate:modelValue":o[12]||(o[12]=e=>$.value=e),onConfirm:O},null,8,["modelValue"])])),_:1}),r(X,{title:"值靠右展示",transparent:""},{default:d((()=>[r(L,{label:"日期选择","align-right":"",modelValue:h.value,"onUpdate:modelValue":o[13]||(o[13]=e=>h.value=e),onConfirm:P},null,8,["modelValue"])])),_:1}),r(X,{title:"区域选择",transparent:""},{default:d((()=>[r(L,{label:"日期选择",title:"请选择区间",modelValue:k.value,"onUpdate:modelValue":o[14]||(o[14]=e=>k.value=e),onConfirm:Q},null,8,["modelValue"])])),_:1}),r(X,{title:"范围tab展示格式",transparent:""},{default:d((()=>[r(L,{label:"日期选择",modelValue:y.value,"onUpdate:modelValue":o[15]||(o[15]=e=>y.value=e),onConfirm:R,"display-format-tab-label":H},null,8,["modelValue"])])),_:1})])),_:1})}}});export{v as default};