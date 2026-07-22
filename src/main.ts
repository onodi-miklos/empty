import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore: Allow importing global CSS in this TypeScript entry file
import './assets/global.css'

createApp(App).use(router).mount('#app')
