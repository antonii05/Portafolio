<template>
    <div class="row justify-content-center text-center my-2">
        <div>
            <h5 class="mb-4 fw-bold">
                <font-awesome-icon icon="user" class="ms-2" />
                Sobre mí
            </h5>
            <hr class="hr-custom bg-dark rounded-3" />
            <!-- Contenido -->
            <div
                class="mt-5 card border-0 shadow-lg rounded-4 bg-dark bg-opacity-25"
            >
                <div class="card-body p-4 text-white text-start">
                    <div class="row">
                        <div class="col-8 text-center">
                            <p>
                                ¡Hola! Soy Antonio José Blázquez Jiménez,
                                desarrollador de software Full-Stack. <br />
                                Apasionado por la tecnología y la resolución de
                                problemas, con habilidades sólidas tanto en
                                frontend como en backend para crear soluciones
                                eficientes, escalables y orientadas al usuario.
                            </p>
                            <p>
                                Actualmente, sigo ampliando mis conocimientos en
                                desarrollo de videojuegos y realidad virtual.
                                Esta base técnica se complementa con experiencia
                                real en proyectos
                            </p>
                            <p>
                                Me definen valores como la responsabilidad, la
                                puntualidad y el trabajo en equipo, y siempre
                                estoy buscando nuevas oportunidades para
                                aprender y crecer. Si quieres saber más sobre lo
                                que hago, puedes visitar mi
                                <a
                                    class="text-dark fw-bold"
                                    href="https://github.com/antonii05"
                                    target="_blank"
                                    >GitHub
                                    <font-awesome-icon
                                        :icon="['fab', 'github']"
                                    />
                                </a>
                            </p>
                        </div>
                        <div class="col d-flex justify-content-center">
                            <img
                                id="FotoPerfil"
                                class="img-fluid rounded-5 shadow-lg"
                                src="@/assets/images/FOTO_CV.JPG"
                                alt="FotoPerfil"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hr-custom {
    margin: 0 auto;
    height: 7px;
    max-width: 200px;
}
img#FotoPerfil {
    max-width: 200px;
}
</style>