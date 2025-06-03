<template>
    <div class="manual-wrapper">
        <h1>Manual de Afiliados</h1>
        <p class="intro">
            Aprende cómo funciona el sistema de afiliación con casas de apuestas y cómo puedes empezar a generar
            ingresos.
        </p>

        <div class="step-box">
            <h2>PASO 1: ¿Qué ofrecemos?</h2>
            <p>
                En <strong>BetZone</strong> colaboramos con múltiples <strong>casas de apuestas y casinos
                    online</strong>. A través de nosotros tendrás acceso a los mejores <strong>bonos y packs de
                    bienvenida</strong> verificados, siempre actualizados. Todos ellos
                comercios<strong>certificados</strong>.
            </p>
        </div>

        <div class="step-box">
            <h2>PASO 2: ¿Qué son los links de afiliados?</h2>
            <p>
                Te proporcionamos <strong>enlaces personalizados</strong> con los que podrás invitar a tus amigos o
                seguidores a registrarse. Cada vez que alguien se registre y complete su apuesta a través de tu enlace,
                se cuenta como <strong>un referido válido</strong>.
            </p>
        </div>

        <div class="step-box">
            <h2>PASO 3: ¿Cómo funciona el sistema?</h2>
            <p>
                Tú compartes los enlaces en redes sociales, entre amigos o conocidos. Nosotros nos encargamos del
                seguimiento y verificación de registros y apuestas completadas. ¡Transparente y sin complicaciones!
            </p>
        </div>

        <div class="step-box">
            <h2>PASO 4: Pasos para empezar</h2>
            <ul>
                <li>1.
                    <RouterLink to="/register" class="step-link">
                        Regístrate en nuestra plataforma
                    </RouterLink>
                </li>
                <li>2. Elige las casas de apuestas que te interesen.</li>
                <li>3. Recibe tus enlaces personalizados.</li>
                <li>4. Comparte y promociona con creatividad.</li>
                <li>5. Gana dinero por cada usuario registrado y activo.</li>
            </ul>
        </div>

        <div class="step-box">
            <h2>PASO 5: ¿Qué nos diferencia?</h2>
            <p>
                En <strong>BetZone</strong> te premiamos directamente por cada usuario registrado y por cada amigo que
                traigas y cumpla con los requisitos mínimos.
                Nuestro sistema de seguimiento está integrado con <strong>Link2Play</strong>, lo que nos permite
                verificar cada registro y apuesta desde nuestra plataforma.
            </p>

            <section class="bonus-section">
                <h3>Registros</h3>
                <p>
                    Cada usuario que se registre a través de tus enlaces queda registrado en nuestra base de datos y
                    puedes seguir su progreso desde tu panel personalizado.
                    Cuando tus referidos completen al menos <strong>5 registros válidos</strong> con apuesta mínima,
                    desbloqueas estos pagos:
                </p>
                <ul>
                    <li> 5 registros + apuesta mínima = <strong>40€</strong></li>
                    <li> 10 registros + apuesta mínima = <strong>90€</strong></li>
                    <li> 15 registros + apuesta mínima = <strong>140€</strong></li>
                    <li> 20 registros + apuesta mínima = <strong>200€</strong></li>
                </ul>
            </section>

            <section class="bonus-section">
                <h3>Amigos</h3>
                <p>
                    Por cada grupo de amigos que invites y que completen el registro mínimo de 5 apuestas válidas,
                    también ganas bonificaciones escalonadas.
                    Esto incentiva que no solo traigas usuarios sino que los invites a apostar responsablemente para
                    maximizar tus ganancias.
                </p>
                <ul>
                    <li> 5 amigos registrados y activos = <strong>50€</strong></li>
                    <li> 10 amigos registrados y activos = <strong>110€</strong></li>
                    <li> 15 amigos registrados y activos = <strong>170€</strong></li>
                    <li> 20 amigos registrados y activos = <strong>250€</strong></li>
                </ul>
            </section>

            <p>
                Todos los pagos se procesan tras una verificación manual por nuestro equipo, asegurando transparencia y
                seguridad.
            </p>

            <p>
                ¿Tienes una marca personal o quieres abrir tu propio negocio de afiliación?
                Podemos ayudarte a escalar tu estrategia.
                <RouterLink to="/contact" class="step-link">Contáctanos aquí</RouterLink> para más información.
            </p>
        </div>



        <div class="cta-wrapper">
            <RouterLink to="/links" class="cta-button">Ver enlaces disponibles</RouterLink>
        </div>
    </div>
</template>

<script setup></script>

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
    /* Verde intenso para el título */
    margin-bottom: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    /* Opcional: que quede más formal */
    letter-spacing: 1px;
}

.bonus-section ul li {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #2a7a4f;
    /* Verde más oscuro para el texto */
}

.bonus-section ul li strong {
    color: #32a74d;
    /* Verde brillante para los precios */
    font-weight: 800;
    font-size: 1.1rem;
}

.intro {
    line-height: 1.6;
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 2rem;
}

.step-box {
    background-color: rgba(29, 151, 108, 0.07);
    box-shadow: 0 0 8px rgba(29, 151, 108, 0.08);
    padding: 1.5rem;
    margin: 1.5rem auto;
    border-radius: 12px;
    text-align: left;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.6s ease forwards;
}

.step-box:nth-of-type(even) {
    background-color: rgba(147, 249, 185, 0.12);
    box-shadow: 0 0 8px rgba(147, 249, 185, 0.1);
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.step-box h2 {
    margin-bottom: 0.6rem;
    color: #1d976c;
    font-size: 1.3rem;
}

.step-box p,
.step-box ul {
    color: #444;
    font-size: 1rem;
    line-height: 1.6;
}

.step-box ul {
    list-style: none;
    padding-left: 0;
}

.step-box ul li {
    margin-bottom: 0.5rem;
    position: relative;
}

/* Animar los 🎯 */
.step-box ul li:has(strong)::before {
    content: "🎯";
    display: inline-block;
    margin-right: 0.5rem;
    animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}

.step-link {
    color: #1d976c;
    font-weight: 600;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.step-link:hover {
    color: #0d6e4e;
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

/* Responsive */
@media (max-width: 600px) {
    h1 {
        font-size: 1.8rem;
    }

    .intro,
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
