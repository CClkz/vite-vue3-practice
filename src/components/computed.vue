<script setup>
import { ref, reactive, computed } from 'vue'

const book = ref('aa')
const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})

// 一个计算属性 ref
// const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })

const publishedBooksMessageFn = () => {
  console.log('enter publishedBooksMessageFn')
  return author.books.length > 0 ? 'Yes' : 'No'
}

setTimeout(() => {
  console.log('2s')
  author.books = []
}, 2000)
setTimeout(() => {
  console.log('3s')
  book.value = '2aa'
}, 3000)
</script>

<template>
  <p>Has published books:</p>
  <span>{{ book }}</span>
  <!-- <span>{{ publishedBooksMessage }}</span> -->
  <span>{{ publishedBooksMessageFn() }}</span>
</template>
