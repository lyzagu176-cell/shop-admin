<script setup>
import {ref} from 'vue'
// 简单的计数器功能
const count = ref(0)
function increment() {
  count.value ++
}

import counter from '../CounterState'
import {userInfoStore} from '../CounterState'
const store = counter()
const userInfo = userInfoStore()
userInfo.$subscribe((mutation, state)=>{
  console.log(mutation)
  // 当前的状态
  console.log(state)
})
userInfo.$onAction((action)=>{
  // 动作的名称
  console.log(action.name)
  // 当前Store实例
  console.log(action.store)
  // 方法执行的参数
  console.log(action.args)
  // 方法成功完整执行后的回调钩子
  let afterCallback = action.after
  // 方法有异常抛出的回调钩子
  let errorCallback = action.onError
  console.log("方法执行开始前...")
  // 注册完成的回调
  afterCallback(()=>{
    console.log("方法执行完成")
  })
  // 注册异常回调
  errorCallback(()=>{
    console.log("方法执行异常")
  })
})
</script>
<template>
  <h1>计数器1:{{ count }}</h1>
  <button @click="increment">增加</button>

  <h1 @click="store.count++">Pinia计数器1:{{ store.count }}</h1>

  <h1 @click="userInfo.incrementAge">
    name: {{ userInfo.name }}, age: {{ userInfo.age }}, ageString: {{ userInfo.ageString }} 
  </h1>
  <button @click="userInfo.$patch({
    name:'Jaki',
    age: 30
  })">修改用户信息</button>

<h1>Store 版本号：{{ userInfo.version }}</h1>
<!-- 有此状态数据 -->
<h1>插件扩展状态：{{ userInfo.customState }}</h1>
<!-- 无此状态数据 -->
<h1>插件扩展状态：{{ store.customState }}</h1>
</template>
