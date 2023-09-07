import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(ElementPlus, {
  //@ts-ignore
  locale: zhCn
})

//  引入自定义插件对象：注册整个项目的全局组件
import GlobalComponent from './components/index'

app.use(createPinia())
app.use(router)
app.use(GlobalComponent)

app.mount('#app')
