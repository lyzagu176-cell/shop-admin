<script setup>
import {ref} from 'vue'
// 简单的计数器功能
const count = ref(0)
function increment() {
  count.value ++
}
import counter from '../CounterState'
const store = counter()
</script>
<template>
  <h1>计数器2:{{ count }}</h1>
  <button @click="increment">增加</button>

  <h1 @click="store.count++">Pinia计数器2:{{ store.count }}</h1>
</template>
