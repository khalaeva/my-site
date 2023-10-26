import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueRouter from 'vue-router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueRouter)
app.mount('#app')
