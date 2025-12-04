<script setup>
import { onMounted, getCurrentInstance, ref, watch} from 'vue'

const city = ref("上海")
const weatherData = ref({})
const todayData = ref({})
const plc = ref("暂无数据")
const realtime = ref({})
const futureData = ref([])
const requestData = () => {
    let c = encodeURI(city.value)
    let api = `/simpleWeather/query?city=${c}&key=cffe158caf3fe63aa2959767a503bbfe`
    axios.get(api).then((response)=>{
        weatherData.value = response.data
        todayData.value = weatherData.value.result.future[0]
        realtime.value = weatherData.value.result.realtime
        futureData.value = weatherData.value.result.future
        console.log(response.data)
    })
}
let axios = getCurrentInstance().appContext.app.axios

// 组件挂载时，进行默认数据的初始化
onMounted(() => {
    axios.defaults.baseURL = '/myApi'
    requestData()
}) 

 // 当用户输入的城市发生变化后，调用接口进行数据请求
watch(city, ()=>{
    requestData()
})
</script>

<template>
    <el-container class="container">
        <el-header>
            <el-input placeholder="请输入" class="input" v-model="city">
                <template #prepend>城市名：</template>
            </el-input>
        </el-header>
        <el-main class="main">
            <div class="today">
                今天：
                <span>{{todayData.weather ?? plc}} {{todayData.temperature ?? plc}}</span>
                <span style="margin-left:20px">{{todayData.direct ?? plc}}</span>
                <span style="margin-left:100px">{{todayData.date}}</span>
            </div>
            <div class="real">
                <span class="temp">{{realtime.temperature ?? plc}}°</span>
                <span class="realInfo">{{realtime.info ?? plc}}</span>
                <span class="realInfo" style="margin-left:20px">{{realtime.direct ?? plc}}</span>
                <span class="realInfo" style="margin-left:20px">{{realtime.power ?? plc}}</span>
            </div>
            <div class="real">
                <span class="realInfo">空气质量：{{realtime.aqi ?? plc}}°</span>
                <span class="realInfo" style="margin-left:20px">湿度：{{realtime.humidity ?? plc}}</span>
            </div>
            <div class="future">
                <div class="header">5日天气预报</div>
                <el-table :data="futureData" style="margin-top:30px">
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="temperature" label="温度"></el-table-column>
                    <el-table-column prop="weather" label="天气"></el-table-column>
                    <el-table-column prop="direct" label="风向"></el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<style>
.container {
    background: linear-gradient(rgb(13, 104, 188), rgb(54, 131, 195));
}
.input {
    width: 300px;
    margin-top: 20px;
}
.today {
    font-size: 20px;
    color: white;
}
.temp {
    font-size: 79px;
    color: white;
}
.realInfo {
    color: white;
}
.future {
    margin-top: 40px;
}
.header {
    color: white;
    font-size: 27px;
}
</style>