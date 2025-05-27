<template>
    <!-- TODO ANIADIR   -->
    <nav class="navbar navbar-expand-lg opacity-100">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#RRSS"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="RRSS">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- NONE -->
                </ul>
                <!-- RR.SS -->
                <div class="d-flex">
                    <h3 class="mx-2 rrss">
                        <a href="https://github.com/antonii05"
                            ><font-awesome-icon
                                :icon="['fab', 'github-alt']"
                                style="color: #000"
                        /></a>
                    </h3>
                    <h3 class="mx-2 rrss">
                        <a href="https://www.linkedin.com/in/antonio-josebj/"
                            ><font-awesome-icon
                                :icon="['fab', 'linkedin']"
                                style="color: #0e76a8"
                        /></a>
                    </h3>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.rrss:hover {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.3);
}
</style>
