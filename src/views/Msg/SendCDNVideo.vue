<script setup>
import useClipboard from "vue-clipboard3";
const { toClipboard } = useClipboard();
import {message} from "ant-design-vue";
import {CopyOutlined,CheckOutlined} from '@ant-design/icons-vue'
const title = ref('发送Cdn视频(转发视频)')
const requestUrl = ref('/Msg/SendCDNVideo')
const requestFn = ref('POST')
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
    name: 'Content',
    flag: '否',
    type:'string',
    interpretation: '收到文件消息xml',
  },
  {
    name: 'ToWxid',
    flag: '否',
    type:'string',
    interpretation: '',
  },
  {
    name: 'Wxid',
    flag: '否',
    type:'string',
    interpretation: 'Wxid == 微信id 多个wxid请用,隔开',
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
    '    "Content": "string",\n' +
    '    "ToWxid": "string",\n' +
    '    "Wxid": "string"\n' +
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
            <a-tag color="#108ee9">{{ requestFn }}</a-tag>
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
