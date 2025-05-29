<template>
    <div class="overflow-hidden">
        <!-- Sección con fondo animado -->
        <Shapes>
            <!-- Contenedor principal centrado y con paddings -->
            <div
                class="d-flex flex-column justify-content-center align-items-center px-3 centro"
            >
                <div>
                    <h3 class="display-4 fw-bold text-white text-shadow">
                        Hey! <br />
                        Soy Antonio Blázquez
                    </h3>
                    <h4 class="text-shadow text-white mb-4">
                        Desarrollador de software con más de 1 año en el sector
                        IT.
                    </h4>
                </div>
            </div>

            <div class="container mt-5">

                <div class="mb-5 d-flex align-items-stretch">
                    <div class="vr me-3 bg-dark rounded-3 p-1 me-3"></div>
                    <div>
                        <ExperienciaLaboral />
                    </div>
                </div>
            </div>
        </Shapes>
    </div>
</template>

<script setup lang="ts">
import ExperienciaLaboral from '@/components/HomeComponents/ExperienciaLaboral.vue'
import Shapes from '@/components/Shapes.vue'
</script>

<style scoped>
.text-shadow {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
.centro {
    margin-top: 15%;
}

/* Elimina cualquier posible scroll horizontal */
:global(body) {
    overflow-x: hidden;
}
</style>
