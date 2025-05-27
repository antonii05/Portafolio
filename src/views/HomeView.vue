<template>
    <div class="home-container">
        <div class="position-absolute top-0 start-0 w-100 h-100">
            <Shapes />
        </div>
        <div class="d-flex justify-content-center text-center">
            <h1 class="display-3 fw-bold text-white text-shadow mb-4">
                Bienvenido a mi Portafolio
            </h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import Shapes from '@/components/Shapes.vue'
</script>

<style scoped>
.home-container {
    min-height: 100vh;
    position: relative;
}
.text-shadow {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
</style>
