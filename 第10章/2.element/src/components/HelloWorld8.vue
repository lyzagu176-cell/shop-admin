<script setup>
import {ref} from  'vue'
const switch1 = ref(true)
const switch2 = ref(true)
const switch3 = ref(false)
const sliderValue = ref(0)
const sliderValue2 = ref(0)
const sliderValue3 = ref(0)
const sliderValue4 = ref(0)
const marks = {
  0: "起点",
  50: "半程啦！",
  90: {
    style: {
      color: "#ff0000",
    },
    label: "就到终点啦",
  }
}
function format(value) {
  return `${value}%`;
}
</script>

<template>
<div id="div">
<el-switch
    v-model="switch1"
    active-text="会员"
    inactive-text="非会员"
    active-color="#00FF00"
    inactive-color="#FF0000"
  ></el-switch>
</div>

<div id="div">
  <el-switch
    v-model="switch2"
    active-text="加载中"
    :loading="true"
  ></el-switch>
</div>

<div id="div">
  <el-switch
    v-model="switch3"
    inactive-text="禁用"
    :disabled="true"
  ></el-switch>
</div>

<el-slider v-model="sliderValue"></el-slider>

<el-slider v-model="sliderValue2" :format-tooltip="format"></el-slider>

<el-slider
  v-model="sliderValue3"
  :format-tooltip="format"
  :step="10"
  :show-stops="true"
></el-slider>

<el-slider v-model="sliderValue4" :marks="marks"></el-slider>
</template>