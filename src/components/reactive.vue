<template>
  <div id="msg">{{ msg }}</div>
  <div>name:{{ student.name }}</div>
  <div>test2:{{ o2.count }}{{ s2.count }}</div>
</template>
<script setup lang="ts">
import { reactive, shallowReactive, isReactive, ref, nextTick } from 'vue'

const SPLIT = '##########'

console.log(SPLIT, '测试ref')
/**
 * ref
 */
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
}, 2000)

console.log(SPLIT, '测试reactive')
/**
 * reactive
 */
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

console.log(SPLIT, '测试reactive和原始对象')
const o2 = { count: 0 }
const s2 = reactive(o2)
nextTick(() => {
  o2.count++
  console.log(s2.count)
})

console.log(SPLIT, '测试reacttive使用ref')
const ref3 = ref(0)
const react3 = reactive({
  count: ref3
})
ref3.value = 1
console.log('react3.count', react3.count)
react3.count = 2
console.log('ref3', ref3.value)
</script>
