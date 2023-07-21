// import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// console.log('App', App);
const app = createApp(App)
// console.log('app', app);
// app.config.errorHandler = (err) => { }
app.mount('#app')
