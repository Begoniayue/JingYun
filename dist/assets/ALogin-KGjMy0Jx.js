import{u as L}from"./index-E6rrnUtW.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as f,o as s,h as o,g as i,t as C,e,b as t,w as r,d as l,m as j,C as D,j as k,p as $,f as E}from"./index-C5vaJTx-.js";const g=p=>($("data-v-d081f336"),p=p(),E(),p),U={class:"user-content"},q={class:"header"},R={class:"user-body"},H={class:"api-tag"},T={class:"code-block"},K=g(()=>i("div",{class:"request-params"},"请求参数:",-1)),O=g(()=>i("div",{class:"response-params"},"返回数据:",-1)),X=g(()=>i("div",{class:"request-params"},"请求参数示例",-1)),G={class:"code-light"},J=g(()=>i("div",{class:"response-params"},"成功返回示例",-1)),z={class:"code-light"},Q=g(()=>i("div",{class:"response-params"},"错误返回示例",-1)),Y={class:"code-light"},Z={__name:"ALogin",setup(p){const{toClipboard:b}=L(),M=a("登陆(账号或密码)-A16"),B=a("/Login/A16Data"),N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],F=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],W=a([{name:"Data62",flag:"否",type:"string",interpretation:"62数据"},{name:"DeviceName",flag:"否",type:"string",interpretation:"设备名称"},{name:"Extend",flag:"否",type:"object",interpretation:""},{name:"AndriodBssId",flag:"否",type:"string",interpretation:"安卓Bssid"},{name:"AndriodFsId",flag:"否",type:"string",interpretation:"安卓FsId"},{name:"AndriodId",flag:"否",type:"string",interpretation:"安卓id"},{name:"AndriodSsId",flag:"否",type:"string",interpretation:"安卓SsId"},{name:"Androidversion",flag:"否",type:"string",interpretation:"应用版本"},{name:"Arch",flag:"否",type:"string",interpretation:""},{name:"BuildBoard",flag:"否",type:"string",interpretation:"设备的硬件主板信息"},{name:"BuildFP",flag:"否",type:"string",interpretation:"设备的硬件或软件的构建标识符"},{name:"BuildID",type:"string",flag:"否",interpretation:"设备构建标识符"},{name:"Features",type:"string",flag:"否",interpretation:"特性"},{name:"Hardware",type:"string",flag:"否",interpretation:"硬件"},{name:"Imei",type:"string",flag:"否",interpretation:"IMEI 号码"},{name:"KernelReleaseNumber",type:"string",flag:"否",interpretation:"内核发布号"},{name:"Manufacturer",type:"string",flag:"否",interpretation:"制造商"},{name:"PackageSign",type:"string",flag:"否",interpretation:"包签名"},{name:"PhoneModel",type:"string",flag:"否",interpretation:"手机型号"},{name:"PhoneSerial",type:"string",flag:"否",interpretation:"手机序列号"},{name:"RadioVersion",type:"string",flag:"否",interpretation:"无线电版本"},{name:"SbMD5",type:"string",flag:"否",interpretation:"SbMD5"},{name:"SfArm64MD5",type:"string",flag:"否",interpretation:"SfArm64MD5"},{name:"SfArmMD5",type:"string",flag:"否",interpretation:"SfArmMD5"},{name:"SfMD5",type:"string",flag:"否",interpretation:"SfMD5"},{name:"WLanAddress",type:"string",flag:"否",interpretation:" 无线网关地址"},{name:"WidevineDeviceID",type:"string",flag:"否",interpretation:" Widevine设备ID"},{name:"WidevineProvisionID",type:"string",flag:"否",interpretation:" Widevine预设标识"},{name:"WifiFullName",type:"string",flag:"否",interpretation:" 完整无线网络名称"},{name:"WifiName",type:"string",flag:"否",interpretation:" 无线网络名称"},{name:"Password",flag:"否",type:"string",interpretation:"密码"},{name:"Proxy",flag:"否",type:"object",interpretation:"测试长效代理"},{name:"ProxyIp",flag:"否",type:"string",interpretation:"自定义长效代理IP+端口 不使用代理请留空"},{name:"ProxyUser",flag:"否",type:"string",interpretation:"自定义长效代理IP平台账号 不使用代理请留空"},{name:"ProxyPassword",flag:"否",type:"string",interpretation:"自定义长效代理IP平台密码 不使用代理请留空"},{name:"UserName",flag:"否",type:"string",interpretation:"用户名"},{name:"ClientVer",flag:"否",type:"integer",interpretation:"服务端版本"}]),w=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),A=a(`{
    "A16": "string",
    "DeviceName": "string",
    "Extend": {
        "AndriodBssId": "string",
        "AndriodFsId": "string",
        "AndriodId": "string",
        "AndriodSsId": "string",
        "Androidversion": "string",
        "Arch": "string",
        "BuildBoard": "string",
        "BuildFP": "string",
        "BuildID": "string",
        "Features": "string",
        "Hardware": "string",
        "Imei": "string",
        "KernelReleaseNumber": "string",
        "Manufacturer": "string",
        "PackageSign": "string",
        "PhoneModel": "string",
        "PhoneSerial": "string",
        "RadioVersion": "string",
        "SbMD5": "string",
        "SfArm64MD5": "string",
        "SfArmMD5": "string",
        "SfMD5": "string",
        "WLanAddress": "string",
        "WidevineDeviceID": "string",
        "WidevineProvisionID": "string",
        "WifiFullName": "string",
        "WifiName": "string"
    },
    "Password": "string",
    "Proxy": {
        "ProxyIp": "string",
        "ProxyPassword": "string",
        "ProxyUser": "string"
    },
    "UserName": "string",
    "ClientVer": 0
}`),P=a(`{
 "code": "number",
 "description": "string",
}`),S=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),c=a(!0),m=a(!0),u=a(!0),y=(h,n)=>{n==="code"&&(c.value=!c.value),n==="data"&&(m.value=!m.value),n==="err"&&(u.value=!u.value),b(h),j.success("复制成功")};return(h,n)=>{const v=f("a-tag"),_=f("a-tooltip"),x=f("a-table"),I=f("highlightjs");return s(),o("div",U,[i("div",q,C(e(M)),1),i("div",R,[i("div",H,[t(_,null,{title:r(()=>[l("请求方法")]),default:r(()=>[i("span",null,[t(v,{color:"#108ee9"},{default:r(()=>[l("GET")]),_:1})])]),_:1}),t(_,null,{title:r(()=>[l("接口状态")]),default:r(()=>[i("span",null,[t(v,{color:"#e6a23c"},{default:r(()=>[l("有效")]),_:1})])]),_:1}),l(),t(_,null,{title:r(()=>[l("Headers")]),default:r(()=>[i("span",null,[t(v,{color:"#e6a23c"},{default:r(()=>[l("Content-Type：application/json")]),_:1})])]),_:1})]),i("div",T,[i("code",null,C(e(B)),1)]),K,t(x,{columns:N,"data-source":e(W),bordered:"",pagination:!1},null,8,["data-source"]),O,t(x,{columns:F,"data-source":e(w),bordered:"",pagination:!1},null,8,["data-source"]),X,i("div",G,[e(c)?(s(),o("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=d=>y(e(A),"code"))},[t(e(D))])):(s(),o("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=d=>c.value=!0)},[t(e(k))])),t(I,{language:"JavaScript",code:e(A)},null,8,["code"])]),J,i("div",z,[e(m)?(s(),o("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=d=>y(e(P),"data"))},[t(e(D))])):(s(),o("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=d=>m.value=!0)},[t(e(k))])),t(I,{language:"Xml",code:e(P)},null,8,["code"])]),Q,i("div",Y,[e(u)?(s(),o("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=d=>y(e(S),"err"))},[t(e(D))])):(s(),o("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=d=>u.value=!0)},[t(e(k))])),t(I,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ie=V(Z,[["__scopeId","data-v-d081f336"]]);export{ie as default};
