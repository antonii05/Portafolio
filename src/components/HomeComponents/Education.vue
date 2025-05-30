<template>
    <div>
        <!-- Especializacion en Videojuegos -->
        <div class="row align-items-center justify-content-between">
            <!-- Columna de imágenes a la izquierda -->
            <div
                class="d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 rounded-4 shadow-lg p-3 w-auto"
            >
                <div class="d-flex justify-content-center gap-3 mb-3 flex-wrap">
                    <img
                        src="@/assets/images/illustrator.png"
                        alt="Illustrator"
                        class="rotate-image"
                    />
                    <img
                        src="@/assets/images/unity.png"
                        alt="Unity"
                        class="rotate-image"
                    />
                </div>
                <div class="d-flex justify-content-center gap-3 flex-wrap">
                    <img
                        src="@/assets/images/c-sharp.png"
                        alt="C#"
                        class="rotate-image"
                    />
                    <img
                        src="@/assets/images/photoshop.png"
                        alt="PhotoShop"
                        class="rotate-image"
                    />
                </div>
            </div>

            <!-- Columna de texto a la derecha (más ancha) -->
            <div class="col d-flex flex-column align-items-end text-end">
                <h5 class="fw-bold mb-4">Educación</h5>
                <div>
                    <p class="mb-1">
                        <strong>IES Venancio Blanco | Salamanca</strong> -
                        Desarrollo de videojuegos y realidad virtual
                    </p>
                    <p class="mb-1"><em>2024 - (Actualidad)</em></p>
                    <p>
                        Formación especializada en el desarrollo de videojuegos
                        e incluyendo programación, diseño gráfico y modelado 3D.
                    </p>
                </div>
            </div>
        </div>

        <!-- Ciclo Superior DAM -->
        <div class="row align-items-center justify-content-between mt-5">
            <!-- Columna de imágenes a la izquierda -->
            <div
                class="d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 rounded-4 shadow-lg p-3 w-auto"
            >
                <div class="d-flex justify-content-center gap-3 mb-3 flex-wrap">
                    <img
                        src="@/assets/images/java.png"
                        alt="Java"
                        class="rotate-image"
                    />
                    <img
                        src="@/assets/images/mysql.png"
                        alt="Mysql"
                        class="rotate-image"
                    />
                </div>
                <div class="d-flex justify-content-center gap-3 flex-wrap">
                    <img
                        src="@/assets/images/c.png"
                        alt="C"
                        class="rotate-image"
                    />
                    <img
                        src="@/assets/images/kotlin.png"
                        alt="Kotlin"
                        class="rotate-image"
                    />
                </div>
            </div>

            <!-- Columna de texto a la derecha (más ancha) -->
            <div class="col d-flex flex-column align-items-end text-end">
                <div>
                    <p class="mb-1">
                        <strong>Colegio Santísima Trinidad | Salamanca</strong>
                        - Desarrollo de Aplicaciones Multiplataforma
                    </p>
                    <p class="mb-1"><em>2022 - 2024</em></p>
                    <p>
                        Formación en programación orientada a objetos, diseño y
                        desarrollo de aplicaciones para entornos web, móviles y
                        de escritorio. Conocimientos en bases de datos,
                        integración de servicios y buenas prácticas de
                        desarrollo.
                    </p>
                </div>
            </div>
        </div>

        <div class="row align-items-center justify-content-between mt-5">
            <!-- Columna de texto a la derecha (más ancha) -->
            <div class="col d-flex flex-column align-items-end text-end">
                <div>
                    <p class="mb-1">
                        <strong>IES Germán Sanchez Ruiperez | Peñaranda de Bracamonte</strong>
                        - Técnico en Sistemas Microinformáticos y Redes
                    </p>
                    <p class="mb-1"><em>2020 - 2022</em></p>
                    <p>
                        Formación en administración de sistemas informáticos,
                        redes y seguridad. Incluye instalación, configuración y
                        mantenimiento de equipos y redes, así como soporte
                        técnico.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const rotateImages = () => {
    const images = document.querySelectorAll<HTMLImageElement>('.rotate-image')

    images.forEach((image) => {
        const angle = Math.floor(Math.random() * 61) - 30 // de -30° a +30°
        image.style.setProperty('--initial-rotation', `${angle}deg`)
    })
}

onMounted(() => {
    rotateImages()
})
</script>

<style scoped>
img.rotate-image {
    transition: transform 0.5s ease-in-out;
    width: 40px;
    height: 40px;
    transform: rotate(var(--initial-rotation, 0deg));
}

img.rotate-image:hover {
    transform: rotate(var(--initial-rotation, 0deg)) scale(1.3);
}
</style>
