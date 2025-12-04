<script setup>
import {ref} from  'vue'
const value = ref("")
const value2 = ref("")
const value3 = ref("")
const num = ref(1)
// 定义方法，模拟获取输入框的自动提示补全数据
function queryData(queryString, callback) { 
    // queryString参数为当前输入框输入的数据，调用callback回调来将补全数据返回
    let array = []
    if (queryString.length > 0) {
        // 将当前输入的内容作为自动提示的第一个选项
        array.push({value:queryString})         
    }
    // 追加一些测试数据
    array.push(...[{value:"衣服"},{value:"裤子"},{value:"帽子"},{value:"鞋子"}])
    callback(array) 
}
// 选中某个选项后，进行alert提示
function selected(obj) {
    alert(obj.value)
}
</script>

<template>
<el-input v-model="value" 
placeholder="请输入内容"
:disabled="false"
:show-password="true"
:clearable="true"
prefix-icon="Search"
type="text"></el-input>

<el-input v-model="value2" type="text">
  <template #prepend>Http://</template>
  <template #append>.com</template>
</el-input>

<el-autocomplete v-model="value3" 
	:fetch-suggestions="queryData"
	placeholder="请输入内容"
	@select="selected"
	:highlight-first-item="true"
></el-autocomplete>

<el-input-number :min="1" :max="10" :step="1" v-model="num"></el-input-number>
</template>