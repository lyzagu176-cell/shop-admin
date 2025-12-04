<script setup>
import * as echarts from 'echarts';
import { onMounted, watch, getCurrentInstance } from 'vue'

const props = defineProps(['xData','data'])
// 用来获取当前组件实例
const instance = getCurrentInstance()
watch(props, ()=>{
    refresh()
}) 

onMounted(() => {
    refresh()
})

function refresh() {
    let chart = echarts.init(instance.proxy.$refs.chart);
    chart.clear()
    chart.setOption({
        xAxis:{
            data:props.xData
        },
        yAxis: {
            type: 'value'
        },
        series:{
            type:'line',
            data:props.data
        }
    });
}
</script>
<template>
    <div ref="chart"></div>
</template>