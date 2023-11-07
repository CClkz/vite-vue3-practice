<script lang="ts" setup>
console.log('enter home')
import { api } from '../utils/api'
console.log('home api', api)

</script>
<template>
  <div>home</div>
  <router-link to="/about">to about</router-link>
</template>
