// 导入vue框架中的createApp方法
import { createApp } from 'vue'
// 导入Vue Router模块中的createRouter和createWebHashHistory方法
import { createRouter, createWebHashHistory } from 'vue-router' 
// 导入我们自定义的根组件
import App from './App.vue'
// 导入路由需要用到的自定义组件
import Demo1 from './components/DemoOne.vue'
import Demo2 from './components/DemoTwo.vue'
import User from './components/UserDemo.vue'
import UserSetting from './components/UserSetting.vue'
import CategoryDemo from './components/CategoryDemo.vue'
import FriendsDemo from './components/FriendsDemo.vue'

// 挂载根组件
const app = createApp(App)
// 定义路由
const routes = [
  { path: '/demo1', component: Demo1 },
  { path: '/demo2', component: Demo2 },
  { path: '/user/:username/:id', component:User },
  { path: '/user/:username', component:User,
  children:[
    {
      path: 'friends/:count',
      component: FriendsDemo
    }
  ]},
  { path: '/user/:id', component:UserSetting },
  { path: '/user/info/:username', component:User },
  { path: '/user/setting/:id', component:UserSetting, props: true },
  { path: '/user/:username?', component:User },
  { path: '/user/:id(\\d+)', component:UserSetting }, // 只匹配数值
  { path: '/category/:cat*', component:CategoryDemo},
  {
    path: '/home/:username/:id', 
    components: {
      topBar: User,
      main: UserSetting
    }
  }
]
// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
// 注册路由
app.use(router)
// 进行应用挂载
app.mount('#app')