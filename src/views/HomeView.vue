<template>
    <div class="home-container">
        <div class="shapes-background">
            <Shapes />
        </div>

        <!-- Contenedor principal centrado -->
        <div class="header-wrapper">
            <div class="header-centered">
                <h3 class="display-3 fw-bold text-white text-shadow mb-4">
                    Hey! <br />
                    Soy Antonio Blázquez
                </h3>
                <h4 class="text-shadow text-white mb-5">
                    Desarrollador de software con más de 1 año en el sector IT.
                </h4>
            </div>
        </div>

        <!-- DATOS -->
        <div class="container text-white text-shadow py-5">
            <!-- Sección de experiencia laboral con vr que abarca toda la altura -->
            <div class="mb-5 d-flex align-items-stretch">
                <!-- Línea vertical -->
                <div class="vr me-3 bg-dark rounded-3 p-1 me-3"></div>

                <!-- Contenido de la experiencia laboral -->
                <div>
                    <ExperienciaLaboral />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ExperienciaLaboral from '@/components/HomeComponents/ExperienciaLaboral.vue';
import Shapes from '@/components/Shapes.vue'
</script>

<style scoped>
.container {
    z-index: 2;
    position: relative;
}
.home-container {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    z-index: 2;
}

.shapes-background {
    position: absolute;
    width: 100%;
    height: 100%;
}

.header-wrapper {
    position: relative;
    z-index: 2;
    display: flex;
    margin-top: 15%;
    align-items: center;
    justify-content: center;
}

.text-shadow {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
</style>
