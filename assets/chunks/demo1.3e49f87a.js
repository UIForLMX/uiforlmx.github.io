import{c as m,d as f,a as p,m as v,r as h}from"./demoData.156037e1.js";import{d as b,f as n,aN as g,A as l,o as x,c as y,v as r,C as c,D,e as a}from"./framework.3b97cefe.js";const k={style:{position:"relative",overflow:"hidden",height:"600px","background-color":"#fff","border-radius":"8px"}},z=b({__name:"demo1",setup(C){const s=n(),t=g({columns:m,data:f,calendars:p}),d="PLM_PM_PROJECT_d9b82a9844e94d0b980e461a43007a87",e=n(!1),i=()=>{var o;e.value=!e.value,(o=s.value)==null||o.switchFullScreen(e.value)};return(o,E)=>{const u=l("h-icon"),_=l("h-b-base-gantt-editor");return x(),y("div",null,[r("div",{class:"full-icon",style:D({position:e.value?"fixed":"absolute",zIndex:e.value?2e3:10,marginTop:e.value?"-30px":"0"}),onClick:i},[c(u,{name:e.value?"hoteam-exit-full-screen":"hoteam-full-screen",size:"20"},null,8,["name"])],4),r("div",k,[c(_,{ref_key:"ganttEditorRef",ref:s,"initial-load":!1,calendars:a(t).calendars,columns:a(t).columns,data:a(t).data,"menus-array":a(v).items,"resources-data":a(h),"project-id":d},null,8,["calendars","columns","data","menus-array","resources-data"])])])}}});export{z as default};