<template>
  <div>
    <div class="text-center alerta">
      <span class="text-white">Desafio FrontEnd</span>
    </div>
    <div class="container">
      <b-navbar
        toggleable="lg"
        class="navbar navbar-expand-lg navbar-light bg-white"
      >
        <b-navbar-brand class="logomarca fs-1 m-0 p-0" to="/"
          >Suthub</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ms-auto fs-5">
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item to="/paises">Paises</b-nav-item>
            <b-button to="/formulario" variant="primary" class="mt-1"
              >Formulário</b-button
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="shadow p-2 bg-white rounded"></div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style>
.alerta {
  font-size: 14px;
  background-color: #322348;
  padding: 2px;
}

.logomarca {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-image: linear-gradient(
    to right,
    rgb(48, 149, 142),
    rgb(0, 79, 73)
  );
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
}

@media only screen and (max-width: 500px) {
  .logomarca {
    color: black;
  }
}
</style>

