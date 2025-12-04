<script setup>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue';
import HelloWorld3 from './components/HelloWorld3.vue';
import HelloWorld4 from './components/HelloWorld4.vue';
import HelloWorld5 from './components/HelloWorld5.vue';
import HelloWorld6 from './components/HelloWorld6.vue';
import HelloWorld7 from './components/HelloWorld7.vue';
import HelloWorld8 from './components/HelloWorld8.vue';
import HelloWorld9 from './components/HelloWorld9.vue';
import HelloWorld10 from './components/HelloWorld10.vue';
import HelloWorld11 from './components/HelloWorld11.vue';
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <HelloWorld2 />
  <HelloWorld3 />
  <HelloWorld4 />
  <HelloWorld5 />
  <HelloWorld6 />
  <HelloWorld7 />
  <HelloWorld8 />
  <HelloWorld9 />
  <HelloWorld10 />
  <HelloWorld11 />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
