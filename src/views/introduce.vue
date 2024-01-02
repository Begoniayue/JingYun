<script setup lang="ts">
import { defineProps } from 'vue'
import anchor from '@/components/Anchor/anchor.vue'
const links = [
  {
    title: '鲸云是什么?',
    href: '#what'
  },
  {
    title: '鲸云的特点',
    href: '#feature'
  },
  {
    title: '鲸云的优势',
    href: '#advantage'
  },
  {
    title: '联系我们',
    href: '#application'
  },]
</script>

<template>
  <div class="content-box" >
    <div class="content-title" id="what">
      鲸云是什么?
    </div>
    <div class="content-text">
      <p>鲸云，是新一代的第三方服务平台，它拥有微信API服务、企业微信API服务、SCRM系统定制、企微系统定制、服务类软件定制等一系列强大的功能模块。本文档主要讲述关于个微API服务的相关内容，简称API。</p>
      <p>鲸云API能够处理用户微信中的各种事件，为开发者提供了与个微对接的能力。从技术层面来看，它是一款基于微信提供的个人开放性API，使用简单，操作快捷，支持多种微信方式接入。</p>
      <p>通过鲸云API，您可以实现个性化的微信功能，例如营销系统、云发单助手、社群小助手、客服系统、机器人等，从而自动管理微信消息</p>
    </div>
    <div class="content-title" id="feature">
      鲸云有什么功能?
    </div>
    <div class="content-text">
      可开发的功能包括但不限于：
      <ul class="content-men">
        <li >微信API服务：基于微信提供的个人开放性API，使用简单，操作快捷，支持多种微信方式接入</li>
        <li>企业微信API服务：基于企业微信提供的个人开放性API，使用简单，操作快捷，支持多种企业微信方式接入。</li>
        <li>群管理：自动创群、修改群名称、邀请新成员、踢群成员、获取群列表、发送邀请链接、获取群聊。</li>
        <li> 朋友圈：发送朋友圈、朋友圈点赞、获取朋友圈列表、转发朋友圈、同步朋友圈，批量发送朋友圈</li>
        <li>基于API您可以创造更多有趣的功能....  </li>
      </ul>
    </div>
    <div class="content-title" id="advantage">
      鲸云的核心价值
      <img src='@/assets/introduce/jiazhi.jpg' alt="advantage" width="88%" style="display: inline-block;margin-top: 20px"/>
    </div>
    <div class="content-title" id="application">
      联系我们
    </div>
    <div class="content-text" >
      <ul class="content-men">
        <li> 📍 地址：[公司地址]</li>
        <li>  📞 联系电话：[联系电话]</li>
        <li>  📧 邮箱：[公司邮箱]</li>
        <li>  🌐 网站：[公司网址]</li>
        <li>  💡 技术支持：XXX-XXXX-XXXX</li>
        <li>如果您是产品or市场调研人员，建议您将本文档熟读，我们将给予您最快的了解市场方式</li>
      </ul>
    </div>
<!--    瞄点-->
     <anchor :links="links"></anchor>
  </div>
</template>

<style scoped lang="less">
.content-title{
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  margin-bottom: 10px;
}
.content-text{
  font-size: 14px;
  color: #666;
  line-height: 24px;
}
.content-men li{
  margin-left: 20px;
  font-size: 14px;
  color: #666;
  line-height: 24px;
  font-weight: bold;
}
</style>
