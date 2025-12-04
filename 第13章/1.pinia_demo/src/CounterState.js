import { defineStore } from "pinia";
// 定义一个状态仓库counter
export default defineStore('counter', {
    // 定义需要使用的状态数据
    state: () => {
        return {
            count: 0
        }
    }
})

import {ref, computed} from  'vue'
const userInfoStore = defineStore('userInfo', () => {
    // setup方法用法一致
    const name = ref("nick")
    const age = ref(15)
    function incrementAge() {
        age.value += 1
    }
    const ageString = computed(()=>{
        return age.value + '岁'
    })
    return {name, age, incrementAge, ageString}
})

export {userInfoStore}