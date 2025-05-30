<template>
    <div class="mb-5 position-relative ps-4">
        <!-- Línea vertical que cubre toda la altura -->
        <div
            class="vr bg-dark rounded-3 position-absolute top-0 start-0 p-1"
            style="height: 100%"
        ></div>

        <!-- Título -->
        <div class="d-flex align-items-center mb-4">
            <h5 class="fw-bold mb-0">Proyectos Destacados</h5>
        </div>

        <!-- Contenido debajo del título -->
        <div class="row">
            <div class="col-8">
                <p class="mb-1">
                    <strong>TwinJoya Project</strong>
                    <small>(En Desarrollo)</small>
                </p>
                <p>
                    CMS especial para el seguimiento de reparaciones de relojes
                    y articulos de joyería. <br />
                    Realizado mediante multirepositorio para dividir el Frontend
                    del Backend
                    <a href="https://github.com/antonii05/TwinJoya-Backend">
                        <font-awesome-icon
                            icon="link"
                            class="rounded-3 bg-dark bg-opacity-50 p-1 text-white"
                        />
                    </a>
                </p>
            </div>
        </div>

        <!-- Contenido debajo del título -->
        <div class="row mt-2">
            <div class="col-8">
                <p class="mb-1">
                    <strong>AuthProject</strong>
                </p>
                <p>
                    Proyecto dedicado exclusiavmente a la autentificacion de
                    usuarios con Laravel & JWT
                    <a href="https://github.com/antonii05/AuthProject.git">
                        <font-awesome-icon
                            icon="link"
                            class="rounded-3 bg-dark bg-opacity-50 p-1 text-white"
                        />
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMain } from '@/composables/useMain'

const { rotateImages } = useMain()

onMounted(() => {
    rotateImages()
})
</script>
