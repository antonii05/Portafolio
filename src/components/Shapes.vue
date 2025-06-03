<template>
    <div ref="containerRef" class="shapes-bg position-relative w-100 h-100">
        <div
            v-for="shape in shapes"
            :key="shape.id"
            class="shape-color shadow-lg position-absolute"
            :style="{
                width: shape.size + 'px',
                height: shape.size + 'px',
            }"
            style="z-index: 1"
        ></div>

        <!-- Contenedor del slot con z-index mayor -->
        <div class="slot-wrapper position-relative" style="z-index: 2">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import type { Shape } from '@/models/Shape'

const numShapes = 4
const shapes = reactive<Shape[]>([])
const shapeRefs = ref<HTMLElement[]>([])
const containerRef = ref<HTMLElement | null>(null)

//Generate a random number
const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
}

//Function to create a shape object
const createShape = (
    id: number,
    maxWidth: number,
    maxHeight: number
): Shape => {
    return {
        id,
        x: randomInt(0, maxWidth - 100),
        y: randomInt(0, maxHeight - 100),
        size: randomInt(70, 150),
    }
}

// Function to animate the shape
const animateShape = (
    shape: Shape,
    el: HTMLElement,
    maxWidth: number,
    maxHeight: number
) => {
    const maxX = maxWidth - shape.size
    const maxY = maxHeight - shape.size

    const newX = randomInt(0, maxX)
    const newY = randomInt(0, maxY)

    gsap.to(el, {
        x: newX,
        y: newY,
        duration: 7 + Math.random(),
        ease: 'power2.inOut',
        onComplete: () => animateShape(shape, el, maxWidth, maxHeight),
    })
}

onMounted(async () => {
    await nextTick()
    const container = containerRef.value
    if (!container) return

    const maxWidth = container.scrollWidth
    const maxHeight = container.scrollHeight

    for (let i = 0; i < numShapes; i++) {
        shapes.push(createShape(i, maxWidth, maxHeight))
    }
    await nextTick()

    shapeRefs.value = Array.from(
        container.querySelectorAll('.shape-color')
    ).filter((el): el is HTMLElement => el instanceof HTMLElement)

    shapeRefs.value.forEach((el, i) => {
        const shape = shapes[i]
        // Posición inicial usando transform
        gsap.set(el, { x: shape.x, y: shape.y })

        // Animación continua
        animateShape(shape, el, maxWidth, maxHeight)
    })
})
</script>

<style scoped>
.shapes-bg {
    position: relative;
    width: 100%;
    height: 100%;
}
.shape-color {
    border-radius: 50%;
    background: linear-gradient(
        90deg,
        rgba(0, 7, 133, 1) 0%,
        rgba(0, 255, 217, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000785", endColorstr="#00FFD9", GradientType=1);

    /* Style */
    border-radius: 100px;
}
</style>
