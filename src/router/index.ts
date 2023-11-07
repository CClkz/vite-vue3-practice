import { createRouter, createWebHashHistory } from "vue-router"

import Home from '../views/Home.vue'
import About from '../views/About.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({ history: createWebHashHistory(), routes })

router.beforeEach((to, from, next) => {
  console.log('to,from,next', to, from);
  // next()
  // next('/about')
  if (to.path === '/') {
    setTimeout(() => {
      console.log('2000');
      
      next('/about')
    }, 2000);
  } else {
    next()
  }
  console.log(11111111)
})

export default router