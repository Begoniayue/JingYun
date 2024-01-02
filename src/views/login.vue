<script setup lang="ts">
import {ref} from "vue";

const path = ref('/api/v1/login/wakeup')
</script>

<template>
  <div class="content-title">
    <h1>
      唤醒登陆(只限扫码登录)
    </h1>
    <div class="content-path">
      {{}}
    </div>
    <!--   代码块展示-->
    <code-block>
      {
      "Data62": "string",<br/>
      "Data63": "string",<br/>
      "DeviceName": "string",<br/>
      "DeviceType": "string",<br/>
      "Password": "string",<br/>
      "Proxy": {
      "ProxyIp": "string",<br/>
      "ProxyPassword": "string",<br/>
      "ProxyUser": "string"<br/>
      },
      "UserName": "string",<br/>
      "ClientVer": 0<br/>
      }
    </code-block>
  </div>
</template>

<style scoped lang="less">

</style>
