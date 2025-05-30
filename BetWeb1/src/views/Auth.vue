<template>
    <section class="auth-wrapper">
        <div class="auth-toggle">
            <button :class="{ active: isLogin }" @click="isLogin = true">Iniciar Sesión</button>
            <button :class="{ active: !isLogin }" @click="isLogin = false">Registrarse</button>
        </div>

        <form @submit.prevent="isLogin ? handleLogin() : handleRegister()">
            <div class="inputGroup" v-if="!isLogin">
                <input type="text" placeholder=" " v-model="form.nombre" required />
                <label>Nombre</label>
            </div>

            <div class="inputGroup">
                <input type="email" placeholder=" " v-model="form.email" required />
                <label>Email</label>
            </div>

            <div class="inputGroup" v-if="!isLogin">
                <input type="number" placeholder=" " v-model="form.edad" required />
                <label>Edad</label>
            </div>

            <div class="inputGroup" v-if="!isLogin">
                <input type="text" placeholder=" " v-model="form.poblacion" required />
                <label>Población</label>
            </div>

            <div class="inputGroup">
                <input type="password" placeholder=" " v-model="form.password" required />
                <label>Contraseña</label>
            </div>

            <button type="submit">{{ isLogin ? 'Entrar' : 'Registrarse' }}</button>
        </form>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const isLogin = ref(true)

const form = reactive({
    nombre: '',
    email: '',
    edad: '',
    poblacion: '',
    password: ''
})

function handleLogin() {
    // Aquí harás la llamada a tu backend
    console.log('Login:', form)
    // Ejemplo: await axios.post('/api/login', form)
}

function handleRegister() {
    // Aquí harás la llamada a tu backend
    console.log('Registro:', form)
    // Ejemplo: await axios.post('/api/register', form)
}
</script>

<style scoped>
.auth-wrapper {
    max-width: 500px;
    margin: auto;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.auth-toggle {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.auth-toggle button {
    padding: 0.8rem 1.5rem;
    border: none;
    background: #eee;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px 5px 0 0;
}

.auth-toggle button.active {
    background: #1d976c;
    color: white;
}

.inputGroup {
    margin-bottom: 1.2rem;
    position: relative;
}

.inputGroup input {
    width: 100%;
    padding: 0.9rem 0.8rem;
    border: 2px solid #1d976c;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    background: #fdfdfd;
}

.inputGroup label {
    position: absolute;
    top: 50%;
    left: 0.9rem;
    transform: translateY(-50%);
    color: #777;
    background: white;
    padding: 0 0.3rem;
    transition: 0.2s ease;
    font-size: 0.95rem;
    pointer-events: none;
}

.inputGroup input:focus+label,
.inputGroup input:not(:placeholder-shown)+label {
    top: -0.6rem;
    font-size: 0.8rem;
    color: #1d976c;
}

button[type="submit"] {
    width: 100%;
    padding: 0.8rem;
    background: linear-gradient(to right, #32a74d, #1d976c);
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.2s;
}

button[type="submit"]:hover {
    transform: scale(1.03);
}
</style>
