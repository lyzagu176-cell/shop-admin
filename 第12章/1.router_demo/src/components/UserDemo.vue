<script setup>
import {onMounted} from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
const route = useRoute()
onMounted(() => {
    alert(`组件加载，请求数据。路由参数为name:${route.params.username} id:${route.params.id}`)
})
onBeforeRouteUpdate((to, from) => {
    console.log(to,from)
    alert(`组件加载，请求数据。路由参数为name:${to.params.username} id:${to.params.id}`)
})
</script>
<template>
    <!-- <h1>姓名：{{$route.params.username}}</h1>
    <h2>id:{{$route.params.id}}</h2> -->
    <h1>中户中心</h1>
    <h1>姓名：{{$route.params.username}}</h1>

    <router-view></router-view>

</template>
