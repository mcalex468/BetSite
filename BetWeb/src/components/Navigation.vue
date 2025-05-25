<template>
    <nav>
        <div><strong>Afiliados PRO</strong></div>
        <div>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/links">Links</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
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
    transition: color 0.3s ease;
}

nav a.router-link-active,
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
