import { createApp } from 'vue'
import App from './App.vue'
import accueil from './page/accueil.vue'
import page from './page/Page.vue'
import './style/index.scss'

//faire le router ici
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: accueil },
    { path: '/page', component: page }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
