import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import SliderVerify from './components/slide-verify/index.js'

const app = createApp(App)
app.use(ElementPlus)
// app.use(SliderVerify)
app.mount('#app')
