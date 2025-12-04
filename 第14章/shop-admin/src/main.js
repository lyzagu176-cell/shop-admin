import { createApp } from 'vue'
import {createPinia} from 'pinia'
import Router from './tools/Router'
import App from './App.vue'
// 引入Element Plus模块
import ElementPlus from 'element-plus'
// 引入CSS样式
import 'element-plus/dist/index.css'
const app = createApp(App)
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 遍历ElementPlusIconsVue中的所有组件进行祖册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 向应用实例中全局注册图标组件
    app.component(key, component)
}
app.use(ElementPlus)
app.use(createPinia())
app.use(Router)
app.mount('#app')
