<template>
    <section class="manual-wrapper">
        <h1>Bonos y Promociones</h1>

        <!-- Bonos 30€ -->
        <div class="bonus-section">
            <h3>Bonos 30€</h3>
            <div class="grid">
                <div v-for="casa in casas30" :key="casa.nombre" class="card" @click="selectCasa(casa)">
                    <img :src="casa.img" :alt="casa.nombre" />
                    <button @click.stop="window.open(casa.link, '_blank')" class="cta-button">
                        Registrarse
                    </button>
                </div>
            </div>
            <hr />
        </div>

        <!-- Bonos 20€ -->
        <div class="bonus-section">
            <h3>Bonos 20€</h3>
            <div class="grid">
                <div v-for="casa in casas20" :key="casa.nombre" class="card" @click="selectCasa(casa)">
                    <img :src="casa.img" :alt="casa.nombre" />
                    <button @click.stop="window.open(casa.link, '_blank')" class="cta-button">
                        Registrarse
                    </button>
                </div>
            </div>
            <hr />
        </div>

        <!-- Bonos 15€ -->
        <div class="bonus-section">
            <h3>Bonos 15€</h3>
            <div class="grid">
                <div v-for="casa in casas15" :key="casa.nombre" class="card" @click="selectCasa(casa)">
                    <img :src="casa.img" :alt="casa.nombre" />
                    <button @click.stop="window.open(casa.link, '_blank')" class="cta-button">
                        Registrarse
                    </button>
                </div>
            </div>
            <hr />
        </div>

        <!-- Bonos 10€ -->
        <div class="bonus-section">
            <h3>Bonos 10€</h3>
            <div class="grid">
                <div v-for="casa in casas10" :key="casa.nombre" class="card" @click="selectCasa(casa)">
                    <img :src="casa.img" :alt="casa.nombre" />
                    <button @click.stop="window.open(casa.link, '_blank')" class="cta-button">
                        Registrarse
                    </button>
                </div>
            </div>
            <hr />
        </div>

        <!-- Juegos al Azar -->
        <div class="bonus-section">
            <h3>Juegos al Azar</h3>
            <div class="grid">
                <div v-for="juego in juegosAzar" :key="juego.nombre" class="card" @click="selectCasa(juego)">
                    <img :src="juego.img" :alt="juego.nombre" />
                    <button @click.stop="window.open(juego.link, '_blank')" class="cta-button">
                        Registrarse
                    </button>
                </div>
            </div>
        </div>

        <!-- Detalle seleccionado -->
        <div v-if="selectedCasa" class="step-box">
            <h2>Detalles de {{ selectedCasa.nombre }}</h2>
            <img :src="selectedCasa.img" :alt="selectedCasa.nombre" />
            <p>
                <strong>Registro Válido:</strong> Regístrate desde este enlace, deposita
                <strong>{{ selectedCasa.bono }}€</strong> y realiza una apuesta con esa cantidad ingresada.
            </p>
            <p>
                <strong>Registro No Válido:</strong> Regístrate en
                <strong>{{ selectedCasa.nombre }}</strong> desde este enlace, deposita
                <strong>{{ selectedCasa.bono }}€</strong>, y retira el depósito.
            </p>
            <button class="cta-button" @click="selectedCasa = null">Cerrar detalle</button>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const casas30 = [
    { nombre: "Betfair", img: "https://via.placeholder.com/300x150?text=Betfair", link: "https://www.betfair.com", bono: 30 },
    { nombre: "Betway", img: "https://via.placeholder.com/300x150?text=Betway", link: "https://www.betway.com", bono: 30 },
    { nombre: "PokerStars", img: "https://via.placeholder.com/300x150?text=PokerStars", link: "https://www.pokerstars.com", bono: 30 },
    { nombre: "Winamax", img: "https://via.placeholder.com/300x150?text=Winamax", link: "https://www.winamax.es", bono: 30 },
    { nombre: "William Hill", img: "https://via.placeholder.com/300x150?text=William+Hill", link: "https://www.williamhill.es", bono: 30 },
    { nombre: "888Sport", img: "https://via.placeholder.com/300x150?text=888Sport", link: "https://www.888sport.com", bono: 30 },
    { nombre: "Sportium", img: "https://via.placeholder.com/300x150?text=Sportium", link: "https://www.sportium.es", bono: 30 },
    { nombre: "Versus", img: "https://via.placeholder.com/300x150?text=Versus", link: "https://www.versus.es", bono: 30 },
];

