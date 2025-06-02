<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <span class="gradient-text">Bet Zone One</span>
            </div>

            <div class="menu-icon" @click="toggleMenu">
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
            </div>

            <div :class="['links', { open: isOpen }]">
                <RouterLink to="/" exact-active-class="active">Inicio</RouterLink>
                <RouterLink to="/manual" exact-active-class="active">Manual</RouterLink>
                <RouterLink to="/contact" exact-active-class="active">Contacto</RouterLink>
                <template v-if="user">
                    <RouterLink to="/links" exact-active-class="active">Bonos</RouterLink>
                    <RouterLink to="/dashboard" exact-active-class="active">Dashboard</RouterLink>
                </template>
            </div>

            <div class="user-section">
                <template v-if="user">
                    <RouterLink to="/dashboard" class="user-name" title="Ir al Dashboard">
                        {{ user.name }}
                    </RouterLink>
                    <button @click="logout" class="logout-button">Salir</button>
                </template>
                <template v-else>
                    <RouterLink to="/auth" class="login-link" title="Iniciar sesión o registrarse">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M3 10a1 1 0 011-1h8.586l-2.293-2.293a1 1 0 111.414-1.414l4.586 4.586a1 1 0 010 1.414l-4.586 4.586a1 1 0 11-1.414-1.414L12.586 11H4a1 1 0 01-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                    </RouterLink>
                </template>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const user = ref(null)
const router = useRouter()

function toggleMenu() {
    isOpen.value = !isOpen.value
}

function logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    user.value = null
    router.push('/auth')
}

// Carga inicial de usuario
function loadUser() {
    const storedUser = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (storedUser && token) {
        try {
            user.value = JSON.parse(storedUser)
        } catch {
            user.value = null
        }
    } else {
        user.value = null
    }
}

onMounted(() => {
    loadUser()

    // Escuchar evento para actualizar user cuando se loguea o registra
    window.addEventListener('user-logged-in', loadUser)
})

// Para limpiar el listener al desmontar el componente
import { onBeforeUnmount } from 'vue'
onBeforeUnmount(() => {
    window.removeEventListener('user-logged-in', loadUser)
})
</script>

<style scoped>
.gradient-text {
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(to right, #1d976c, #93f9b9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.navbar {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    padding: 1rem;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    font-size: 1.5rem;
    color: #222;
}

.links {
    display: flex;
    gap: 1rem;
    transition: max-height 0.3s ease;
}

.links a {
    position: relative;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding-bottom: 4px;
    transition: color 0.3s ease;
}

.links a.active,
.links a:hover {
    color: #2ae48d;
}

.links a::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: #2ae48d;
    transition: width 0.3s ease;
    position: absolute;
    left: 0;
    bottom: 0;
}

.links a:hover::after,
.links a.active::after {
    width: 100%;
}

.menu-icon {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.menu-icon span {
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: all 0.3s ease;
}

.menu-icon span.open:nth-child(1) {
    transform: rotate(45deg) translateY(8px);
}

.menu-icon span.open:nth-child(2) {
    opacity: 0;
}

.menu-icon span.open:nth-child(3) {
    transform: rotate(-45deg) translateY(-8px);
}

.user-section {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.user-name {
    font-weight: 600;
    color: #1d976c;
}

.logout-button {
    padding: 0.4rem 0.8rem;
    background: #1d976c;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
}

.logout-button:hover {
    background: #32a74d;
}

.login-link {
    color: #1d976c;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon {
    width: 24px;
    height: 24px;
}

@media (max-width: 768px) {
    .menu-icon {
        display: flex;
    }

    .links {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
        max-height: 0;
    }

    .links.open {
        max-height: 300px;
        margin-top: 1rem;
    }

    .links a {
        padding: 0.5rem 0;
    }

    .user-section {
        margin-top: 1rem;
        justify-content: flex-end;
    }
}
</style>
