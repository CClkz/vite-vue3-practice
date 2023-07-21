<script setup lang="ts">
defineProps<{ msg: string }>()
// const html = "<span>1111</span>"
const binds = {
  id: 'three',
  class: 'three'
}

</script>

<template>
  <!-- <h1>{{ html }}</h1> -->
  <!-- XSS 漏洞 -->
  <!-- <h1 v-html="html"></h1> -->
  <div :="binds">多个啊</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
