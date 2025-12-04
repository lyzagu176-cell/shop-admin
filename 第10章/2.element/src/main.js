import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入Element Plus模块
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// 挂载ElementPlus模块
const app = createApp(App)

// 遍历ElementPlusIconsVue中的所有组件进行祖册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 向应用实例中全局注册图标组件
    app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')
