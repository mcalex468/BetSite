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
                <RouterLink to="/links" exact-active-class="active">Bonos</RouterLink>
                <RouterLink to="/contact" exact-active-class="active">Contacto</RouterLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
    isOpen.value = !isOpen.value
}
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
}
</style>
