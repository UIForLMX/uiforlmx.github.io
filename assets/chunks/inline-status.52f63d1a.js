import{T as t,a as e}from"./base-gantt.51131bbb.js";import{d as u,C as n}from"./framework.3b97cefe.js";import{r as S}from"../app.19977dc1.js";import"./theme.e4c10142.js";const c=u({name:"InlineStatus",props:{data:{type:Object,default:()=>({})},name:{type:String,default:""},t:{type:Function,required:!0}},emits:["updateValue"],setup(a){const d={[t.TASKNEW]:"#3979f9",[t.TASKWAITRESOLVE]:"#c8e6c9",[t.TASKRESOLVING]:"#fff8dc",[t.TASKRESOLVED]:"#d0f0c0",[t.TASKWAITSTART]:"#ffd699",[t.TASKEXCUTE]:"#b3ffcc",[t.TASKAPPROVE]:"#e6e6fa",[t.TASKFINISHED]:"#d0f0c0",[t.TASKPAUSE]:"#d3d3d3",[t.TASKSTOP]:"#ffb6c1"};return()=>n("div",null,[n(S,{class:["inline-status",a.data.type==="project"&&"inline-status-project"],color:d[a.data[a.name]]},{default:()=>[e[a.data[a.name]]?a.t(e[a.data[a.name]]+""):"--"]})])}});export{c as default};