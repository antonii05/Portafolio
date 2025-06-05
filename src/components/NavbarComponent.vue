<template>
    <nav
        class="nav-vertical shadow-lg bg-light bg-opacity-50 rounded-4 p-2 d-flex flex-column align-items-start text-shadow"
    >
        <div class="mx-2">
            <a class="nav-link my-2" href="#experiencia">
                <font-awesome-icon icon="terminal" class="me-2" />
                Experiencia
            </a>

            <a class="nav-link my-2" href="#educacion">
                <font-awesome-icon icon="book-bookmark" class="me-2" />
                Educación
            </a>

            <a class="nav-link my-2" href="#proyectos">
                <font-awesome-icon icon="code" class="me-2" />
                Proyectos
            </a>

            <a class="nav-link my-2" href="#sobre-mi">
                <font-awesome-icon icon="user" class="me-2" />
                Sobre mí
            </a>

            <a class="nav-link my-2" href="mailto:">
                <font-awesome-icon icon="paper-plane" class="me-2" />
                Contacto
            </a>
        </div>
    </nav>
</template>

<style scoped>
.nav-vertical {
    font-weight: bold;
}

.nav-link:hover {
    color: #fff;
    text-decoration: underline;
}
</style>
