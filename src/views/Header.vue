<template>
    <div>
        <div class="text-center alerta"> <span class="text-white">Desafio FrontEnd</span></div>
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand text-uppercase fs-2 logomarca" href="/">Suthub</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto fs-5">
                            <li class="nav-item">
                                <router-link class="nav-link" tag="a" to="/">Inicio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" tag="a" to="/Paises">Países</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Formulário</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-primary btn mt-1 text-uppercase ms-2">Cadastre-se</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="shadow p-2 bg-white rounded"></div>
    </div>
</template>
<script>
export default {
    name: "Header"
}
</script>

<style>
.alerta {
    font-size: 14px;
    background-color: #322348;
    padding: 2px;
}

.logomarca {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-image: linear-gradient(to right, rgb(48, 149, 142), rgb(0, 79, 73));
    background-clip: text;
    -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
    -webkit-text-fill-color: transparent;
}
</style>

