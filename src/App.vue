<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import reacitiveCom from './components/reactive.vue'
// import computedCom from './components/computed.vue'
console.log('enter app');
import { useRoute } from "vue-router"
console.log('app useRoute', useRoute());

</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <reacitive-com></reacitive-com> -->
  <!-- <computedCom></computedCom> -->
  <router-view></router-view>
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
