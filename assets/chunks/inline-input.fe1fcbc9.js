import{d as c,f as p,C as n,B as m}from"./framework.3b97cefe.js";import{q as f}from"../app.c2288951.js";import"./theme.e4c10142.js";const w=c({name:"InlineInput",props:{data:{type:Object,default:()=>({})},name:{type:String,default:""}},emits:["updateValue"],setup(t,{emit:o,attrs:u}){const a=p(t.data[t.name]),l=()=>{a.value!==t.data[t.name]&&o("updateValue",t.data.id,t.name,a.value)},d=e=>{e.stopPropagation()},r=e=>{e.stopPropagation()},i=e=>{e.stopPropagation()};return()=>{var e;return n("div",{onDblclick:d,onKeydown:r,onMousedown:i},[n(f,m({class:["inline-input",((e=t.data)==null?void 0:e.type)==="project"&&"inline-input-project"],value:a.value,"onUpdate:value":s=>a.value=s},u,{bordered:!0,"allow-clear":!0,"show-count":!0,onBlur:l}),null)])}}});export{w as default};