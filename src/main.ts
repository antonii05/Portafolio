import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as gsapPlugins from '@/dependencies/gsap-plugins'
import { gsap } from 'gsap'

// Importa los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importa los scripts de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

gsap.registerPlugin(gsapPlugins)
const app = createApp(App)

app.use(router)
app.use(gsap)

app.mount('#app')
