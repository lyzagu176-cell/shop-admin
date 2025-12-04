<script setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRouter } from 'vue-router'
import Demo2 from "./DemoTwo.vue"
let router = useRouter()

router.addRoute({
    path: "/new/demo2",
    component: Demo2
})


function click() {
    router.push("/new/demo2")
}


onBeforeRouteUpdate((to, from) => {
    console.log(to, from, "路由参数有更新时的守卫")
})
onBeforeRouteLeave((to, from) => {
    console.log(to, from, "离开页面")
})
</script>
<template>
    <h1>示例页面1</h1>
    <div @click="click">跳转Demo2</div>
</template>