import{a as u,d as c,m as e,u as o,p as t,F as i,a7 as _,R as h,aR as p,l as n,T as r}from"./chunks/framework.BIX653lx.js";const l=u();function m(){return c(async()=>{if(l.value)return;const a=await(await fetch("https://historysoa.oss-cn-hongkong.aliyuncs.com/sponsors/wot-design-uni.json")).json();l.value=a}),{data:l}}const f=p("",4),b={key:0},g=t("thead",null,[t("tr",null,[t("th",null,"捐赠者"),t("th",null,"留言"),t("th",null,"链接")])],-1),k=t("p",null,"🍻🍻🍻 再次感谢各位捐赠者的支持，也欢迎大家提出自己的意见和建议。🍻🍻🍻",-1),w=JSON.parse('{"title":"榜上有名","description":"","frontmatter":{},"headers":[],"relativePath":"reward/donor.md","filePath":"reward/donor.md","lastUpdated":1712484804000}'),T={name:"reward/donor.md"},y=Object.assign(T,{setup(d){const{data:a}=m();return(P,S)=>(n(),e("div",null,[f,o(a)&&o(a).donor?(n(),e("table",b,[g,t("tbody",null,[(n(!0),e(i,null,_(o(a).donor,(s,q)=>(n(),e("tr",null,[t("td",null,r(s.name),1),t("td",null,r(s.message),1),t("td",null,r(s.link),1)]))),256))])])):h("",!0),k]))}});export{w as __pageData,y as default};
