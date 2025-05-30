<template>
    <section class="contact-wrapper">
        <h1>Contacto</h1>
        <p>Síguenos o contáctanos a través de nuestras redes:</p>

        <div class="links">
            <a href="https://t.me/tu_telegram" target="_blank" rel="noopener" class="social-link">Telegram</a>
            <a href="https://tiktok.com/@tu_cuenta" target="_blank" rel="noopener" class="social-link">TikTok</a>
            <a href="https://instagram.com/tu_cuenta" target="_blank" rel="noopener" class="social-link">Instagram</a>
        </div>

        <form @submit.prevent="sendEmail" class="contact-form">
            <h2>¿Quieres crear tu propio negocio de afiliación?</h2>

            <div class="inputGroup">
                <input type="text" id="name" v-model="form.name" placeholder=" " required />
                <label for="name">Nombre</label>
            </div>

            <div class="inputGroup">
                <input type="text" id="social" v-model="form.social" placeholder=" " />
                <label for="social">Redes sociales (Telegram, Instagram...)</label>
            </div>

            <div class="inputGroup">
                <input type="email" id="email" v-model="form.email" placeholder=" " required />
                <label for="email">Correo Electrónico</label>
            </div>

            <div class="inputGroup">
                <textarea id="message" v-model="form.message" placeholder=" " rows="4" required></textarea>
                <label for="message">Mensaje</label>
            </div>

            <button type="submit" class="btnContacto">Enviar Mensaje</button>
        </form>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    name: '',
    social: '',
    email: '',
    message: ''
})

function sendEmail() {
    const subject = encodeURIComponent('Interesado en crear negocio de afiliación')
    const body = encodeURIComponent(
        `Nombre: ${form.name}\n` +
        `Redes sociales: ${form.social}\n` +
        `Correo: ${form.email}\n\n` +
        `Mensaje:\n${form.message}`
    )

    window.location.href = `mailto:betzoneone@gmail.com?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-wrapper {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    background: linear-gradient(to right, #1d976c, #93f9b9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 1.5rem;
}

.links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.social-link {
    display: inline-block;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #32a74d, #1d976c);
    color: white;
    font-weight: 700;
    font-size: 1.3rem;
    border-radius: 30px;
    text-decoration: none;
    min-width: 140px;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.social-link:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.contact-form {
    background: white;
    padding: 2rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
    text-align: left;
}

.contact-form h2 {
    color: #1d976c;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
}

.inputGroup {
    position: relative;
    margin-bottom: 1.5rem;
}

.inputGroup input,
.inputGroup textarea {
    width: 100%;
    padding: 0.9rem 0.8rem;
    border: 2px solid #1d976c;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    background: #fdfdfd;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.inputGroup input:focus,
.inputGroup textarea:focus {
    border-color: #32a74d;
    box-shadow: 0 0 0 3px rgba(50, 167, 77, 0.15);
}

.inputGroup label {
    position: absolute;
    top: 50%;
    left: 0.9rem;
    transform: translateY(-50%);
    color: #777;
    pointer-events: none;
    transition: 0.2s ease;
    background: white;
    padding: 0 0.3rem;
    font-size: 0.95rem;
}

.inputGroup input:focus+label,
.inputGroup input:not(:placeholder-shown)+label,
.inputGroup textarea:focus+label,
.inputGroup textarea:not(:placeholder-shown)+label {
    top: -0.6rem;
    font-size: 0.8rem;
    color: #1d976c;
}

button[type="submit"],
.btnContacto {
    width: 100%;
    padding: 0.8rem;
    background: linear-gradient(to right, #32a74d, #1d976c);
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover,
.btnContacto:hover {
    transform: scale(1.03);
    background: linear-gradient(to right, #1d976c, #32a74d);
}
</style>
