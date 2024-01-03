<script setup>
import anchor from '@/components/Anchor/anchor.vue'
import items from '@/util/slider.js'
import { useRouter } from 'vue-router'
const headerStyle = {
  textAlign: 'left',
  color: '#333',
  height: 50,
  fontSize: '20px',
  fontWeight: 'bold',
  paddingInline: 30,
  lineHeight: '50px',
  backgroundColor: '#fff',
};
const contentStyle = {
  textAlign: 'left',
  minHeight: 120,
  padding: '24px 40px',
  backgroundColor: '#fff',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#333',
  backgroundColor: '#fff',
};
/*menu*/
const selectedKeys = ref(['1']);
const openKeys = ref(['sub1']);
const router = useRouter();
const handleClick = (e) => {
  console.log('click ', e);
  selectedKeys.value = e.selectedKeys;
  openKeys.value = e.openKeys;
  router.push(e.item.path);
};

</script>

<template>
  <a-layout>
    <a-layout-header :style="headerStyle" class="header">
      <span class="logo">
        <img src="@/assets/logo.jpg" width="180px">
      </span>
    </a-layout-header>
    <a-layout>
      <a-layout-sider :style="siderStyle" width="248">
        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            :items="items"
            @click="handleClick"
            class="menu"
        ></a-menu>
      </a-layout-sider>
      <a-layout-content :style="contentStyle">  <RouterView /></a-layout-content>
      <a-layout-sider :style="siderStyle" width="200"></a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.header {
  height: 64px;
  line-height: 50px;
  padding-left: 24px;
  border-bottom: 1px solid #e8e8e8;
  .logo{
    font-size: 22px;
    font-weight: bold;
    margin-right: 5px;
    color: #1890ff;
    display: inline-block;
    &:hover{
      color: #1890ff;
    }
  }
}
.menu{
  text-align: left;
  font-size: 15px;
  color: #333;
  line-height: 40px;
  padding-left: 16px;
 .ant-menu-item-selected{
    color: #1890ff;
  }
}
</style>
