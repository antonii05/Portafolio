<template>
    <div class="home-container">
        <div class="shapes-background">
            <Shapes />
        </div>

        <div class="header-centered">
            <h3 class="display-3 fw-bold text-white text-shadow mb-4">
                Hey! <br />
                Soy Antonio Blázquez
            </h3>
            <h4 class="text-shadow text-white">
                Desarrollador de software con más de 1 año en el sector IT.
                <br />
                
            </h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import Shapes from '@/components/Shapes.vue'
</script>

<style scoped>
.home-container {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
}

.shapes-background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
}

/* title */
.header-centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.text-shadow {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
</style>
