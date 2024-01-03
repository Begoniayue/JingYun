<script setup>
import useClipboard from "vue-clipboard3";
const { toClipboard } = useClipboard();
import {message} from "ant-design-vue";
import {CopyOutlined,CheckOutlined} from '@ant-design/icons-vue'
const title = ref('登陆(账号或密码)-A16')
const requestUrl = ref('/Login/A16Data')
const columns = [
  {
    title: '参数名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '必选',
    dataIndex: 'flag',
    key: 'flag',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '说明',
    dataIndex: 'interpretation',
    key: 'interpretation',
  },
]
const returnColumns = [
  {
    title: '参数名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '说明',
    dataIndex: 'interpretation',
    key: 'interpretation',
  },
]
const requestList = ref([
  {
    name: 'Data62',
    flag: '否',
    type:'string',
    interpretation: '62数据',
  },
  {
    name: 'DeviceName',
    flag: '否',
    type:'string',
    interpretation: '设备名称',
  },
  {
    name: 'Extend',
    flag: '否',
    type:'object',
    interpretation: '',
  },

  {
    name: 'AndriodBssId',
    flag: '否',
    type:'string',
    interpretation: '安卓Bssid',
  },

  {
    name: 'AndriodFsId',
    flag: '否',
    type:'string',
    interpretation: '安卓FsId',
  },

  {
    name: 'AndriodId',
    flag: '否',
    type:'string',
    interpretation: '安卓id',
  },

  {
    name: 'AndriodSsId',
    flag: '否',
    type:'string',
    interpretation: '安卓SsId',
  },

  {
    name: 'Androidversion',
    flag: '否',
    type:'string',
    interpretation: '应用版本',
  },
  {
    name: 'Arch',
    flag: '否',
    type:'string',
    interpretation: '',
  },
  {
    name: 'BuildBoard',
    flag: '否',
    type:'string',
    interpretation: '设备的硬件主板信息',
  },
  {
    name: 'BuildFP',
    flag: '否',
    type:'string',
    interpretation: '设备的硬件或软件的构建标识符',
  },
  { name: 'BuildID', type: 'string', flag: '否', interpretation: '设备构建标识符' },
  { name: 'Features', type: 'string', flag: '否', interpretation: '特性' },
  { name: 'Hardware', type: 'string', flag: '否', interpretation: '硬件' },
  { name: 'Imei', type: 'string', flag: '否', interpretation: 'IMEI 号码' },
  { name: 'KernelReleaseNumber', type: 'string', flag: '否', interpretation: '内核发布号' },
  { name: 'Manufacturer', type: 'string', flag: '否', interpretation: '制造商' },
  { name: 'PackageSign', type: 'string', flag: '否', interpretation: '包签名' },
  { name: 'PhoneModel', type: 'string', flag: '否', interpretation: '手机型号' },
  { name: 'PhoneSerial', type: 'string', flag: '否', interpretation: '手机序列号' },
  { name: 'RadioVersion', type: 'string', flag: '否', interpretation: '无线电版本' },
  { name: 'SbMD5', type: 'string', flag: '否', interpretation: 'SbMD5' },
  { name: 'SfArm64MD5', type: 'string', flag: '否', interpretation: 'SfArm64MD5' },
  { name: 'SfArmMD5', type: 'string', flag: '否', interpretation: 'SfArmMD5' },
  { name: 'SfMD5', type: 'string', flag: '否', interpretation: 'SfMD5' },
  { name: 'WLanAddress', type: 'string', flag: '否', interpretation: ' 无线网关地址' },
  { name: 'WidevineDeviceID', type: 'string', flag: '否', interpretation: ' Widevine设备ID' },
  { name: 'WidevineProvisionID', type: 'string', flag: '否', interpretation: ' Widevine预设标识' },
  { name: 'WifiFullName', type: 'string', flag: '否', interpretation: ' 完整无线网络名称' },
  { name: 'WifiName', type: 'string', flag: '否', interpretation: ' 无线网络名称' } ,
  {
    name: 'Password',
    flag: '否',
    type:'string',
    interpretation: '密码',
  },
  {
    name: 'Proxy',
    flag: '否',
    type:'object',
    interpretation: '测试长效代理',
  },

  {
    name: 'ProxyIp',
    flag: '否',
    type:'string',
    interpretation: '自定义长效代理IP+端口 不使用代理请留空',
  },

  {
    name: 'ProxyUser',
    flag: '否',
    type:'string',
    interpretation: '自定义长效代理IP平台账号 不使用代理请留空',
  },
  {
    name: 'ProxyPassword',
    flag: '否',
    type:'string',
    interpretation: '自定义长效代理IP平台密码 不使用代理请留空',
  },
  {
    name: 'UserName',
    flag: '否',
    type:'string',
    interpretation: '用户名',
  },
  {
    name: 'ClientVer',
    flag: '否',
    type:'integer',
    interpretation: '服务端版本',
  }
])
const returnList = ref([
  {
    name: 'code',
    type:'string',
    interpretation: '200成功',
  },
  {
    name: 'description',
    type:'string',
    interpretation: '返回数据',
  },
  {
    name:'message',
    type:'string',
    interpretation: '反馈信息',
  }
])

