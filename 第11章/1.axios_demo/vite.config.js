import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 这里是默认生成的，不用关心
  plugins: [vue()], 
  // 配置服务器
  server: {
    proxy: {
      // 对以/myApi开头的请求进行代理
      '/myApi': {
        // 将请求目标指定到接口服务地址
        target: 'http://apis.juhe.cn/',
        // 设置允许跨域
        changeOrigin: true,
        // 重写路径，将/myApi即之前的内容清除
        rewrite: (path) => path.replace(/^\/myApi/, '')
      }
    }
  }
})
