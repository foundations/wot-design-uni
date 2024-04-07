import{d as e,r as a,q as l,v as u,m as s,o as t,c as d,w as n,n as i,b as o,t as r,p as v,a as c,x as m,u as w,y as h,i as b}from"./index-bc8b5b89.js";import{g as f,m as g,h as p,i as _,j as y,k as x,l as M,n as $,o as V,a as C}from"./page-wraper.7cfd0783.js";import{u as T}from"./useTouch.ceeba6e2.js";const k=C(e({name:"wd-slider",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...f,customMinClass:g(""),customMaxClass:g(""),hideMinMax:p(!1),hideLabel:p(!1),disabled:p(!1),inactiveColor:g("#e5e5e5"),activeColor:g(""),max:_(100),min:_(0),step:_(1),modelValue:{type:[Number,Array],default:0}},emits:["dragstart","dragmove","dragend","update:modelValue"],setup(e,{emit:f}){const g=e,p={startValue:0,deltaX:0,newValue:0},_=a(`sliderId${y()}`),C=T(),k=T(),j=a(!1),L=a("width: 0; height: 3px"),N=a("3px"),I=a(0),S=a(0),X=a(0),q=a(0),A=a(0),E=a(0),G=a(0),H=a(0),O=a(0),z=a(100),B=a(0),D=a(1);l((()=>g.max),(e=>{e<0?(z.value=100,console.warn("[wot design] warning(wd-slider): max value must be greater than 0")):e<=g.min?(z.value=g.min,B.value=e,console.warn("[wot design] warning(wd-slider): max value must be greater than min value")):z.value=e}),{deep:!0,immediate:!0}),l((()=>g.min),(e=>{e<0?(B.value=0,console.warn("[wot design] warning(wd-slider): min value must be greater than 0")):e>=g.max?(B.value=g.max,z.value=e,console.warn("[wot design] warning(wd-slider): min value must be less than max value")):B.value=e}),{deep:!0,immediate:!0}),l((()=>g.step),(e=>{e<=0&&(D.value=1,console.warn("[wot design] warning(wd-slider): step must be greater than 0"))}),{deep:!0,immediate:!0}),l((()=>g.modelValue),((e,a)=>{if(null==e?(f("update:modelValue",a),console.warn("[wot design] warning(wd-slider): value can nott be null or undefined")):M(e)&&2!==e.length?console.warn("[wot design] warning(wd-slider): value must be dyadic array"):$(e)||M(e)||(f("update:modelValue",a),console.warn("[wot design] warning(wd-slider): value must be dyadic array Or Number")),H.value=e,M(e)){if(a&&M(a)&&function(e,a){if(!V(e)||!V(a))return!1;let l=0;return e.forEach(((e,u)=>{e===a[u]&&l++})),2===l}(e,a))return;j.value=!0,q.value<=X.value?(ue(e[0]),le(e[1])):(ue(e[1]),le(e[0]))}else{if(e===a)return;ue(e)}}),{deep:!0,immediate:!0});const{proxy:F}=h(),J=u((()=>`wd-slider ${g.hideLabel?"":"wd-slider__has-label"} ${g.disabled?"wd-slider--disabled":""} ${g.customClass}`)),K=u((()=>""+(g.inactiveColor?"background:"+g.inactiveColor:""))),P=u((()=>`${L.value};${g.activeColor?"background:"+g.activeColor:""}`)),Q=u((()=>`left: ${q.value}%; visibility: ${g.disabled?"hidden":"show"};`)),R=u((()=>`left: ${X.value}%; visibility: ${g.disabled?"hidden":"show"}`));function U(e){const{disabled:a,modelValue:l}=g;a||(C.touchStart(e),G.value=M(l)?q.value<X.value?te(l[0]):te(l[1]):te(l),f("dragstart",{value:H.value}))}function W(e){const{disabled:a}=g;if(a)return;C.touchMove(e);const l=C.deltaX.value/A.value*(z.value-B.value);O.value=G.value+l,ue(O.value),f("dragmove",{value:H.value})}function Y(){g.disabled||f("dragend",{value:H.value})}function Z(e){if(g.disabled)return;const{modelValue:a}=g;k.touchStart(e),p.startValue=q.value<X.value?te(a[1]):te(a[0]),f("dragstart",{value:H.value})}function ee(e){if(g.disabled)return;k.touchMove(e);const a=k.deltaX.value/A.value*(z.value-B.value);p.newValue=te(p.startValue+a),le(p.newValue),f("dragmove",{value:H.value})}function ae(){g.disabled||f("dragend",{value:H.value})}function le(e){e=te(e),S.value=e,f("update:modelValue",[Math.min(I.value,S.value),Math.max(I.value,S.value)]),X.value=de(e),se()}function ue(e){const a=de(e=te(e));j.value?(I.value=e,q.value=a,f("update:modelValue",[Math.min(I.value,S.value),Math.max(I.value,S.value)]),se()):(f("update:modelValue",e),I.value=e,q.value=a,L.value=`width: ${a}%; height: ${N.value};`)}function se(){const e=q.value<X.value?[q.value,X.value]:[X.value,q.value],a=`width: ${e[1]-e[0]}%; height: ${N.value}; left: ${e[0]}%`;H.value=I.value<S.value?[I.value,S.value]:[S.value,I.value],L.value=a}function te(e){return Math.round(Math.max(B.value,Math.min(e,z.value))/D.value)*D.value}function de(e){return(e-B.value)/(z.value-B.value)*100}return s((()=>{x(`#${_.value}`,!1,F).then((e=>{A.value=Number(e.width),E.value=Number(e.left)}))})),(e,a)=>{const l=b;return t(),d(l,{class:i(w(J)),style:m(e.customStyle),id:_.value},{default:n((()=>[e.hideMinMax?v("",!0):(t(),d(l,{key:0,class:i(`wd-slider__label-min ${e.customMinClass}`)},{default:n((()=>[o(r(B.value),1)])),_:1},8,["class"])),c(l,{class:"wd-slider__bar-wrapper",style:m(w(K))},{default:n((()=>[c(l,{class:"wd-slider__bar",style:m(w(P))},null,8,["style"]),c(l,{class:"wd-slider__button-wrapper",style:m(w(Q)),onTouchstart:U,onTouchmove:W,onTouchend:Y,onTouchcancel:Y},{default:n((()=>[e.hideLabel?v("",!0):(t(),d(l,{key:0,class:"wd-slider__label"},{default:n((()=>[o(r(I.value),1)])),_:1})),c(l,{class:"wd-slider__button"})])),_:1},8,["style"]),j.value?(t(),d(l,{key:0,class:"wd-slider__button-wrapper",style:m(w(R)),onTouchstart:Z,onTouchmove:ee,onTouchend:ae,onTouchcancel:ae},{default:n((()=>[e.hideLabel?v("",!0):(t(),d(l,{key:0,class:"wd-slider__label"},{default:n((()=>[o(r(S.value),1)])),_:1})),c(l,{class:"wd-slider__button"})])),_:1},8,["style"])):v("",!0)])),_:1},8,["style"]),e.hideMinMax?v("",!0):(t(),d(l,{key:1,class:i(`wd-slider__label-max ${e.customMaxClass}`)},{default:n((()=>[o(r(z.value),1)])),_:1},8,["class"]))])),_:1},8,["class","style","id"])}}}),[["__scopeId","data-v-852903e6"]]);export{k as _};