import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/fonts.css'
import './assets/scss/main.scss'
import router from './router'


createApp(App).use(router).mount('#app')
