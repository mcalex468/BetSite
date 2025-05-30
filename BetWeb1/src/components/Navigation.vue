<template>
    <nav>
        <div class="logo"><strong>Bet Zone</strong></div>
        <div class="links">
            <RouterLink to="/" exact-active-class="active">Inicio</RouterLink>
            <RouterLink to="/links" exact-active-class="active">Bonos</RouterLink>
            <RouterLink to="/contact" exact-active-class="active">Contacto</RouterLink>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped>
nav {
    text-align: center;
    padding: 1.5rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

.logo {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.links a {
    margin: 0 1rem;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.links a.active,
.links a:hover {
    color: #2a7ae4;
}
</style>
