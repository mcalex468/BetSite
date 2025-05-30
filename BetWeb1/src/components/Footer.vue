<template>
    <footer class="footer">
        <div class="footer-content">
            <p>© 2025 Bet Zone One — Todos los derechos reservados.</p>

            <div class="social-icons">
                <a href="https://www.instagram.com/tuusuario" target="_blank" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://t.me/tuusuario" target="_blank" aria-label="Telegram">
                    <i class="fab fa-telegram-plane"></i>
                </a>
                <a href="https://www.tiktok.com/@tuusuario" target="_blank" aria-label="TikTok">
                    <i class="fab fa-tiktok"></i>
                </a>
                <RouterLink to="/contact" aria-label="Contacto">
                    <i class="fas fa-envelope"></i>
                </RouterLink>
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.footer {
    background: linear-gradient(to right, #1d976c, #93f9b9);
    padding: 2rem 1rem;
    text-align: center;
    color: #2f4f2f;
    font-weight: 600;
    font-size: 0.95rem;
    transition: background 0.3s ease;
}

.footer:hover {
    font-weight: 700;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.social-icons {
    display: flex;
    gap: 1.5rem;
    font-size: 1.5rem;
}

.social-icons a,
.social-icons RouterLink {
    color: #2f4f2f;
    transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover,
.social-icons RouterLink:hover {
    color: #000;
    transform: scale(1.2);
}
</style>
