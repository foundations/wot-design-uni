import{u as l,_ as e}from"./wd-message-box.9929ea82.js";import{d as t,r as i,o,c as s,w as a,a as n,b as f,h as u,j as c}from"./index-bc8b5b89.js";import{c as r,d,_ as m}from"./page-wraper.7cfd0783.js";import{_ as g}from"./wd-upload.60cd66fc.js";import{_ as h}from"./demo-block.cc9b58b1.js";import{_ as p}from"./wd-button.1dd168ec.js";import"./wd-input.c80fd337.js";import"./useTranslate.670742f3.js";const v=t({__name:"Index",setup(t){const v="https://ftf.jd.com/api/uploadImg",_=i([{url:"https://img.yzcdn.cn/vant/cat.jpeg"}]),w=i([{url:"https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg"}]),b=i([]),j=i([]),L=i([]),C=i([]),x=i([]),k=i([]),y=i([]),z=i([]);i([]);const F=l(),I=r(),P=({file:l,resolve:e})=>{F.confirm({msg:"是否选择",title:"提示"}).then((()=>{e(!0)})).catch((()=>{I.show("取消选择操作")}))},E=({resolve:l})=>{F.confirm({msg:"是否预览图片",title:"提示"}).then((()=>{l(!0)})).catch((()=>{I.show("取消预览操作")}))},S=({files:l,resolve:e})=>{F.confirm({msg:"是否上传",title:"提示"}).then((()=>{console.log(l,"files"),e(!0)})).catch((()=>{I.show("取消上传操作")}))},T=({file:l,fileList:e,resolve:t})=>{F.confirm({msg:"是否删除",title:"提示"}).then((()=>{I.success("删除成功"),t(!0)})).catch((()=>{I.show("取消删除操作")}))};function q(l){console.log("成功",l)}function A(l){console.log("失败",l)}function B(l){console.log("加载中",l)}function D({fileList:l}){_.value=l}function G({fileList:l}){w.value=l}function H({fileList:l}){b.value=l}function J({fileList:l}){j.value=l}function K({fileList:l}){L.value=l}function M({fileList:l}){C.value=l}function N({fileList:l}){x.value=l}function O({fileList:l}){k.value=l}function Q({fileList:l}){y.value=l}function R({fileList:l}){z.value=l}return(l,t)=>{const i=u(c("wd-message-box"),e),r=u(c("wd-toast"),d),F=u(c("wd-upload"),g),I=u(c("demo-block"),h),U=u(c("wd-button"),p),V=u(c("page-wraper"),m);return o(),s(V,null,{default:a((()=>[n(i),n(r,{id:"wd-toast"}),n(I,{title:"基本用法"},{default:a((()=>[n(F,{"file-list":_.value,"image-mode":"aspectFill",action:v,onChange:D},null,8,["file-list"])])),_:1}),n(I,{title:"多选上传"},{default:a((()=>[n(F,{"file-list":w.value,multiple:"",action:v,onChange:G},null,8,["file-list"])])),_:1}),n(I,{title:"最大上传数限制"},{default:a((()=>[n(F,{"file-list":b.value,limit:3,action:v,onChange:H},null,8,["file-list"])])),_:1}),n(I,{title:"拦截预览图片操作"},{default:a((()=>[n(F,{"file-list":j.value,action:v,onChange:J,"before-preview":E},null,8,["file-list"])])),_:1}),n(I,{title:"上传前置处理"},{default:a((()=>[n(F,{"file-list":L.value,action:v,onChange:K,"before-upload":S},null,8,["file-list"])])),_:1}),n(I,{title:"移除图片前置处理"},{default:a((()=>[n(F,{"file-list":C.value,action:v,onChange:M,"before-remove":T},null,8,["file-list"])])),_:1}),n(I,{title:"上传状态钩子"},{default:a((()=>[n(F,{"file-list":x.value,action:v,onChange:N,onSuccess:q,onFail:A,onProgress:B},null,8,["file-list"])])),_:1}),n(I,{title:"禁用"},{default:a((()=>[n(F,{"file-list":k.value,disabled:"",action:v,onChange:O},null,8,["file-list"])])),_:1}),n(I,{title:"自定义唤起上传样式"},{default:a((()=>[n(F,{"file-list":y.value,action:v,onChange:Q,"use-default-slot":""},{default:a((()=>[n(U,null,{default:a((()=>[f("自定义唤起样式")])),_:1})])),_:1},8,["file-list"])])),_:1}),n(I,{title:"选择文件前置处理"},{default:a((()=>[n(F,{"file-list":z.value,action:v,onChange:R,"before-choose":P},null,8,["file-list"])])),_:1})])),_:1})}}});export{v as default};