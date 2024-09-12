import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

/* FONTAWESOME */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Agregar íconos a la librería
library.add(fas,fab,far);

/* GSAP */
import * as gsapPlugins from '@/dependencies/gsap-plugins'
import { gsap } from 'gsap'

// Importa los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-plus/dist/index.css'
import './assets/css/style.css'

// Importa los scripts de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

gsap.registerPlugin(gsapPlugins)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(ElementPlus)
app.use(router)
app.use(gsap)

app.mount('#app')
