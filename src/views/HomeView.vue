<template>
    <div class="overflow-hidden">
        <!-- Sección con fondo animado -->
        <Shapes>
            <!-- Contenedor principal centrado y con paddings -->
            <div
                class="d-flex flex-column justify-content-center align-items-center px-3 centro"
            >
                <Tittle />
            </div>

            <div class="container mt-5 mb-5 text-shadow">
                <!-- Experiencia Laboral -->
                <div class="mb-5 d-flex align-items-stretch">
                    <div class="vr me-3 bg-dark rounded-3 p-1 me-3"></div>
                    <div>
                        <ExperienciaLaboral />
                    </div>
                </div>

                <br />

                <!-- Educacion -->
                <div class="d-flex align-items-stretch mt-5">
                    <div class="flex-grow-1">
                        <Education />
                    </div>
                    <div class="vr ms-3 bg-dark rounded-3 p-1"></div>
                </div>
            </div>

            <!-- Proyectos -->
            <div class="container mt-5 mb-5 text-shadow">
                <Projects />
            </div>

            <!-- About Me -->

            <div class="container mt-5 mb-5 text-shadow">
                <AboutMe />
            </div>
        </Shapes>
    </div>
</template>

<script setup lang="ts">
import {
    Shapes,
    ExperienciaLaboral,
    Education,
    Projects,
    AboutMe,
    Tittle
} from '@/components'
</script>

<style scoped>
.text-shadow {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.centro {
    margin-top: 15%;
}

/* Elimina cualquier posible scroll horizontal */
:global(body) {
    overflow-x: hidden;
}
</style>
