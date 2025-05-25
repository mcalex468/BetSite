<template>
    <section class="links-wrapper">
        <h1>Bonos y Promociones</h1>
        <div class="grid">
            <div class="card" v-for="casa in casas" :key="casa.nombre">
                <img :src="casa.img" :alt="casa.nombre" />
                <button>Registrarse</button>
            </div>
        </div>
    </section>
</template>

<script setup>
const casas = [
    { nombre: 'Betano', img: 'https://via.placeholder.com/300x150?text=Betano' },
    { nombre: 'Codere', img: 'https://via.placeholder.com/300x150?text=Codere' },
    { nombre: '1xBet', img: 'https://via.placeholder.com/300x150?text=1xBet' },
    { nombre: 'Bet365', img: 'https://via.placeholder.com/300x150?text=Bet365' },
    { nombre: 'Sportium', img: 'https://via.placeholder.com/300x150?text=Sportium' },
    { nombre: 'Pastón', img: 'https://via.placeholder.com/300x150?text=Pastón' },
    { nombre: '888Sport', img: 'https://via.placeholder.com/300x150?text=888Sport' },
    { nombre: 'Luckia', img: 'https://via.placeholder.com/300x150?text=Luckia' },
    { nombre: 'LeoVegas', img: 'https://via.placeholder.com/300x150?text=LeoVegas' },
    { nombre: 'PokerStars', img: 'https://via.placeholder.com/300x150?text=PokerStars' },
    { nombre: 'Retabet', img: 'https://via.placeholder.com/300x150?text=Retabet' },
    { nombre: 'GoldenPark', img: 'https://via.placeholder.com/300x150?text=GoldenPark' },
    { nombre: 'William Hill', img: 'https://via.placeholder.com/300x150?text=William+Hill' },
    { nombre: 'Bwin', img: 'https://via.placeholder.com/300x150?text=Bwin' },
    { nombre: 'Interwetten', img: 'https://via.placeholder.com/300x150?text=Interwetten' }
]
</script>

<style scoped>
.links-wrapper {
    padding: 3rem 1rem;
    background: linear-gradient(to bottom, #f3f3f3, #e8ebee);
    text-align: center;
}

h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: #222;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
}

img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
}

button {
    padding: 0.6rem 1.4rem;
    background-color: #2a7ae4;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s ease;
}

button:hover {
    background-color: #185fc9;
}
</style>
