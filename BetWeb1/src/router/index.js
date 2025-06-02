import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Links from '../views/Links.vue'
import Contact from '../views/Contact.vue'
import Manual from '../views/Manual.vue'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/links', name: 'Links', component: Links, meta: { requiresAuth: true } }, // aquí
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/manual', name: 'Manual', component: Manual },
    { path: '/auth', name: 'Auth', component: Auth },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/register', redirect: '/auth' },
    { path: '/login', redirect: '/auth' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = !!localStorage.getItem('token')

    if (requiresAuth && !isAuthenticated) {
        next('/auth')
    } else {
        next()
    }
})

export default router
