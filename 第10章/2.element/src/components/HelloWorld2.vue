<script setup>
import { ref } from 'vue'
// 默认展示的标签
const tags = ref(["男装","女装","帽子","鞋子"]); 
 // 控制输入框是否展示
const show = ref(false);
// 与输入框进行数据绑定
const inputValue = ref(""); 
// 删除某个标签的方法，将其从数据源数组中移除
function closeTag(index) { 
    tags.value.splice(index, 1);
}
// 显示输入框，新建标签时将输入框展示出来
function showInput() {
    show.value = true
}
// 确认输入，当输入框失去焦点时调用，向数据源列表中新增数据
function handleInputConfirm(){
    if (inputValue.value) {
        tags.value.push(inputValue.value);
    }
    show.value = false;
    inputValue.value = '';
}

</script>

<template>
    <div>  
      <template v-for="(tag,index) in tags" :key="tag">
        <el-tag :closable="true" @close="closeTag(index)">{{tag}}</el-tag>
        <span style="padding:10px"></span>
      </template>
      <el-input style="width: 90px"
                v-if="show"
                v-model="inputValue"
                @keyup.enter="handleInputConfirm"
                @blur="handleInputConfirm"
                size="small">
      </el-input>
      <el-button size="small" v-else @click="showInput">新建标签 +</el-button>
    </div>
    <div>
        <el-check-tag :checked="true">足球</el-check-tag>
        <el-check-tag :checked="false">篮球</el-check-tag>
    </div>
</template>