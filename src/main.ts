import { createApp } from 'vue/dist/vue.esm-bundler.js'
// import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


// console.log('App', App);
const app = createApp(App)
// console.log('app', app);
// app.config.errorHandler = (err) => { }

app.use(router)
app.mount('#app')
