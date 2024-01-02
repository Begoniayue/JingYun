<script setup>
import { Anchor } from 'ant-design-vue';
import dayjs from "dayjs";
import {onMounted, ref,watch} from "vue";
const items = ref([
  { href: '#section1', title: 'Section 1' },
  { href: '#section2', title: 'Section 2' },
  { href: '#section3', title: 'Section 3' },
]);
const props = defineProps(['links'])
const affix = true;
const bounds = 5;
function handleAnchorChange(activeLink) {
  emit('handleAnchorChange', activeLink)
}

const emit = defineEmits(['handleAnchorChange']);
</script>

<template>
  <a-anchor :affix="affix" :bounds="bounds" @change="handleAnchorChange" class="anchor" :items="links">
  </a-anchor>
</template>

<style scoped lang="less">
  .anchor{
    position: fixed;
    top: 80px;
    left: 88%;
    width: 100%;
    z-index: 100;
  }
</style>

