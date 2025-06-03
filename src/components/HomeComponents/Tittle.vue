<template>
    <div>
        <h3
            id="tittle"
            class="display-4 fw-bold text-white text-shadow-title"
        ></h3>
        <h4 id="subtittle" class="text-shadow-title text-white mb-4"></h4>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

onMounted(() => {
    gsap.to('#tittle', {
        duration: 1,
        text: 'Hey! <br />Soy Antonio Blázquez',
        ease: 'none',
        delay: 0.5,
    })

    gsap.to('#subtittle', {
        duration: 2.5,
        text: 'Desarrollador de software con más de 1 año en el sector IT.',
        ease: 'none',
        delay: 1.5,
    })
});
</script>

<style scoped>
.text-shadow-title {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
</style>
