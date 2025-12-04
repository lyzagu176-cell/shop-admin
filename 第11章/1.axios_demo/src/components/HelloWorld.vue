<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
let axios = getCurrentInstance().appContext.app.axios
axios.interceptors.request.use((config)=>{
    alert("请求将要开始")
    return config
},(error)=>{
    alert("请求出现错误")
    return Promise.reject(error)
})
axios.interceptors.response.use((response)=>{
    alert(response.status)
    return response
},(error)=>{
    return Promise.reject(error)
})
// 统一配置URL前缀，超时时间和自定的header
const instance = axios.create({
    baseURL: '/myApi',
    timeout: 1000,
    headers: {'X-Custom-Header': 'custom'}
});
onMounted(()=>{
  // DEMO1:
  // let api = "/simpleWeather/query?city=%E8%8B%8F%E5%B7%9E&key=cffe158caf3fe63aa2959767a503bbfe"
  // axios.get("/myApi"+api).then((response)=>{
  //     console.log(response)
  // })

  // DEMO2:
  // let city = "上海"
  // city = encodeURI(city)
  // let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503bbfe`
  // axios({
  //     method:'get',
  //     url:"/myApi" + api,
  // }).then((response)=>{
  //     console.log(response.data)
  // })

  // DEMO3:
  // let city = "上海"
  // city = encodeURI(city)
  // let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503bbfe`
  // instance.get(api).then((response)=>{
  //     console.log(response.data)
  // })

  // DEMO4:
  axios.defaults.baseURL = '/myApi'
  let city = "上海"
  city = encodeURI(city)
  let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503bbfe`
  axios.get(api).then((response)=>{
      console.log(response.data);
  })
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
