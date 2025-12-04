<script setup>
import BaseSetting from './GoodsBaseSetting.vue'
import PriceSetting from './GoodsPriceSetting.vue'
import DetailtSetting from './GoodsDetailSetting.vue'
import { ref } from 'vue'

const activeTab = ref("1")

function handleClick(idx) {

}

</script>
<template>
    <div class="content-container" direction="vertical">
        <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
        <el-tab-pane label="基础设置" name="1">
            <BaseSetting></BaseSetting>
        </el-tab-pane>
        <el-tab-pane label="价格库存" name="2">
            <PriceSetting></PriceSetting>
        </el-tab-pane>
        <el-tab-pane label="商品详情" name="3">
            <DetailtSetting></DetailtSetting>
        </el-tab-pane>
  </el-tabs>
    </div>
</template>
