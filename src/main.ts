import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const fun2 = () => {
  console.log('config')
  console.log('sadsads')
}
fun2()
fun2()

app.use(createPinia())
app.use(router)

app.mount('#app')
