import{u as e,_ as l}from"./wd-message-box.9929ea82.js";import{d as a,r as o,o as u,c as t,w as n,a as d,b as s,h as m,j as i,i as r,g as c,af as p}from"./index-bc8b5b89.js";import{c as v,d as f,e as b,f as w,_ as h,a as g}from"./page-wraper.7cfd0783.js";import{_ as V}from"./wd-action-sheet.0c8767b5.js";import{_}from"./wd-input.c80fd337.js";import{_ as x}from"./wd-select-picker.8114ba63.js";import{_ as j}from"./wd-picker.078d399b.js";import{_ as k}from"./wd-cell-group.9d4af2cb.js";import{_ as C}from"./wd-datetime-picker.d345a305.js";import{a as U,_ as y}from"./area.b991b1b9.js";import{_ as I}from"./wd-input-number.5e06674c.js";import{_ as q}from"./wd-checkbox-group.0e40d2c9.js";import{_ as z}from"./wd-button.1dd168ec.js";import"./useTranslate.670742f3.js";import"./wd-search.9df476ca.js";import"./wd-radio-group.7a42089d.js";import"./useChildren.f02a69c0.js";import"./wd-picker-view.eed693f2.js";import"./wd-datetime-picker-view.060298a4.js";const N=g(a({__name:"Index",setup(a){const g=o(!1),N=o([]),O=o(""),S=o(!1),T=o([]),B=o([{value:"1",label:"京东"},{value:"2",label:"开普勒"},{value:"3",label:"手Q"},{value:"4",label:"微信"},{value:"5",label:"1号店"},{value:"6",label:"十元街"},{value:"7",label:"京东极速版"}]),D=o("1"),G=o([{value:"1",label:"满减"},{value:"2",label:"无门槛"}]),H=o(""),K=o(""),L=o(new Date),M=o([]),Q=o(1),A=o([Object.keys(U[86]).map((e=>({value:e,label:U[86][e]})))]),E=({selectedItem:e,resolve:l,finish:a})=>{U[e.value]?l(Object.keys(U[e.value]).map((l=>({value:l,label:U[e.value][l]})))):a()},F=o("");o(1);const J=o(!1),P=o(!0),R=o(""),W=o(""),X=v(),Y=e();function Z({value:e}){console.log(e),S.value=!1}function $({value:e}){console.log(e)}function ee({value:e}){console.log(e)}function le({value:e}){console.log(e)}function ae({value:e}){console.log(e)}function oe({value:e}){console.log(e)}function ue({value:e}){console.log(e)}function te({value:e}){console.log(e)}function ne({value:e}){J.value=e}function de({value:e}){console.log(e)}function se({value:e}){console.log(e)}function me(e){console.log(e),O.value?Y.alert("提交成功"):X.error("请填写优惠券名称")}function ie(){X.info("优惠券提示信息")}function re({value:e}){console.log(e)}return(e,a)=>{const o=m(i("wd-message-box"),l),v=m(i("wd-toast"),f),U=m(i("wd-action-sheet"),V),S=m(i("wd-input"),_),X=m(i("wd-select-picker"),x),Y=m(i("wd-picker"),j),ce=r,pe=m(i("wd-cell"),b),ve=m(i("wd-cell-group"),k),fe=m(i("wd-datetime-picker"),C),be=m(i("wd-col-picker"),y),we=m(i("wd-input-number"),I),he=m(i("wd-switch"),w),ge=c,Ve=m(i("wd-checkbox"),q),_e=m(i("wd-button"),z),xe=p,je=m(i("page-wraper"),h);return u(),t(je,{"show-dark-mode":""},{default:n((()=>[d(o),d(v),d(U,{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e),actions:N.value},null,8,["modelValue","actions"]),d(xe,{onSubmit:me},{default:n((()=>[d(ve,{"custom-class":"group",title:"基础信息",border:""},{default:n((()=>[d(S,{label:"优惠券名称","label-width":"100px",maxlength:20,"show-word-limit":"",name:"couponName",required:"","suffix-icon":"warn-bold",clearable:"",modelValue:O.value,"onUpdate:modelValue":a[1]||(a[1]=e=>O.value=e),placeholder:"请输入优惠券名称",onChange:Z,onClicksuffixicon:ie},null,8,["modelValue"]),d(X,{label:"推广平台","label-width":"100px",name:"platform",modelValue:T.value,"onUpdate:modelValue":a[2]||(a[2]=e=>T.value=e),columns:B.value,placeholder:"请选择推广平台",onConfirm:$},null,8,["modelValue","columns"]),d(Y,{label:"优惠方式","label-width":"100px",name:"promotion","align-right":"",modelValue:D.value,"onUpdate:modelValue":a[3]||(a[3]=e=>D.value=e),columns:G.value},null,8,["modelValue","columns"]),d(pe,{title:"券面额",required:"","title-width":"100px","custom-value-class":"cell-left"},{default:n((()=>[d(ce,{style:{"text-align":"left"}},{default:n((()=>[d(ce,{class:"inline-txt",style:{"margin-left":"0"}},{default:n((()=>[s("满")])),_:1}),d(S,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:H.value,"onUpdate:modelValue":a[4]||(a[4]=e=>H.value=e),name:"threshold",onChange:ee},null,8,["modelValue"]),d(ce,{class:"inline-txt"},{default:n((()=>[s("减")])),_:1}),d(S,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:K.value,"onUpdate:modelValue":a[5]||(a[5]=e=>K.value=e),name:"price",onChange:le},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(ve,{"custom-class":"group",title:"时间和地址",border:""},{default:n((()=>[d(fe,{label:"时间","label-width":"100px",name:"date",modelValue:L.value,"onUpdate:modelValue":a[6]||(a[6]=e=>L.value=e),onConfirm:re},null,8,["modelValue"]),d(be,{label:"地址","label-width":"100px",name:"address",modelValue:M.value,"onUpdate:modelValue":a[7]||(a[7]=e=>M.value=e),columns:A.value,"column-change":E,onConfirm:ae},null,8,["modelValue","columns"])])),_:1}),d(ve,{"custom-class":"group",title:"其他信息",border:""},{default:n((()=>[d(S,{label:"活动细则","label-width":"100px",type:"textarea",modelValue:F.value,"onUpdate:modelValue":a[8]||(a[8]=e=>F.value=e),maxlength:300,"show-word-limit":"",placeholder:"请输入活动细则信息",clearable:"",name:"content",onChange:oe},null,8,["modelValue"]),d(pe,{title:"发货数量",center:""},{default:n((()=>[d(we,{modelValue:Q.value,"onUpdate:modelValue":a[9]||(a[9]=e=>Q.value=e),name:"count",onChange:ue},null,8,["modelValue"])])),_:1}),d(pe,{title:"这里显示的是多文字标题包含非常的文字","title-width":"240px",center:""},{default:n((()=>[d(he,{modelValue:P.value,"onUpdate:modelValue":a[10]||(a[10]=e=>P.value=e),name:"switchVal",onChange:te},null,8,["modelValue"])])),_:1}),d(S,{label:"卡号","label-width":"100px",name:"cardId","suffix-icon":"camera",placeholder:"请输入卡号",clearable:"",modelValue:R.value,"onUpdate:modelValue":a[11]||(a[11]=e=>R.value=e),onChange:de},null,8,["modelValue"]),d(S,{label:"手机号","label-width":"100px",name:"phone",placeholder:"请输入手机号",clearable:"",modelValue:W.value,"onUpdate:modelValue":a[12]||(a[12]=e=>W.value=e),onChange:se},null,8,["modelValue"])])),_:1}),d(ce,{class:"tip"},{default:n((()=>[d(Ve,{modelValue:J.value,"onUpdate:modelValue":a[13]||(a[13]=e=>J.value=e),name:"read",onChange:ne,"custom-label-class":"label-class"},{default:n((()=>[s(" 已阅读并同意 "),d(ge,{style:{color:"#4d80f0"}},{default:n((()=>[s("《借款额度合同及相关授权》")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(ce,{class:"footer"},{default:n((()=>[d(_e,{block:"",round:"",size:"large"},{default:n((()=>[s("提交")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-4421693a"]]);export{N as default};