<script setup>
import {ref} from  'vue'
const radio = ref("0")
const radio2 = ref("1")
const city = ref("1")
const checkBox = ref(["1"])
const checkBox2 = ref(["1"])
</script>

<template>
<div>
    <el-radio v-model="radio" value="0">男</el-radio>
    <el-radio v-model="radio" value="1">女</el-radio>
</div>
<div>
    <el-radio-group v-model="radio2">
        <el-radio value="1">选项1</el-radio>
        <el-radio value="2">选项2</el-radio>
        <el-radio value="3">选项3</el-radio>
        <el-radio value="4">选项4</el-radio>
    </el-radio-group>
</div>
<div>
    <el-radio-group v-model="city">
        <el-radio-button value="1">北京</el-radio-button>
        <el-radio-button value="2">上海</el-radio-button>
        <el-radio-button value="3">广州</el-radio-button>
        <el-radio-button value="4">深圳</el-radio-button>
    </el-radio-group>
</div>
<div>
    <el-checkbox value="1" v-model="checkBox">A</el-checkbox>
    <el-checkbox value="2" v-model="checkBox">B</el-checkbox>
    <el-checkbox value="3" v-model="checkBox">C</el-checkbox>
    <el-checkbox value="4" v-model="checkBox">D</el-checkbox>
</div>
<div>
    <el-checkbox-group v-model="checkBox2" :min="1" :max="3">
        <el-checkbox value="1">A</el-checkbox>
        <el-checkbox value="2">B</el-checkbox>
        <el-checkbox value="3">C</el-checkbox>
        <el-checkbox value="4">D</el-checkbox>
    </el-checkbox-group>
</div>
</template>