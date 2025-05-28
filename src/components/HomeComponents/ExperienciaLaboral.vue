<template>
    <div>
        <!-- Titulo -->
        <h5 class="fw-bold mb-4">Experiencia Laboral</h5>

        <!-- GPC -->
        <div class="row">
            <div class="col-8">
                <p class="mb-1">
                    <strong>García Peréz Consulting</strong> - Full Stack
                    Developer
                </p>
                <p class="mb-1"><em>2024 - 2025</em></p>
                <p>
                    Desarrollador de software en Linux utilizando tecnologías como Laravel | Vue.js | Pinia | Docker | TypeScript .
                </p>
            </div>
            <div class="d-flex justify-content-center align-items-center w-auto bg-dark rounded-4 bg-dark bg-opacity-50">

                <div class="d-flex flex-column gap-2">
                    <div class="d-flex justify-content-center gap-2">
                        <img
                            src="@/assets/images/bootstrap.png"
                            alt="Bootstrap"
                            class="mx-2 rotate-image"
                        />
                        <img
                            src="@/assets/images/laravel.png"
                            alt="Laravel"
                            class="mx-2 rotate-image"
                        />
                    </div>
                    <div class="d-flex justify-content-center gap-2">
                        <img
                            src="@/assets/images/vue.png"
                            alt="Vue.js"
                            class="mx-2 rotate-image"
                        />
                        <img
                            src="@/assets/images/postman.png"
                            alt="Postman"
                            class="mx-2 rotate-image"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <p class="mb-1">
                <strong>Empresa XYZ</strong> - Ingeniero de Software
            </p>
            <p class="mb-1"><em>2018 - 2021</em></p>
            <p>
                Encargado de diseñar soluciones escalables y liderar proyectos
                de migración tecnológica en entornos ágiles.
            </p>
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
