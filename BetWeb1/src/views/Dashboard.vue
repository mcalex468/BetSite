<template>
    <section class="dashboard" v-if="user">
        <h1>Bienvenido al panel, {{ user.name }}</h1>

        <div class="user-info" @click="enableEdit" v-if="!editing">
            <p><strong>Nombre:</strong> {{ user.name }}</p>
            <p><strong>Correo:</strong> {{ user.email }}</p>
            <p><strong>Edad:</strong> {{ user.age }}</p>
            <p><strong>Ciudad:</strong> {{ user.city }}</p>
            <p><strong>Código Postal:</strong> {{ user.postalCode || '-' }}</p>
            <p><strong>DNI:</strong> {{ user.dni || '-' }}</p>
        </div>

        <form v-else @submit.prevent="saveUser">
            <label>
                Nombre:
                <input v-model="editForm.name" required />
            </label>
            <label>
                Correo:
                <input v-model="editForm.email" type="email" required />
            </label>
            <label>
                Edad:
                <input v-model.number="editForm.age" type="number" min="18" required />
            </label>
            <label>
                Ciudad:
                <input v-model="editForm.city" required />
            </label>
            <label>
                Código Postal:
                <input v-model="editForm.postalCode" />
            </label>
            <label>
                DNI:
                <input v-model="editForm.dni" />
            </label>

            <button type="submit">Guardar</button>
            <button type="button" @click="cancelEdit">Cancelar</button>
        </form>

        <nav>
            <ul>
                <li><a href="#" @click.prevent="goPanel">Panel</a></li>
                <li><a href="#" @click.prevent="logout">Cerrar sesión</a></li>
                <li><a href="#" @click.prevent="goChangePassword">Cambiar contraseña</a></li>
                <li><a href="#" @click.prevent="goSupport">Soporte</a></li>
            </ul>
        </nav>
    </section>

    <section v-else class="loading">
        <p>Cargando usuario...</p>
    </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)
const editing = ref(false)
const editForm = reactive({
    name: '',
    email: '',
    age: null,
    city: '',
    postalCode: '',
    dni: ''
})

function loadUser() {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
        try {
            user.value = JSON.parse(storedUser)
        } catch {
            user.value = null
        }
    } else {
        user.value = null
    }
}

function enableEdit() {
    if (!user.value) return
    editing.value = true
    // Copiar info a formulario para editar
    editForm.name = user.value.name || ''
    editForm.email = user.value.email || ''
    editForm.age = user.value.age || null
    editForm.city = user.value.city || ''
    editForm.postalCode = user.value.postalCode || ''
    editForm.dni = user.value.dni || ''
}

async function saveUser() {
    try {
        // Validaciones básicas aquí, o las tienes en backend también
        if (!editForm.name.trim() || !editForm.email.trim() || !editForm.city.trim()) {
            alert('Por favor, completa todos los campos requeridos.')
            return
        }
        if (editForm.age < 18) {
            alert('Debes ser mayor de 18 años.')
            return
        }

        const token = localStorage.getItem('token')
        const res = await fetch('http://localhost:3000/api/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: editForm.name.trim(),
                email: editForm.email.trim(),
                age: editForm.age,
                postalCode: editForm.postalCode.trim(),
                city: editForm.city.trim(),
                dni: editForm.dni.trim()
            })
        })

        let data = null
        const text = await res.text()
        try {
            data = text ? JSON.parse(text) : {}
        } catch {
            data = {}
        }

        if (res.ok) {
            alert('Datos actualizados correctamente')
            // Actualizamos localStorage y estado
            user.value = { ...user.value, ...editForm }
            localStorage.setItem('user', JSON.stringify(user.value))
            editing.value = false
        } else {
            alert('Error al actualizar: ' + (data.error || 'Error desconocido'))
        }
    } catch (error) {
        alert('Error en la conexión')
        console.error(error)
    }
}

function cancelEdit() {
    editing.value = false
}

function logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    user.value = null
    router.push('/auth')
}

function goPanel() {
    alert('Sección Panel')
}

function goChangePassword() {
    router.push('/change-password')
}

function goSupport() {
    router.push('/support')
}

onMounted(() => {
    loadUser()
    if (!user.value) {
        router.push('/auth')
    }
})
</script>

<style scoped>
.dashboard {
    padding: 2rem;
}

.user-info {
    border-radius: 12px;
    background: #f0f8f9;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(29, 151, 108, 0.2);
}

form label {
    display: block;
    margin-bottom: 1rem;
}

form input {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 100%;
}

form button {
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    background: #1d976c;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

form button:hover {
    background: #32a74d;
}

nav ul {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
}

nav li {
    margin: 1rem 0;
}

nav a {
    color: var(--color-primary);
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
}
</style>
