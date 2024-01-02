import{u as T}from"./index-E6rrnUtW.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as g,o as i,h as l,g as n,t as h,e,b as t,w as a,d,m as E,C,j as x,p as L,f as W}from"./index-C5vaJTx-.js";const r=p=>(L("data-v-6deb643e"),p=p(),W(),p),X={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},z={class:"code-block"},A=r(()=>n("div",{class:"request-params"},"请求参数:",-1)),G=r(()=>n("div",{class:"response-params"},"返回数据:",-1)),K=r(()=>n("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"DelSafetyInfo",setup(p){const{toClipboard:j}=T(),D=o("删除登录设备"),F=o("/User/DelSafetyInfo"),U=o("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=o([{name:"Uuid",flag:"否",type:"string",interpretation:"Email"},{name:"Wxid",flag:"否",type:"string",interpretation:"微信id"}]),O=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=o(`{
    "Uuid": "string",
    "Wxid": "string"
}`),b=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),_=o(!0),m=o(!0),v=($,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(_.value=!_.value),s==="err"&&(m.value=!m.value),j($),E.success("复制成功")};return($,s)=>{const y=g("a-tag"),f=g("a-tooltip"),q=g("a-table"),k=g("highlightjs");return i(),l("div",X,[n("div",H,h(e(D)),1),n("div",J,[n("div",P,[t(f,null,{title:a(()=>[d("请求方法")]),default:a(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[d(h(e(U)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[d("接口状态")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:a(()=>[d("Headers")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",z,[n("code",null,h(e(F)),1)]),A,t(q,{columns:w,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),G,t(q,{columns:B,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),K,n("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=c=>v(e(I),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=c=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,n("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=c=>v(e(b),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=c=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,n("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=c=>v(e(S),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=c=>m.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=V(ee,[["__scopeId","data-v-6deb643e"]]);export{oe as default};
