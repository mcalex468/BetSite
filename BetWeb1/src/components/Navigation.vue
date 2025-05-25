<template>
    <nav>
        <div><strong>Afiliados PRO</strong></div>
        <div>
            <RouterLink to="/" exact-active-class="active">Inicio</RouterLink>
            <RouterLink to="/links" exact-active-class="active">Bonos</RouterLink>
            <RouterLink to="/contact" exact-active-class="active">Contacto</RouterLink>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    flex-wrap: wrap;
}

nav a {
    margin-right: 1rem;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

nav a.active,
nav a:hover {
    color: #2a7ae4;
}

@media (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: flex-start;
    }

    nav a {
        margin: 0.5rem 0;
    }
}
</style>