const casas20 = [
    { nombre: "Codere", img: "https://via.placeholder.com/300x150?text=Codere", link: "https://www.codere.es", bono: 20 },
    { nombre: "Betsson", img: "https://via.placeholder.com/300x150?text=Betsson", link: "https://www.betsson.com", bono: 20 },
    { nombre: "DAZN Bet", img: "https://via.placeholder.com/300x150?text=DAZN+Bet", link: "https://bet.dazn.com", bono: 20 },
    { nombre: "Kirol Bet", img: "https://via.placeholder.com/300x150?text=Kirol+Bet", link: "https://www.kirolbet.com", bono: 20 },
    { nombre: "PAF", img: "https://via.placeholder.com/300x150?text=PAF", link: "https://www.paf.es", bono: 20 },
    { nombre: "Marathon Bet", img: "https://via.placeholder.com/300x150?text=Marathon+Bet", link: "https://www.marathonbet.com", bono: 20 },
    { nombre: "Golden Bull", img: "https://via.placeholder.com/300x150?text=Golden+Bull", link: "https://www.goldenbull.com", bono: 20 },
    { nombre: "Interwetten", img: "https://via.placeholder.com/300x150?text=Interwetten", link: "https://www.interwetten.com", bono: 20 },
];

const casas15 = [
    { nombre: "Speedy Bet", img: "https://via.placeholder.com/300x150?text=Speedy+Bet", link: "https://www.speedybet.com", bono: 15 },
];

const casas10 = [
    { nombre: "Luckia", img: "https://via.placeholder.com/300x150?text=Luckia", link: "https://www.luckia.es", bono: 10 },
];

const juegosAzar = []; // Vacío por ahora

const selectedCasa = ref(null);

function selectCasa(casa) {
    selectedCasa.value = casa;
}
</script>

<style scoped>
.manual-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #1d976c, #93f9b9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.bonus-section h3 {
    color: #1d976c;
    margin-bottom: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.bonus-section ul li {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #2a7a4f;
}

.bonus-section ul li strong {
    color: #32a74d;
    font-weight: 800;
    font-size: 1.1rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
}

.card {
    background-color: rgba(29, 151, 108, 0.07);
    box-shadow: 0 0 8px rgba(29, 151, 108, 0.08);
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.card:hover {
    background-color: rgba(147, 249, 185, 0.12);
    box-shadow: 0 0 12px rgba(147, 249, 185, 0.2);
    transform: translateY(-5px);
}

.card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
    object-fit: contain;
}

.cta-button {
    padding: 0.8rem 2rem;
    background: linear-gradient(to right, #4bf172, #27b863);
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.step-box {
    background-color: rgba(29, 151, 108, 0.07);
    box-shadow: 0 0 8px rgba(29, 151, 108, 0.08);
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 12px;
    text-align: left;
    max-width: 600px;
    opacity: 1;
    transform: translateY(0);
    animation: fadeUp 0.6s ease forwards;
}

.step-box h2 {
    margin-bottom: 0.6rem;
    color: #1d976c;
    font-size: 1.5rem;
}

.step-box img {
    max-width: 100%;
    margin-bottom: 1rem;
    border-radius: 8px;
}

.step-box p {
    color: #444;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 600px) {
    h1 {
        font-size: 1.8rem;
    }

    .step-box p,
    .step-box ul {
        font-size: 1rem;
    }

    .cta-button {
        font-size: 1rem;
        padding: 0.7rem 1.5rem;
    }
}
</style>
