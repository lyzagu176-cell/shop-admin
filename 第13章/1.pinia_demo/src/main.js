// 导入部分
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
// 创建应用实例
let app = createApp(App)
// 创建Pinia
let pinia = createPinia()
// 挂载pinia
app.use(pinia)
// 定义插件
function PiniaVersionPlugin(context) {
    console.log(context)
    context.store.$subscribe(()=>{
        console.log("插件订阅状态")
    })
    context.store.$onAction(()=>{
        console.log("插件订阅行为")
    })
    if (context.store.$id == "userInfo") {
        context.store.customState = "customState"
    }
    return {version: "1.0.0"}
}
// 加载插件
pinia.use(PiniaVersionPlugin)
// 挂载Vue App
createApp(App).mount('#app')


