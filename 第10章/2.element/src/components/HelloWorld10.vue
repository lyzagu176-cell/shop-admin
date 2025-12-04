<script setup>
import {ref} from  'vue'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
function popTip() {
    ElMessage({
        message: "提示内容",
        type: "warning",
    });
}
function popAlert() {
    ElMessageBox({
        title: "提示",
        message: "详细的提示内容",
        type: "warning",
        showCancelButton: true,
        showConfirmButton: true,
        showInput: true,
    });
} 
function notify() {
    ElNotification({
        title: "通知标题",
        message: "通知内容",
        type: "success",
        duration: 3000,
        position: "top-right",
    });
}
</script>

<template>
<el-alert title="成功提示的文案" type="success"> </el-alert>
<br />
<el-alert title="消息提示的文案" type="info"> </el-alert>
<br />
<el-alert title="警告提示的文案" type="warning"> </el-alert>
<br />
<el-alert title="错误提示的文案" type="error"> </el-alert>
<el-button @click="popTip">弹出信息提示</el-button>
<el-button @click="popAlert">弹出Alert提示</el-button>
<el-button @click="notify">弹出通知</el-button>
</template>