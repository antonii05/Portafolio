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
                    Desarrollador de software en Linux utilizando tecnologías
                    como Laravel | Vue.js | Pinia | Docker | TypeScript .
                </p>
            </div>
            <div
                class="d-flex justify-content-center align-items-center w-auto rounded-4 bg-dark bg-opacity-50 shadow-lg"
            >
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
            <div
                class="d-flex flex-row justify-content-between align-items-start gap-3"
            >
                <!-- Texto a la izquierda -->
                <div class="flex-grow-1 col-4">
                    <p class="mb-1">
                        <strong>Joyeria A.Blazquez</strong> - Técnico de
                        Sistemas
                    </p>
                    <p class="mb-1"><em>Marzo 2022 - Junio 2022</em></p>
                    <p>
                        Técnico de sistemas realizando tareas de mantenimiento y
                        reparación de equipos informáticos, gestión de redes y
                        servidores, así como atención al público.
                    </p>
                </div>

                <!-- Imagen a la derecha -->
                <div class="bg-dark rounded-4 bg-opacity-50 shadow-lg p-2">
                    <img
                        src="@/assets/images/cisco.png"
                        alt="Cisco"
                        class="rotate-image"
                    />
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
