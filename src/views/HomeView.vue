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
                    <!-- Titulo -->
                    <h5 class="fw-bold mb-4">Experiencia Laboral</h5>

                    <!-- GPC -->
                    <div class="bg-primary row">
                        <div class="col-8">
                            <p class="mb-1">
                                <strong>García Peréz Consulting</strong> - Full
                                Stack Developer
                            </p>
                            <p class="mb-1"><em>2024 - 2025</em></p>
                            <p>
                                Responsable del desarrollo y mantenimiento de
                                aplicaciones web modernas utilizando tecnologías
                                como Laravel y Vue.js.
                            </p>
                        </div>
                        <div
                            class="col-4 d-flex justify-content-center align-items-center"
                        >
                            <div class="d-flex flex-column gap-2">
                                <div
                                    class="d-flex justify-content-center gap-2"
                                >
                                    <img
                                        src="@/assets/images/bootstrap.png"
                                        alt="Bootstrap"
                                        class="mx-2"
                                        style="width: 40px; height: 40px"
                                    />
                                    <img
                                        src="@/assets/images/laravel.png"
                                        alt="Laravel"
                                        class="mx-2"
                                        style="width: 40px; height: 40px"
                                    />
                                </div>
                                <div
                                    class="d-flex justify-content-center gap-2"
                                >
                                    <img
                                        src="@/assets/images/vue.png"
                                        alt="Vue.js"
                                        class="mx-2"
                                        style="width: 40px; height: 40px"
                                    />
                                    <img
                                        src="@/assets/images/postman.png"
                                        alt="Postman"
                                        class="mx-2"
                                        style="width: 40px; height: 40px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--  -->
                    <div class="mt-4">
                        <p class="mb-1">
                            <strong>Empresa XYZ</strong> - Ingeniero de Software
                        </p>
                        <p class="mb-1"><em>2018 - 2021</em></p>
                        <p>
                            Encargado de diseñar soluciones escalables y liderar
                            proyectos de migración tecnológica en entornos
                            ágiles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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
