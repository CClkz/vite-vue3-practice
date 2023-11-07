
console.log('enter api')
import { useRoute } from "vue-router"
console.log('api useRoute', useRoute());

let base = '/lightapp'

const api = (() => {
  console.log('api func');
  return {
    login: '/login',
    logout: '/logout',
    info: base + '/info'
  }
})()

export { api }
