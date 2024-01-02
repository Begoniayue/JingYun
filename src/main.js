import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
const pina = createPinia()

import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app= createApp(App)

app.use(router)
app.use(Antd)
app.use(hljsVuePlugin)
app.use(pina)
app.mount('#app')
