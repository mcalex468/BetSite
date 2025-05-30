<template>
    <section class="containerContacto">
        <h1 class="tituloContacto">{{ isLogin ? 'Iniciar Sesión' : 'Registro' }}</h1>
        <p class="textoContacto">
            {{ isLogin ? 'Accede a tu cuenta para empezar a generar' : 'Crea tu cuenta para tener acceso a los links' }}
        </p>

        <form @submit.prevent="handleSubmit" class="formulario">
            <div class="inputGroup" v-if="!isLogin">
                <input id="name" v-model="form.name" type="text" required placeholder=" " />
                <label for="name">Nombre completo</label>
            </div>

            <div class="inputGroup">
                <input id="email" v-model="form.email" type="email" required placeholder=" " />
                <label for="email">Correo electrónico</label>
            </div>

            <div class="inputGroup" v-if="!isLogin">
                <input id="age" v-model="form.age" type="number" required placeholder=" " min="18" />
                <label for="age">Edad</label>
            </div>

            <div class="inputGroup" v-if="!isLogin">
                <input id="postalCode" v-model="form.postalCode" type="text" required placeholder=" " pattern="\\d{5}"
                    title="Código postal de 5 dígitos" />
                <label for="postalCode">Código Postal</label>
            </div>

            <div class="inputGroup" v-if="!isLogin">
                <input id="dni" v-model="form.dni" type="text" required placeholder=" " pattern="[0-9A-Za-z]{8,12}"
                    title="DNI válido (8 a 12 caracteres)" />
                <label for="dni">DNI</label>
            </div>

            <div class="inputGroup">
                <input id="password" v-model="form.password" type="password" required placeholder=" " />
                <label for="password">Contraseña</label>
            </div>

            <button type="submit">
                {{ isLogin ? 'Iniciar Sesión' : 'Registrarse' }}
            </button>

            <div class="toggle-login">
                <span @click="toggleForm">
                    {{ isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión' }}
                </span>
            </div>
        </form>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const isLogin = ref(true)

const form = reactive({
    name: '',
    email: '',
    age: '',
    postalCode: '',
    dni: '',
    password: ''
})

function toggleForm() {
    isLogin.value = !isLogin.value
    form.name = ''
    form.email = ''
    form.age = ''
    form.postalCode = ''
    form.dni = ''
    form.password = ''
}

function handleSubmit() {
    if (isLogin.value) {
        alert(`🔐 Iniciando sesión con:\nCorreo: ${form.email}\nContraseña: ${form.password}`)
    } else {
        if (form.age < 18) {
            alert('🚫 Debes tener al menos 18 años para registrarte.')
            return
        }
        // Puedes agregar validación más avanzada para DNI y Código Postal si quieres aquí
        alert(`✅ Registrando:\nNombre: ${form.name}\nCorreo: ${form.email}\nEdad: ${form.age}\nCódigo Postal: ${form.postalCode}\nDNI: ${form.dni}`)
    }
}
</script>

<style scoped>
.containerContacto {
    max-width: 600px;
    margin: 3rem auto 7rem;
    padding: 1.5rem;
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

.formulario {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
}

.formulario .inputGroup {
    position: relative;
    width: 100%;
}

input {
    box-sizing: border-box;
    width: 100%;
    padding: 1.2rem 1rem 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text);
    background: #f8f9ff;
    border: none;
    border-radius: 0.75rem;
    box-shadow: inset 5px 5px 10px #d1d5db, inset -5px -5px 10px #ffffff;
    resize: vertical;
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
    font-family: var(--font-family);
}

input:focus {
    outline: none;
    background: #fff;
    box-shadow:
        0 0 0 3px var(--color-primary),
        inset 5px 5px 10px #b5b8c3,
        inset -5px -5px 10px #ffffff;
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
input:not(:placeholder-shown)+label {
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
    transition:
        background 0.4s ease,
        color 0.4s ease,
        box-shadow 0.3s ease;
    box-shadow:
        5px 5px 15px rgba(50, 167, 77, 0.3),
        -5px -5px 15px rgba(255, 255, 255, 0.7);
}

button[type="submit"]:hover,
button[type="submit"]:focus {
    background: linear-gradient(135deg, #1d976c, #32a74d);
    color: #fff;
}

/* Estilos del texto toggle de login */
.toggle-login {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.95rem;
    font-weight: 500;
}

.toggle-login span {
    color: var(--color-primary);
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: underline;
}

.toggle-login span:hover {
    color: #32a74d;
}
</style>
