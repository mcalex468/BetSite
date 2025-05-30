import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Links from '../views/Links.vue'
import Contact from '../views/Contact.vue'
import Manual from '../views/Manual.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/links', name: 'Links', component: Links },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/manual', name: 'Manual', component: Manual }, // 👈 Ruta añadida
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
