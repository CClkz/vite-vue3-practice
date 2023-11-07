<script lang="ts" setup>
import { useRoute } from 'vue-router'
console.log('home useRoute', useRoute())
import { api } from '../utils/api'

console.log('about api', api)

// setInterval(() => {
//   console.log('enter about api', api)
// }, 2000)
// setTimeout(() => {
//   api.info = 'about'
//   console.log('set api.info about')
// }, 3000)
</script>
<template>
  <div>about</div>
  <router-link to="/">to home</router-link>
</template>
