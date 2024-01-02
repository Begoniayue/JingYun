<script setup>
import {
  enterpriseList,
  login
} from '@/api/accident/warning.js'
import { useCounterStore } from '@/stores/user.store.js'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment } = store

const username = ref('')
const password = ref('')
const getList = () => {
  const data = {
    pageNum: 1,
    pageSize: 100,
    addAuditStatus: "1",
    status: "0",
  }
  enterpriseList(data).then(res => {
    console.log(res)
  }
  ).catch(err => {})
}
const userLogin = () => {
  console.log(username.value, password.value)
  login({ username: username.value, password: password.value }).then(res => {
        console.log(res)
      }
  ).catch(err => {})
  console.log(username.value, password.value)
}
</script>

<template>
  <div>home</div>
  <a-button type="primary" @click="getList">获取列表</a-button>
  <a-button type="primary" @click="increment">+</a-button>
<!--  <el-button type="primary" @click="getList">获取列表</el-button>-->
<!--  <el-button type="primary" @click="increment">+</el-button>-->
  <div>{{ count }}</div>
<!--  登录表单-->
  <a-form>
    <a-form-item label="用户名" name="username">
      <a-input v-model="username" placeholder="请输入用户名"></a-input>
    </a-form-item>
    <a-form-item label="密码" name="password">
      <a-input v-model="password" type="password" placeholder="请输入密码"></a-input>
    </a-form-item>
  </a-form>
<!--  <el-form>-->
<!--    <el-form-item label="用户名" prop="username">-->
<!--      <el-input v-model="username" placeholder="请输入用户名"></el-input>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="密码" prop="password">-->
<!--      <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>-->
<!--    </el-form-item>-->
<!--    <el-form-item>-->
<!--      <el-button type="primary" @click="userLogin">登录</el-button>-->
<!--    </el-form-item>-->
<!--  </el-form>-->
</template>

<style scoped>

</style>
