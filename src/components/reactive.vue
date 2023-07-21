<template>
  <div id="msg">{{ msg }}</div>
  <div>name:{{ student.name }}</div>
</template>
<script setup lang="ts">
import { reactive, shallowReactive, isReactive, ref, nextTick } from 'vue'
const msg = ref('1')
// 深层响应式
const hero = reactive({ name: 'super' })

console.log('msg', msg)
console.log('hero', hero)

setTimeout(() => {
  msg.value += 2
  // DOM 的更新并不是同步的，原因
  // 1. 不能阻塞js运行吧
  // 2. 多次状态发生变化，只更新一次
  nextTick(() => {
    console.log('msg html', document.querySelector('#msg')?.innerHTML)
  })
}, 5000)

let student = reactive({ name: 'c' })

setTimeout(() => {
  student = reactive({ name: 'd' })
  student.name = 'e'
}, 1000)

// reactive() 的浅层作用形式
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

console.log(isReactive(msg.value))
console.log(isReactive(state))
console.log(isReactive(state.foo))
console.log(isReactive(state.nested))
</script>
