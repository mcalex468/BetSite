<template>
    <div class="home-wrapper">
        <h1>Bienvenido a Afiliados PRO</h1>
        <p class="intro">
            Este sitio proporciona comparativas y enlaces de afiliado a casas de apuestas.
            Apostar puede ser adictivo y debes jugar con responsabilidad.
            No fomentamos el juego irresponsable. Si tienes problemas, busca ayuda profesional.
        </p>

        <div class="risk-box">
            <h2>Apuestas y adicción: un riesgo real</h2>
            <p>
                Las apuestas pueden comenzar como una forma de entretenimiento, pero para muchas personas se transforman
                en una
                adicción difícil de controlar. La emoción de ganar puede crear una dependencia peligrosa, afectando la
                salud
                mental, las relaciones personales y la estabilidad financiera. Reconocer los síntomas a tiempo es clave
                para
                prevenir consecuencias graves.
            </p>
        </div>

        <div class="risk-box">
            <h2>Jugar responsablemente no es opcional</h2>
            <p>
                Apostar implica riesgos. Nunca deberías apostar más de lo que estás dispuesto a perder. Es fundamental
                establecer límites de tiempo y dinero, y no usar el juego como escape a problemas personales. Si sientes
                que
                pierdes el control, es momento de parar y buscar ayuda profesional.
            </p>
        </div>

        <div class="risk-box">
            <h2>Información, no incentivo</h2>
            <p>
                Este sitio tiene como objetivo ofrecer información objetiva y accesos a bonos de casas de apuestas.
                No fomentamos el juego ni lo presentamos como una vía para ganar dinero. Apostar debe ser una actividad
                recreativa, no una estrategia financiera. Sé consciente y cuida de ti y de los tuyos.
            </p>
        </div>

        <div class="cta-wrapper">
            <RouterLink to="/manual" class="cta-button">¡Empieza a Generar!</RouterLink>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.home-wrapper {
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



.intro {
    line-height: 1.7;
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 2rem;
}

.risk-box {
    background-color: rgba(29, 151, 108, 0.07);
    /* Verde claro translúcido */
    box-shadow: 0 0 8px rgba(29, 151, 108, 0.08);
    /* Sombra verde sutil */
    padding: 1.5rem;
    margin: 1.5rem auto;
    border-radius: 10px;
    text-align: left;
}

/* Alternar tonos para las siguientes cajas usando nth-child */
.risk-box:nth-of-type(2) {
    background-color: rgba(147, 249, 185, 0.12);
    /* Verde más brillante */
    box-shadow: 0 0 8px rgba(147, 249, 185, 0.1);
}

.risk-box h2 {
    margin-bottom: 0.8rem;
    color: #0d6e4e;
    /* Verde principal para destacar títulos */
    font-size: 1.3rem;
}

.risk-box p {
    color: #444;
    font-size: 1rem;
    line-height: 1.6;
}

.cta-wrapper {
    text-align: center;
    margin-top: 2.5rem;
}

.cta-button {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: linear-gradient(to right, #4bf172, #27b863);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 30px;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive ajustes */
@media (max-width: 600px) {
    h1 {
        font-size: 1.8rem;
    }

    .intro,
    .risk-box p {
        font-size: 1rem;
    }

    .risk-box {
        padding: 1rem;
    }

    .cta-button {
        font-size: 1rem;
        padding: 0.7rem 1.5rem;
    }
}
</style>
