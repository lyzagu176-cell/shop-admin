<script setup>
import {ref} from  'vue'

const time = ref([])
const date = ref([])
const color = ref("")
</script>

<template>
<el-time-picker
  :is-range="true"
  v-model="time"
  range-separator="~"
  :arrow-control="true"
  start-placeholder="开始时间"
  end-placeholder="结束时间"
>
</el-time-picker>
<div>{{ time }}</div>
<el-date-picker
  v-model="date"
  type="daterange"
  range-separator="至"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
  >
</el-date-picker>
<div>{{ date }}</div>
<el-color-picker :show-alpha="true" v-model="color"></el-color-picker>
<div>{{ color }}</div>
</template>