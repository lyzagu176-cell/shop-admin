<script setup>
import { ref, onMounted } from 'vue'
const msg = ref("")
const loading = ref(true)
function getData() {
    msg.value = "这里是请求到的数据"
    loading.value = false
}
onMounted(()=>{
    setTimeout(() => {
        getData()
    }, 3000);
})
</script>

<template>
    <el-empty description="设置空态图的描述文案" :image-size="400"></el-empty>
    <el-empty>
        <!-- image具名插槽用来替换默认的图片部分 -->
        <template v-slot:image>
            <div>这里是自定义图片位置</div>
        </template>
        <!-- description具名插槽用来替换默认的描述部分 -->
        <template v-slot:description>
            <h3>自定义描述内容</h3>
        </template>
        <!-- 默认的插槽用来在空态图的尾部追加内容 -->
        <el-button>看看其他内容</el-button>
    </el-empty>
    <el-skeleton :rows="10" :animated="true"></el-skeleton>
    <el-skeleton :animated="true">
        <template #template>
            <!-- 定义标题骨架 -->
            <el-skeleton-item variant="h1" style="width: 100px; height: 30px; padding:0"/>
            <!-- 定义图片骨架 -->
            <el-skeleton-item variant="image" style="width: 240px; height: 240px; padding:0" />
            <!-- 定义段落骨架 -->
            <el-skeleton-item variant="p" style="width: 30%; padding:0; margin-top:20px"/>
            <el-skeleton-item variant="p" style="width: 90%; padding:0"/>
            <el-skeleton-item variant="p" style="width: 90%; padding:0"/>
        </template>
    </el-skeleton>
    <el-skeleton :rows="1" :animated="true" :loading="loading">
        <h1>这里是真实的页面元素</h1>
        <p>{{msg}}</p>
    </el-skeleton>
</template>