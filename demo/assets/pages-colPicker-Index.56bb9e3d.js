import{c as l,d as e,_ as a}from"./page-wraper.7cfd0783.js";import{d as u,r as o,o as n,c as m,w as t,a as d,b as s,t as c,h as r,j as v,i as p}from"./index-bc8b5b89.js";import{a as i,_ as V}from"./area.b991b1b9.js";import{_ as b}from"./wd-cell-group.9d4af2cb.js";import{_ as g}from"./demo-block.cc9b58b1.js";import{_ as f}from"./wd-button.1dd168ec.js";import"./wd-action-sheet.0c8767b5.js";import"./useTranslate.670742f3.js";import"./useChildren.f02a69c0.js";const h=u({__name:"Index",setup(u){const h=o([]),j=o(["150000","150100","150121"]),_=o(["130000","130200","130204"]),U=o([]),y=o([]),k=o(["130000","130200","130204"]),w=o([]),O=o([]),x=o([]),I=o([]),C=o([]),q=o([]),M=o([]),T=o([]),z=o([]),G=o(""),S=o([Object.keys(i[86]).map((l=>({value:l,label:i[86][l]})))]),A=o([]),B=o([Object.keys(i[86]).map((l=>({value:l,label:i[86][l]}))),Object.keys(i[13e4]).map((l=>({value:l,label:i[13e4][l]}))),Object.keys(i[130200]).map((l=>({value:l,label:i[130200][l]})))]),D=o([Object.keys(i[86]).map((l=>({value:l,label:i[86][l],disabled:"140000"===l})))]),E=o([Object.keys(i[86]).map((l=>({value:l,label:i[86][l],disabled:"140000"===l,tip:"140000"===l?"该地区无货，暂时无法选择":"150000"===l?"该地区配送时间可能较长":""})))]),F=l(),H=({selectedItem:l,resolve:e,finish:a,index:u})=>{const o=-1===u?86:l.value;i[o]?e(Object.keys(i[o]).map((l=>({value:l,label:i[o][l]})))):a()},J=({selectedItem:l,resolve:e,finish:a})=>{setTimeout((()=>{if(Math.random()>.7)return a(!1),void F.error("数据请求失败，请重试");i[l.value]?e(Object.keys(i[l.value]).map((e=>({value:e,label:i[l.value][e]})))):a()}),300)},K=l=>l[l.length-2].label+"-"+l[l.length-1].label,L=(l,e,a)=>{parseInt(String(l[2]))>12e4?(F.error("该地区库存不足"),a(!1)):a(!0)};function N({selectedItems:l}){G.value=l.map((l=>l.label)).join("")}function P({value:l}){console.log(l)}return(l,u)=>{const o=r(v("wd-toast"),e),i=r(v("wd-col-picker"),V),F=r(v("wd-cell-group"),b),Q=p,R=r(v("demo-block"),g),W=r(v("wd-button"),f),X=r(v("page-wraper"),a);return n(),m(X,null,{default:t((()=>[d(o),d(Q,{style:{margin:"20px 0"}},{default:t((()=>[d(F,{border:""},{default:t((()=>[d(i,{label:"选择地址",modelValue:h.value,"onUpdate:modelValue":u[0]||(u[0]=l=>h.value=l),columns:S.value,"column-change":H,onConfirm:P},null,8,["modelValue","columns"]),d(i,{label:"初始选项",modelValue:j.value,"onUpdate:modelValue":u[1]||(u[1]=l=>j.value=l),columns:A.value,"column-change":H,"auto-complete":""},null,8,["modelValue","columns"]),d(i,{label:"禁用",disabled:"",modelValue:_.value,"onUpdate:modelValue":u[2]||(u[2]=l=>_.value=l),columns:B.value,"column-change":H},null,8,["modelValue","columns"]),d(i,{label:"只读",readonly:"",modelValue:_.value,"onUpdate:modelValue":u[3]||(u[3]=l=>_.value=l),columns:B.value,"column-change":H},null,8,["modelValue","columns"]),d(i,{label:"禁用选项",modelValue:U.value,"onUpdate:modelValue":u[4]||(u[4]=l=>U.value=l),columns:D.value,"column-change":H},null,8,["modelValue","columns"]),d(i,{label:"选项提示信息",modelValue:y.value,"onUpdate:modelValue":u[5]||(u[5]=l=>y.value=l),columns:E.value,"column-change":H},null,8,["modelValue","columns"]),d(i,{label:"展示格式化",modelValue:k.value,"onUpdate:modelValue":u[6]||(u[6]=l=>k.value=l),columns:B.value,"column-change":H,"display-format":K},null,8,["modelValue","columns"]),d(i,{label:"标题",modelValue:w.value,"onUpdate:modelValue":u[7]||(u[7]=l=>w.value=l),title:"选择地址",columns:S.value,"column-change":H},null,8,["modelValue","columns"]),d(i,{label:"before-confirm",modelValue:O.value,"onUpdate:modelValue":u[8]||(u[8]=l=>O.value=l),columns:S.value,"column-change":H,"before-confirm":L},null,8,["modelValue","columns"]),d(i,{label:"错误",error:"",modelValue:x.value,"onUpdate:modelValue":u[9]||(u[9]=l=>x.value=l),columns:S.value,"column-change":H},null,8,["modelValue","columns"]),d(i,{label:"必填",required:"",modelValue:I.value,"onUpdate:modelValue":u[10]||(u[10]=l=>I.value=l),columns:S.value,"column-change":H},null,8,["modelValue","columns"])])),_:1})])),_:1}),d(R,{title:"一般column-change是个异步获取数据的操作，触发column-change组件会有默认loading，数据响应后关闭loading",transparent:""},{default:t((()=>[d(i,{label:"选择地址",modelValue:C.value,"onUpdate:modelValue":u[11]||(u[11]=l=>C.value=l),columns:S.value,"column-change":J},null,8,["modelValue","columns"])])),_:1}),d(R,{title:"label不传",transparent:""},{default:t((()=>[d(i,{modelValue:q.value,"onUpdate:modelValue":u[12]||(u[12]=l=>q.value=l),columns:S.value,"column-change":H},null,8,["modelValue","columns"])])),_:1}),d(R,{title:"大小",transparent:""},{default:t((()=>[d(i,{label:"选择地址",modelValue:M.value,"onUpdate:modelValue":u[13]||(u[13]=l=>M.value=l),size:"large",columns:S.value,"column-change":H},null,8,["modelValue","columns"])])),_:1}),d(R,{title:"值靠右展示",transparent:""},{default:t((()=>[d(i,{label:"选择地址","align-right":"",modelValue:T.value,"onUpdate:modelValue":u[14]||(u[14]=l=>T.value=l),columns:S.value,"column-change":H},null,8,["modelValue","columns"])])),_:1}),d(R,{title:"自定义选择器",transparent:""},{default:t((()=>[d(Q,{style:{"margin-left":"15px"}},{default:t((()=>[d(Q,{style:{"margin-bottom":"10px"}},{default:t((()=>[s("当前选中项: "+c(G.value),1)])),_:1}),d(i,{modelValue:z.value,"onUpdate:modelValue":u[15]||(u[15]=l=>z.value=l),"use-default-slot":"",columns:S.value,"column-change":H,style:{display:"inline-block"},onConfirm:N},{default:t((()=>[d(W,null,{default:t((()=>[s("选择地址")])),_:1})])),_:1},8,["modelValue","columns"])])),_:1})])),_:1})])),_:1})}}});export{h as default};