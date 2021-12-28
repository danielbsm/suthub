<template>
  <div class="container">
    <div class="illustration-home">
      <img src="../assets/home.svg" alt="Home" />
    </div>

    <div class="card mb-4 shadow">
      <div class="card-body text-center">
        <b-icon-flag font-scale="3"></b-icon-flag>
        <h5 class="card-title">Desafio API Países</h5>
        <p class="card-text">
          Neste desafio será consumido a API de Países, podendo consultar e
          obter informações de uma determinada Região, País e idiomas.
        </p>

        <!-- modal trigger button -->
        <router-link
          type="button"
          class="btn btn-primary waves-effect waves-float waves-light"
          to="/paises"
        >
          Acessar
        </router-link>
      </div>
    </div>

    <div class="card mb-4 shadow">
      <div class="card-body text-center">
        <b-icon-code-square font-scale="3"></b-icon-code-square>
        <h5 class="card-title">Validação de formulário</h5>
        <p class="card-text">
          Neste desafio será apresentado as validações dos campos, seleções e
          retorno das validações envidas pelo submit.
        </p>

        <!-- modal trigger button -->
        <router-link
          type="button"
          class="btn btn-primary waves-effect waves-float waves-light"
          to="/formulario"
        >
          Acessar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}

.illustration-home {
  margin: auto;
  float: left;
  display: flex;
}
.illustration-home img {
  width: 95%;
  height: 95%;
  margin: auto;
}
@media only screen and (max-width: 1400px) {
  .illustration-home {
    width: 60%;
    margin-right: 20px;
  }
  .illustration-home img {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 991px) {
  .illustration-home {
    width: 100%;
    margin: 0 0 20px 13px;
  }
  .illustration-home img {
    width: 95%;
    height: 95%;
  }
}
</style>