const code = ref('{\n' +
    '    "A16": "string",\n' +
    '    "DeviceName": "string",\n' +
    '    "Extend": {\n' +
    '        "AndriodBssId": "string",\n' +
    '        "AndriodFsId": "string",\n' +
    '        "AndriodId": "string",\n' +
    '        "AndriodSsId": "string",\n' +
    '        "Androidversion": "string",\n' +
    '        "Arch": "string",\n' +
    '        "BuildBoard": "string",\n' +
    '        "BuildFP": "string",\n' +
    '        "BuildID": "string",\n' +
    '        "Features": "string",\n' +
    '        "Hardware": "string",\n' +
    '        "Imei": "string",\n' +
    '        "KernelReleaseNumber": "string",\n' +
    '        "Manufacturer": "string",\n' +
    '        "PackageSign": "string",\n' +
    '        "PhoneModel": "string",\n' +
    '        "PhoneSerial": "string",\n' +
    '        "RadioVersion": "string",\n' +
    '        "SbMD5": "string",\n' +
    '        "SfArm64MD5": "string",\n' +
    '        "SfArmMD5": "string",\n' +
    '        "SfMD5": "string",\n' +
    '        "WLanAddress": "string",\n' +
    '        "WidevineDeviceID": "string",\n' +
    '        "WidevineProvisionID": "string",\n' +
    '        "WifiFullName": "string",\n' +
    '        "WifiName": "string"\n' +
    '    },\n' +
    '    "Password": "string",\n' +
    '    "Proxy": {\n' +
    '        "ProxyIp": "string",\n' +
    '        "ProxyPassword": "string",\n' +
    '        "ProxyUser": "string"\n' +
    '    },\n' +
    '    "UserName": "string",\n' +
    '    "ClientVer": 0\n' +
    '}')
const data = ref('{\n' +
    ' "code": "number",\n' +
    ' "description": "string",\n' +
    '}')
const err = ref('{\n' +
    '    "message": "失败",\n' +
    '    "code": "1001",\n' +
    '    "data": null\n' +
    '}')
const codeFlag = ref(true)
const dataFlag = ref(true)
const errFlag = ref(true)
const copyCode = (text, type) => {
  if (type === 'code') {
    codeFlag.value = !codeFlag.value
  }
  if (type === 'data') {
    dataFlag.value =!dataFlag.value
  }
  if (type === 'err') {
    errFlag.value =!errFlag.value
  }
  toClipboard(text)
  message.success('复制成功')
}
</script>

<template>
  <div class="user-content">
    <div class="header">
      {{title}}
    </div>
    <div class="user-body">
      <div class="api-tag">
        <a-tooltip>
          <template #title>请求方法</template>
          <span>
            <a-tag color="#108ee9">POST</a-tag>
          </span>
        </a-tooltip>
        <a-tooltip>
          <template #title>接口状态</template>
          <span>
            <a-tag color="#e6a23c">有效</a-tag>
          </span>
        </a-tooltip> <a-tooltip>
        <template #title>Headers</template>
        <span>
            <a-tag color="#e6a23c">Content-Type：application/json</a-tag>
          </span>
      </a-tooltip>
      </div>
      <div class="code-block">
        <code>
          {{ requestUrl }}
        </code>
      </div>
      <div class="request-params">请求参数:</div>
      <a-table :columns="columns" :data-source="requestList" bordered :pagination="false"></a-table>
      <div class="response-params">返回数据:</div>
      <a-table :columns="returnColumns" :data-source="returnList" bordered :pagination="false"></a-table>
      <div class="request-params">请求参数示例</div>
      <div class="code-light">
        <div class="copy-icon" v-if="codeFlag" @click="copyCode(code, 'code')"><CopyOutlined /></div>
        <div class="copy-icon" v-else @click="codeFlag = true"><CheckOutlined /></div>
        <highlightjs language="JavaScript" :code="code"></highlightjs>
      </div>
      <div class="response-params">成功返回示例</div>
      <div class="code-light">
        <div class="copy-icon" v-if="dataFlag" @click="copyCode(data,'data')"><CopyOutlined /></div>
        <div class="copy-icon" v-else @click="dataFlag = true"><CheckOutlined /></div>
        <highlightjs language="Xml" :code="data">
        </highlightjs>
      </div>
      <div class="response-params">错误返回示例</div>
      <div class="code-light">
        <div class="copy-icon" v-if="errFlag" @click="copyCode(err,'err')"><CopyOutlined /></div>
        <div class="copy-icon" v-else @click="errFlag = true"><CheckOutlined /></div>
        <highlightjs language="Xml" :code="err">
        </highlightjs>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.user-content{
  margin: 10px 20px 10px 20px;
  .header{
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e6ecf1;
  }
}
.user-body{
  margin-top: 20px;
  .code-block{
    border-radius: 5px;
    line-height: 60px;
    background: #f5f6f9;
    margin-top: 20px;
    font-size: 16px;
    overflow-x: auto;
    padding-left: 20px;
  }
}
.request-params{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
}
.response-params{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
}
.code-light{
  line-height: 28px;
  position: relative;
  .copy-icon{
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }
}
</style>
