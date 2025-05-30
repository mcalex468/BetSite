<template>
    <section class="containerContacto">
        <h1 class="tituloContacto">Contáctanos</h1>
        <p class="textoContacto">
            Síguenos en nuestras redes sociales o contáctanos si estás interesado en montar tu propio negocio con
            nosotros.
        </p>

        <div class="redesContainer">
            <div class="red telegram">
                <i class="fab fa-telegram-plane"></i>
                <span>Telegram</span>
            </div>
            <div class="red instagram">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
            </div>
            <div class="red tiktok">
                <i class="fab fa-tiktok"></i>
                <span>TikTok</span>
            </div>
        </div>

        <form @submit.prevent="handleContact" class="formulario">
            <div class="inputGroup">
                <input id="name" v-model="contact.name" type="text" required placeholder=" " />
                <label for="name">Nombre completo</label>
            </div>

            <div class="inputGroup">
                <input id="network" v-model="contact.network" type="text" required placeholder=" " />
                <label for="network">Red social</label>
            </div>

            <div class="inputGroup">
                <input id="email" v-model="contact.email" type="email" required placeholder=" " />
                <label for="email">Correo electrónico</label>
            </div>

            <div class="inputGroup">
                <textarea id="message" v-model="contact.message" required placeholder=" "></textarea>
                <label for="message">Mensaje</label>
            </div>

            <button type="submit">Enviar mensaje</button>
        </form>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const contact = reactive({
    name: '',
    network: '',
    email: '',
    message: ''
})

function handleContact() {
    // Aquí podrías luego integrar un backend o servicio de correo
    alert(`📩 Mensaje enviado a betzoneone@gmail.com:\n\nNombre: ${contact.name}\nRed Social: ${contact.network}\nEmail: ${contact.email}\nMensaje: ${contact.message}`)
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.containerContacto {
    max-width: 700px;
    margin: 3rem auto 7rem;
    padding: 2rem;
    text-align: left;
    background: #fff;
    border-radius: 1rem;
    border: 2px solid var(--color-primary);
}

.tituloContacto {
    font-size: clamp(2rem, 2.5vw, 3rem);
    color: var(--color-primary);
    margin-top: -1rem;
    margin-bottom: 1.5rem;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    user-select: none;
    text-shadow: 0 2px 4px rgba(79, 70, 229, 0.25);
}

.textoContacto {
    margin-bottom: 2.5rem;
    color: #4b5563;
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: 0.02em;
}

.redesContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.red {
    background: #f0f4ff;
    border-radius: 1rem;
    padding: 2rem;
    width: 150px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, background 0.3s ease;
    cursor: pointer;
}

.red:hover {
    transform: scale(1.05);
    background: var(--color-primary-light, #e0e7ff);
}

.red i {
    font-size: 2.8rem;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
}

.red span {
    font-weight: 700;
    color: var(--color-primary);
    display: block;
    font-size: 1.1rem;
}

.formulario {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
}

.inputGroup {
    position: relative;
    width: 100%;
}

input,
textarea {
    width: 100%;
    padding: 1.2rem 1rem 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text);
    background: #f8f9ff;
    border: none;
    border-radius: 0.75rem;
    box-shadow: inset 5px 5px 10px #d1d5db, inset -5px -5px 10px #ffffff;
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
    font-family: var(--font-family);
    resize: vertical;
    min-height: 60px;
}

input:focus,
textarea:focus {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px var(--color-primary), inset 5px 5px 10px #b5b8c3, inset -5px -5px 10px #ffffff;
}

label {
    position: absolute;
    left: 1rem;
    top: 0.6rem;
    color: #999;
    font-weight: 500;
    font-size: 1rem;
    pointer-events: none;
    transition: all 0.3s ease;
    background: transparent;
    padding: 0 0.25rem;
    user-select: none;
}

input:focus+label,
input:not(:placeholder-shown)+label,
textarea:focus+label,
textarea:not(:placeholder-shown)+label {
    top: 0.2rem;
    font-size: 0.8rem;
    color: var(--color-primary);
    font-weight: 700;
    letter-spacing: 0.05em;
}

button[type="submit"] {
    align-self: flex-start;
    padding: 0.85rem 2.25rem;
    font-size: 1.125rem;
    font-weight: 800;
    color: #fff;
    background: linear-gradient(135deg, #32a74d, #1d976c);
    border: none;
    border-radius: 1.25rem;
    cursor: pointer;
    user-select: none;
    transition: background 0.4s ease, color 0.4s ease, box-shadow 0.3s ease;
    box-shadow: 5px 5px 15px rgba(50, 167, 77, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.7);
}

button[type="submit"]:hover,
button[type="submit"]:focus {
    background: linear-gradient(135deg, #1d976c, #32a74d);
    color: #fff;
}
</style>
