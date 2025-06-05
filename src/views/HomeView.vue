<template>
    <div class="overflow-hidden">
        <!-- Navbar flotante fija a la izquierda -->
        <div class="navbar-float-left ms-4">
            <NavbarComponent />
        </div>
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
                <div class="mb-5 d-flex align-items-stretch" id="experiencia">
                    <div class="vr me-3 bg-dark rounded-3 p-1 me-3"></div>
                    <div>
                        <ExperienciaLaboral />
                    </div>
                </div>

                <br />

                <!-- Educacion -->
                <div class="d-flex align-items-stretch mt-5" id="educacion">
                    <div class="flex-grow-1">
                        <Education />
                    </div>
                    <div class="vr ms-3 bg-dark rounded-3 p-1"></div>
                </div>
            </div>

            <!-- Proyectos -->
            <div class="container mt-5 mb-5 text-shadow" id="proyectos">
                <Projects />
            </div>

            <!-- About Me -->

            <div class="container mt-5 mb-5 text-shadow" id="sobre-mi">
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
    Tittle,
    NavbarComponent,
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

.navbar-float-left {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1050;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    /* Bootstrap: ocultar en pantallas chicas, mostrar en lg+ */
    display: none;
}
@media (min-width: 1700px) {
    .navbar-float-left {
        display: block;
    }
}
</style>
