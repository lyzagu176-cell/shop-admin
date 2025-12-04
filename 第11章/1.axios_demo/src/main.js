import { createApp } from 'vue'
// 导入vue-axios模块
import VueAxios from 'vue-axios'
import axios from 'axios';
import './style.css'
import App from './App.vue'

// 根组件
const app = createApp(App)
// 注册axios
app.use(VueAxios, axios)
// 挂载应用
app.mount('#app')