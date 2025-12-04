<script setup>
import {ref} from  'vue'
const tableData =  [
  {
    name: "小王",
    age: 29,
    subject: "Java",
  },
  {
    name: "小李",
    age: 30,
    subject: "C++",
  },
  {
    name: "小张",
    age: 28,
    subject: "JavaScript",
  },
]

const drawer = ref(false)

</script>

<template>
<el-table :data="tableData">
  <el-table-column prop="name" label="姓名"></el-table-column>
  <el-table-column prop="age" label="年龄"></el-table-column>
  <el-table-column prop="subject" label="科目"></el-table-column>
</el-table>


<el-menu mode="horizontal">
  <el-menu-item index="1">首页</el-menu-item>
  <el-sub-menu index="2">
    <template #title>广场</template>
    <el-menu-item index="2-1">音乐</el-menu-item>
    <el-menu-item index="2-2">视频</el-menu-item>
    <el-menu-item index="2-3">游戏</el-menu-item>
    <el-sub-menu index="2-4">
      <template #title>体育</template>
      <el-menu-item index="2-4-1">篮球</el-menu-item>
      <el-menu-item index="2-4-2">足球</el-menu-item>
      <el-menu-item index="2-4-3">排球</el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
  <el-menu-item index="3" :disabled="true">个人中心</el-menu-item>
  <el-menu-item index="4">设置</el-menu-item>
</el-menu>


<el-tabs type="border-card">
  <el-tab-pane label="页面1" name="1">页面1</el-tab-pane>
  <el-tab-pane label="页面2" name="2">页面2</el-tab-pane>
  <el-tab-pane label="页面3" name="3">页面3</el-tab-pane>
  <el-tab-pane label="页面4" name="4">页面4</el-tab-pane>
</el-tabs>


<div style="margin:300px">
  <el-button @click="drawer = true" type="primary">
    点我打开抽屉
  </el-button>
</div>
<el-drawer
  title="抽屉面板的标题"
  v-model="drawer"
  direction="ltr">
  抽屉面板的内容
</el-drawer>

<el-container>
  <el-header height="80px" style="background-color:gray">Header</el-header>
  <el-container>
    <el-aside width="200px" style="background-color:red">Aside</el-aside>
    <el-container>
      <el-main>
          <div style="height:300px;background-color:#f1f1f1">内容</div>
      </el-main>
      <el-footer height="80px" style="background-color:gray">Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>