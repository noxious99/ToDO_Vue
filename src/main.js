// import './assets/main.css'
import Router from './Routes.js'
import store from './store/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App)
.use(Router)
.use(store)
.mount('#app')
