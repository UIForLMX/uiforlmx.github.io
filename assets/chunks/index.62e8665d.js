import{l as xe,u as Pe,B as Oe,c as G}from"./base-gantt.8aed563e.js";import{e as Me,z as Re,u as He,F as Ue,C as Ve,S as We,i as $e,a as qe}from"./filter-drawer.c56c4458.js";import{ay as L,az as z,d as B,a7 as pe,a3 as O,C as o,F as Ke,f as g,a0 as Ie,U as Ye,h as x,k as Qe,ai as Ze,B as Je,w as Xe,V as et,Q as tt}from"./framework.3b97cefe.js";import{d as F,s as S,a as de,u as ue,b as at,c as _,e as nt,f as le,g as ot}from"../app.94690059.js";import"./theme.e4c10142.js";const st={initialLoad:{type:Boolean,default:!0},calendarsApi:{type:Object,default:()=>({})},configApi:{type:Object,default:()=>({})},dataSourceApi:{type:Object,default:()=>({})},saveColumnsApi:{type:Object,default:()=>({})},columnConfig:{type:Object,default:()=>({})},templates:{type:Object,default:()=>({})},durationUnit:{type:String,default:"day",required:!0},projectId:{type:String,required:!0,default:""},planId:{type:String,default:""},foucsKey:{type:String,default:"FOCUSON"},disabledKey:{type:String,default:"DISABLED"},showGantt:{type:Boolean,default:!1},showExpandAll:{type:Boolean,default:!0},showCollapseAll:{type:Boolean,default:!0},showExpandOne:{type:Boolean,default:!0},showExpandTwo:{type:Boolean,default:!0},showExpandThree:{type:Boolean,default:!0},showRefresh:{type:Boolean,default:!0},showFilterDrawer:{type:Boolean,default:!0},specialHandleFilterParams:{type:Array,default:()=>[]},showGanttChart:{type:Boolean,default:!0},showToday:{type:Boolean,default:!0},showFreeze:{type:Boolean,default:!0},showCriticalPath:{type:Boolean,default:!0},showSearch:{type:Boolean,default:!0},nameKey:{type:String,default:"ENAME"},showNameLink:{type:Boolean,default:!1},searchDropdown:{type:Object,default:()=>({activeSearchKey:"ENAME"})},showColumnsSetting:{type:Boolean,default:!0},showMaxMin:{type:Boolean,default:!0},showTooltip:{type:Boolean,default:!0}},lt=[{id:"l001",showFlag:"showExpandAll",iconName:"wbs-fold-all",size:17,className:"gantt-viewer-toolbar-item",handleMethod:"expandAll",placement:"bottom",title:"project.plan.wbs.expandAll"},{id:"l002",showFlag:"showCollapseAll",iconName:"wbs-expand-all",size:17,className:"gantt-viewer-toolbar-item",handleMethod:"collapseAll",placement:"bottom",title:"project.plan.wbs.collapseAll"},{id:"l003",showFlag:"showExpandOne",iconName:"wbs-show-level-one",size:17,className:"gantt-viewer-toolbar-item",handleMethod:"expandCurrentLevel",handleParams:[1],placement:"bottom",title:"project.wbsEditor.menu.showLevelone"},{id:"l004",showFlag:"showExpandTwo",iconName:"wbs-show-level-two",size:17,className:"gantt-viewer-toolbar-item",handleMethod:"expandCurrentLevel",handleParams:[2],placement:"bottom",title:"project.wbsEditor.menu.showLeveltwo"},{id:"l005",showFlag:"showExpandThree",iconName:"wbs-show-level-three",size:17,className:"gantt-viewer-toolbar-item",handleMethod:"expandCurrentLevel",handleParams:[3],placement:"bottom",title:"project.wbsEditor.menu.showLevelthree"}],rt=[{id:"r001",showFlag:"showRefresh",iconName:"hoteam-refresh-righ",size:18,className:"header-content-icon",handleMethod:"queryGanttData",placement:"bottom",title:"project.wbsEditor.refresh"},{id:"r002",showFlag:"showFilterDrawer",iconName:"wbs-filter",size:17,className:"header-content-icon",handleMethod:"openFilterDrawer",placement:"bottom",title:"project.wbsEditor.filterPlan"},{id:"r003",showFlag:"showGanttChart",iconName:"wbs-show-chart",size:17,className:"header-content-icon",handleMethod:"showHideGanttChart",placement:"bottom",handleTitleMethod:"showHideGanttChartTitle"},{id:"r004",showFlag:"showToday",iconName:"wbs-project-schedule",size:17,className:"header-content-icon",handleMethod:"toggleTodayTimeLine",placement:"bottom",title:"project.wbsEditor.todayLine"},{id:"r005",showFlag:"showFreeze",iconName:"wbs-freeze-column",size:17,className:"header-content-icon",handleMethod:"openFreezeColumns",placement:"bottom",title:"project.wbsEditor.menu.FreezeColumn"},{id:"r006",showFlag:"showFreeze",iconName:"wbs-cancel-freeze-column",size:17,className:"header-content-icon",handleMethod:"cancelFreezeColumns",placement:"bottom",title:"project.wbsEditor.menu.CancelFreezeColumn"},{id:"r007",showFlag:"showCriticalPath",iconName:"wbs-show-path",size:17,className:"header-content-icon",handleMethod:"showHideCriticalPath",placement:"bottom",handleTitleMethod:"showCriticalPathTitle"},{id:"r007",showFlag:"showSearch",iconName:"wbs-search",size:18,className:"header-content-icon",handleMethod:"openSearch",placement:"bottom",title:"project.wbsEditor.menu.Search"}],re={progress:L(()=>z(()=>import("./inline-progress-viewer.a6bb7f3f.js"),["assets/chunks/inline-progress-viewer.a6bb7f3f.js","assets/chunks/framework.3b97cefe.js","assets/app.94690059.js","assets/chunks/theme.e4c10142.js"])),badge:L(()=>z(()=>import("./inline-badge-viewer.c512e4e0.js"),["assets/chunks/inline-badge-viewer.c512e4e0.js","assets/app.94690059.js","assets/chunks/framework.3b97cefe.js","assets/chunks/theme.e4c10142.js"])),avatar:L(()=>z(()=>import("./inline-avatar-viewer.57bf5546.js"),["assets/chunks/inline-avatar-viewer.57bf5546.js","assets/chunks/framework.3b97cefe.js","assets/app.94690059.js","assets/chunks/theme.e4c10142.js"]))},it=(t="FOCUSON",c="DISABLED")=>({grid_row_class({prev:s,args:[,,m]}){return m[t]&&(s+=" focus-grid-row"),m[c]&&(s+=" disabled-eps-row"),s},task_row_class({prev:s,args:[,,m]}){return m[t]&&(s+=" focus-grid-row"),s}}),ct={"project.plan.wbs.expandAll":"Expand All","project.plan.wbs.collapseAll":"Collapse All","project.plan.wbs.columnsDesc":"Column Display/Sorting","project.plan.wbs.columnsReset":"Reset","project.plan.wbs.setLayout":"Set Layout","project.plan.wbs.saveLayout":"Save Layout","project.plan.table.title":"WBS list","project.plan.decompose.tips":"Decomposition prompt","project.plan.decompose.content.tips":"existence{resolveTaskNum}tasks to be decomposed, whether to keep the decomposition status of these tasks","project.plan.decompose.btns.notRetain":"Not retain","project.plan.decompose.btns.retain":"retain","project.plan.gantt.close":"Close Gantt Chart","project.plan.gantt.show":"Show Gantt Chart","project.plan.change.apply.tips":"Please apply for plan change","project.plan.change.cannot.tips":"The current status of the project plan cannot be changed","project.plan.timeline.hide":"Hide Timeline","project.plan.timeline.show":"Show Timeline","project.plan.edit.jurisdiction":"You do not have permission to edit the current plan","project.plan.edit.cannot":"The current status of the project plan cannot be edited","project.plan.interface.failed.tips":"Failed to call the interface, please try again later","project.plan.published.tips":"The project plan has been published and cannot be used {tip} plan","project.plan.suspend.tips":"The project has been suspended and cannot be {tip} plan","project.plan.stop.tips":"The project has been stopped, which is not allowed {tip} plan","project.plan.end.tips":"The project has been ended, which is not allowed {tip} plan","project.plan.projectChange.tips":"The project is changing, which is not allowed {tip} plan","project.plan.planChange.tips":"The plan is changing, which is not allowed {tip} plan","project.plan.changing.tips":"Plan approval, which is not allowed {tip} plan","project.plan.otherNotAllowed.tips":"The current status of the project plan is not {tip}","project.plan.published":"publish","project.plan.fineAdjustment":"Fine adjustment","project.plan.fineAdjustment.tips":"The project plan has not been released and cannot be adjusted","project.plan.fineAdjustment.not.tips":"The current plan has been changed and cannot be fine tuned","project.plan.change.notice":"There are changes in the current plan, please click the plan change notice","project.plan.projectChange.notice":"If there are changes to the current items, click the Basic Information Change Notice","project.plan.change.jurisdiction":"You have no permission to change","project.plan.change.retain":"Whether to continue using the last change order information","project.plan.decompose.btns.extendedUse":"Extended use","project.plan.editing":"The current project is currently being edited from another menu"},pt={"project.plan.wbs.expandAll":"展开所有","project.plan.wbs.collapseAll":"收起所有","project.plan.wbs.columnsDesc":"列展示/排序","project.plan.wbs.columnsReset":"重置","project.plan.wbs.setLayout":"设置布局","project.plan.wbs.saveLayout":"保存布局","project.plan.table.title":"WBS列表","project.plan.decompose.tips":"分解提示","project.plan.decompose.content.tips":"存在{resolveTaskNum}条待分解任务，是否保留这些任务的分解状态","project.plan.decompose.btns.notRetain":"不保留","project.plan.decompose.btns.retain":"保留","project.plan.gantt.close":"关闭甘特图","project.plan.gantt.show":"显示甘特图","project.plan.change.apply.tips":"请进行计划变更申请","project.plan.change.cannot.tips":"项目计划当前状态不允许变更","project.plan.timeline.hide":"隐藏时间线","project.plan.timeline.show":"显示时间线","project.plan.edit.jurisdiction":"您没有当前计划的编辑权限","project.plan.edit.cannot":"项目计划当前状态不可编辑","project.plan.interface.failed.tips":"调用接口失败，请稍后重试","project.plan.published.tips":"项目计划已发布，不可{tip}计划","project.plan.suspend.tips":"项目已暂停，不可{tip}计划","project.plan.stop.tips":"项目已停止，不可{tip}计划","project.plan.end.tips":"项目已结项，不可{tip}计划","project.plan.projectChange.tips":"项目变更中，不可{tip}计划","project.plan.planChange.tips":"计划变更中，不可{tip}计划","project.plan.changing.tips":"计划审批中，不可{tip}计划","project.plan.otherNotAllowed.tips":"项目计划当前状态不可{tip}","project.plan.published":"发布","project.plan.fineAdjustment":"微调","project.plan.fineAdjustment.tips":"项目计划未发布，不可微调计划","project.plan.fineAdjustment.not.tips":"当前计划存在变更，不可进行微调","project.plan.change.notice":"当前计划存在变更，请点击计划变更通知","project.plan.projectChange.notice":"当前项目存在变更，请点击基本信息变更通知","project.plan.change.jurisdiction":"您没有变更权限","project.plan.change.retain":"是否延用上一次变更单信息","project.plan.decompose.btns.extendedUse":"延用","project.plan.editing":"此计划正在其他菜单编辑中，请先在其他菜单退出编辑"};function he(t){return t?typeof t=="string"||typeof t=="object"&&(typeof t.value=="string"||typeof t.value=="function"||typeof t.value=="object"):!0}function me(t,c){const d=t.$props.tag;if(d){if(typeof d=="string"){const s={value:d};return c&&(s.props={class:c}),s}else if(typeof d=="object"){const s={value:d.value||"div",props:d.props||{}};return c&&(s.props.class?Array.isArray(s.props.class)?s.props.class.push(c):s.props.class=[c,s.props.class]:s.props.class=c),s}}return{value:"div"}}F.smoothDnD.dropHandler=F.dropHandlers.reactDropHandler().handler;F.smoothDnD.wrapChild=!1;const ie={"drag-start":"onDragStart","drag-end":"onDragEnd",drop:"onDrop","drag-enter":"onDragEnter","drag-leave":"onDragLeave","drop-ready":"onDropReady"};var dt=B({name:"Container",mounted(){const t=Object.assign({},this.$props);for(const c in ie)t[ie[c]]=d=>{this.$emit(c,d)};this.containerElement=this.$refs.container||this.$el,this.container=F.smoothDnD(this.containerElement,t)},unmounted(){if(this.container)try{this.container.dispose()}catch{}},emits:["drop","drag-start","drag-end","drag-enter","drag-leave","drop-ready"],props:{orientation:{type:String,default:"vertical"},removeOnDropOut:{type:Boolean,default:!1},autoScrollEnabled:{type:Boolean,default:!0},animationDuration:{type:Number,default:250},behaviour:String,groupName:String,dragHandleSelector:String,nonDragAreaSelector:String,lockAxis:String,dragClass:String,dropClass:String,dragBeginDelay:Number,getChildPayload:Function,shouldAnimateDrop:Function,shouldAcceptDrop:Function,getGhostParent:Function,dropPlaceholder:[Object,Boolean],tag:{validator:he,default:"div"}},render(){const t=me(this);return pe(t.value,Object.assign({},{ref:"container"},t.props),this.$slots.default())}}),ut=B({name:"Draggable",props:{tag:{validator:he,default:"div"}},render:function(){const t=me(this,F.constants.wrapperClass);return pe(t.value,Object.assign({},t.props),this.$slots.default())}});const ht=B({name:"ColumnsConfigContent",props:{initialColumns:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},emits:["checkboxChange","setColums","setBaseGanttColumnsDisplay"],setup(t,{emit:c,expose:d}){const s=O({}),m=(r=!0)=>{let i=0;const f=t.columns.map(v=>(s[v.name]&&i++,{...v,hide:!s[v.name]})),C=!!i&&i<t.columns.length,y=i===t.columns.length;c("checkboxChange",{checkAll:y,indeterminate:C}),r&&c("setBaseGanttColumnsDisplay",f)},u=()=>{t.columns.forEach(r=>s[r.name]=!0),m()},w=()=>{t.columns.forEach(r=>{s[r.name]=!r.hide}),m(!1)};w();const n=r=>{const i=t.columns.slice(),{addedIndex:f,removedIndex:C}=r;if(f===C)return;const[y]=i.splice(C,1);i.splice(f,0,y),c("setColums",i)};return d({toCheckAll:u,initValue:w}),()=>o(Ke,null,[o("div",{class:"gantt-viewer-column-setting-container"},[o(dt,{onDrop:n,class:"gantt-viewer-column-setting-drag-container"},{default:()=>{var r;return[(r=t.columns)==null?void 0:r.map(i=>o(ut,{key:i.name},{default:()=>[o("div",{class:"gantt-viewer-column-setting-list-option"},[o(S,{name:"hoteam-more"},null),o(de,{value:i,checked:s[i.name],"onUpdate:checked":f=>s[i.name]=f,onChange:m},{default:()=>[i.label]})])]}))]}})])])}});function ce(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Ie(t)}const mt=B({name:"ColumnsSettingButtons",props:{columns:{type:Array,default:()=>[]},initialColumns:{type:Array,default:()=>[]}},emits:["setColums","saveColumns","setBaseGanttColumnsDisplay"],setup(t,{emit:c}){const{t:d}=ue(),s=g(),m=g(0),u=O({checkAll:!1,indeterminate:!1,onCheckAllChange:r=>{var i;r.target.checked&&((i=s.value)==null||i.toCheckAll())}}),w=r=>{({checkAll:u.checkAll,indeterminate:u.indeterminate}=r)},n=()=>{c("setColums",t.initialColumns),s.value.initValue()};return()=>o("span",{class:"gantt-viewer-toolbar-setting"},[o(at,{trigger:"click",placement:"bottomRight",overlayClassName:"gantt-viewer-toolbar-setting-popover"},{default:()=>[o(_,{title:d("project.plan.wbs.setLayout"),placement:"bottom"},{default:()=>[o(S,{size:"19",class:"gantt-viewer-toolbar-setting-item",name:"wbs-setting",onClick:()=>{m.value++}},null)]})],title:()=>{let r,i;return o("div",{class:"flex-between"},[o(de,{disabled:u.checkAll,checked:u.checkAll,"onUpdate:checked":f=>u.checkAll=f,indeterminate:u.indeterminate,onChange:u.onCheckAllChange},ce(r=d("project.plan.wbs.columnsDesc"))?r:{default:()=>[r]}),o(nt,{type:"link",onClick:n},ce(i=d("project.plan.wbs.columnsReset"))?i:{default:()=>[i]})])},content:()=>o(ht,{ref:s,key:m.value,columns:t.columns,initialColumns:t.initialColumns,onSetColums:r=>c("setColums",r),onCheckboxChange:w,onSetBaseGanttColumnsDisplay:r=>c("setBaseGanttColumnsDisplay",r)},null)}),o(_,{title:d("project.plan.wbs.saveLayout"),placement:"bottomLeft"},{default:()=>[o(S,{size:"17",class:"gantt-viewer-toolbar-setting-item",name:"hoteam-save-ant",onClick:()=>{c("saveColumns")}},null)]})])}}),P=B({name:"HBBaseGanttViewer",props:{...st},emits:["clickNameLink"],setup(t,{expose:c,slots:d,attrs:s,emit:m}){const{t:u,mergeLocaleMessage:w}=ue();w("en-US",ct),w("zh-CN",pt),w("en-US",Me),w("zh-CN",Re);let n={};const r=g({}),i=g(),f=O({enter:"day",store:"minute",format:"day",hoursPerDay:8,labels:{day:{full:"",plural:"",short:""}}}),C=g(!1),y=g(!1),v=g(!1),D=g(!1),M=g(),R=g(),k=Ye([]),H=g(),fe=xe(H),U=()=>{var e;Object.keys(t.saveColumnsApi).length!==0&&((e=t==null?void 0:t.saveColumnsApi)!=null&&e.params&&Object.assign(t.saveColumnsApi.params,{tenantCode:localStorage.getItem("current_tanent_id")??void 0,...t.saveColumnsApi.params,configData:$.value.map(a=>({dataIndex:a.name,width:a.width,show:!a.hide}))}),ot({...t.saveColumnsApi}).then(a=>{a.code===200?G(a.msg,"success"):G(a.msg)}))},ge=e=>({...e,onrender(l,h){var se;const b="active-search-cell";if(l.id===_e.taskId?h.classList.add(b):h.classList.remove(b),((se=h.getElementsByClassName("gantt_tree_content"))==null?void 0:se.length)>0){const A=h.getElementsByClassName("gantt_tree_content")[0].offsetWidth??0;l.text.length*5.5>A&&h.getElementsByClassName("gantt_tree_content")[0].setAttribute("title",l.text)}h.classList.add("text-select");const j=h.querySelector(".gantt_tree_content");if(l!=null&&l.hide_bar){const A=h.querySelector(".gantt_tree_icon.gantt_file");A==null||A.classList.remove("gantt_file"),A==null||A.classList.add("gantt_folder_closed"),j&&(j.style.fontWeight="bold")}t.showNameLink&&!(l!=null&&l.hide_bar)&&j&&(j.style.color="#135ae8",j.style.cursor="pointer",j.style.fontWeight="normal",j.onclick=()=>{setTimeout(()=>{m("clickNameLink",l)})})}}),V=()=>{n.config.columns.forEach((e,a,l)=>{e.name===t.nameKey?l[a]=ge(e):e!=null&&e.render_type&&Object.keys(re).includes(e==null?void 0:e.render_type)&&(l[a]={...e,onrender(h,b){return o(re[e==null?void 0:e.render_type],{data:h,node:b,name:e.name,...e.render_type_props})}})})},we=()=>{typeof t.configApi=="object"&&Object.keys(t.configApi).length===0&&(V(),k.value=le(n.config.columns))},[W,T,p]=Pe({initialLoad:t.initialLoad,configApi:t.configApi,dataSourceApi:t.dataSourceApi,calendarsApi:t.calendarsApi,afterCalendarsRequest:e=>{var a;return(e==null?void 0:e.length)>0&&(f.hoursPerDay=(a=e[0])==null?void 0:a.day_hour),e},afterConfigRequest:e=>(setTimeout(()=>{V(),k.value=le(n.config.columns)}),e)}),$=x(()=>p.getBaseGanttColumns()),Ce=()=>{Xe(()=>t.showGantt,e=>{e?p.showBaseGanttChartGrid():p.hideBaseGanttChart()},{immediate:!0})},be=()=>{const e={...it(t.foucsKey,t.disabledKey),...t.templates};Object.keys(e).forEach(a=>{const l=n.templates[a];typeof l=="function"?n.templates[a]=(...h)=>e[a]({prev:l(...h),args:h}):n.templates[a]=(...h)=>e[a]({args:h})})},je=()=>{r.value=n=p.getBaseGanttInstance(),n.config.grid_elastic_columns=!1},q=()=>{var e;(e=n==null?void 0:n.render)==null||e.call(n)},ye=()=>n.getSelectedTasks().map(a=>n.getTask(a)),K=()=>{p.collapseBaseGanttLevel(0)},I=()=>{p.expandBaseGanttLevel(0)},Y=()=>{y.value=!y.value,y.value?p.showBaseGanttChartGrid():p.hideBaseGanttChart()},Q=(e={},a=!0)=>{var h;const l=[];return a&&((h=n==null?void 0:n.eachTask)==null||h.call(n,b=>{b.$open||l.push(b.id)})),p.queryBaseGanttData(e,!0).then(b=>(D.value&&p.switchBaseGanttTodayLine(D.value),a&&l.length>0&&n.batchUpdate(()=>{l.forEach(j=>n.close(j))}),b))},Z=e=>{p.batchSetBaseGanttColumns(e)},J=e=>{p.expandBaseGanttLevel(e)},X=e=>{D.value=$e(e)?e:!D.value,p.switchBaseGanttTodayLine(D.value)},ee=e=>{n.config.grid_elastic_columns="width",p.batchSetBaseGanttColumns(e),setTimeout(()=>{n.config.grid_elastic_columns=!1},100)},ve=e=>n.getTask(e),Ae=()=>{n.refreshData()},te=()=>{var e;if((e=W.value)!=null&&e.spinning){G(u("project.wbsEditor.querying"));return}Q()},Se=e=>{n.updateTask(e)},E=()=>{C.value=!C.value,et(()=>{n.resetLayout()})},ae=()=>{var e;(e=i.value)==null||e.openDrawer()},De=e=>{p.filterBaseGanttTask(e),n.resetLayout()},Fe=x(()=>p.getBaseGanttColumns()),Be=()=>{var e;(e=M.value)==null||e.openDrawer(Fe.value)},ne=e=>{p.freezeBaseGanttColumns(e)},Te=()=>{p.freezeBaseGanttColumns(-1)},Ne=()=>{R.value.show()},{activeSearchCell:_e,searchResultStatus:ke,searchTaskCell:Ee,resetSearchCell:Ge}=He(r,p,u),N={expandAll:I,collapseAll:K,expandCurrentLevel:J,queryGanttData:te,openFilterDrawer:ae,showHideGanttChart:Y,toggleTodayTimeLine:X,showHideGanttChartTitle:()=>y.value?u("project.wbsEditor.menu.hideChart"):u("project.wbsEditor.menu.showChart"),openFreezeColumns:Be,cancelFreezeColumns:Te,showCriticalPathTitle:()=>v.value?u("project.wbsEditor.menu.hidePath"):u("project.wbsEditor.menu.showPath"),showHideCriticalPath:()=>{v.value=!v.value,p.toggleCriticalPath(v.value)},openSearch:Ne},Le=e=>{const a=e.handleTitleMethod;return typeof a=="string"&&typeof N[a]=="function"?N[a]():u(e.title)},oe=e=>{const a=e.handleParams;let l=e.handleMethod;typeof l=="string"&&typeof N[l]=="function"&&(l=N[l]),typeof l=="function"&&(a?l(...a):l())};tt(qe,r);const ze=x(()=>({...T,...s,data:Object.keys(t.dataSourceApi).length>0?T.data:s.data,calendars:Object.keys(t.calendarsApi).length>0?T.calendars:s.calendars,columns:Object.keys(t.configApi).length>0?T.columns:s.columns}));return Qe(()=>{je(),be(),Ce(),we()}),Ze(()=>{q()}),c({getTask:ve,expandAll:I,updateTask:Se,saveColumns:U,collapseAll:K,renderGantt:q,freezeColumn:ne,openFilterDrawer:ae,getTableData:Q,queryGanttData:te,getSelectedRows:ye,refreshGanttData:Ae,showHideGanttChart:Y,expandCurrentLevel:J,setBaseGanttColumns:Z,toggleTodayTimeLine:X,handleSwitchFullScreen:E,setBaseGanttColumnsDisplay:ee,getCureentGanttInstance:p.getBaseGanttInstance,getAllMethods:()=>p}),()=>{var e;return o("div",{class:["gantt-viewer-container",C.value?"gantt-viewer-container-full":""],ref:H},[o("div",{class:"gantt-viewer-header"},[o("div",{class:"gantt-viewer-header-left"},[lt.map(a=>o(_,{title:u(a.title),placement:a.placement},{default:()=>[t[a.showFlag]&&o(S,{name:a.iconName,size:a.size||"17",class:a.className,onClick:()=>{oe(a)}},null)]}))]),o("div",{class:"gantt-viewer-header-content"},[o("div",{class:"header-content"},[d.headerContent&&d.headerContent()]),rt.map(a=>o(_,{title:Le(a),placement:a.placement},{default:()=>[t[a.showFlag]&&o(S,{name:a.iconName,size:a.size||"17",class:a.className,onClick:()=>{oe(a)}},null)]})),t.showColumnsSetting&&o(mt,{columns:$.value,initialColumns:k.value,onSetColums:Z,onSaveColumns:U,onSetBaseGanttColumnsDisplay:ee},null),t.showMaxMin&&(C.value?o(S,{name:"hoteam-exit-full-screen",size:"17",class:"header-content-icon",onClick:E},null):o(S,{name:"hoteam-full-screen",size:"17",class:"header-content-icon",onClick:E},null))])]),o("div",{class:"gantt-viewer-content"},[o(Oe,Je({ref:W},ze.value,{readonly:!0,enableFilter:!0,columnsReactiveFlag:!0,columnAddFlag:!1,correctWorkTime:!1,todayLine:!1,resizeRow:!1,workTime:!0,autoSchedule:!1,durationUnit:t.durationUnit,toolbar:!0,limitZoomInLevel:2,scaleHeight:42,rowHeight:33,showTooltip:t.showTooltip,orderBranch:!1,dynamicTextPosition:!0,chartBoxSelection:!1,enableProjectStartEndDate:!1}),null)]),t.showFilterDrawer&&o(Ue,{ref:i,durationFormatterObj:f,specialHandleFilterParams:t.specialHandleFilterParams,onFilter:De},null),t.showFreeze&&o(Ve,{ref:M,ganttHeightWidth:fe,onFreezeColumn:ne},null),o(We,{ref:R,class:"search-form-container-current",replaceFlag:!1,columns:(e=n==null?void 0:n.config)==null?void 0:e.columns,searchDropdown:t.searchDropdown,searchResultStatus:ke,onSearchTaskCell:Ee,onResetSearchCell:Ge},null)])}}});P.install=function(t){return t.component(P.name,P),t};export{P as default};