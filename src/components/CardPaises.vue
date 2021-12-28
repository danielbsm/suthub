<template>
  <div class="row match-height">
    <div class="col-md-6 col-lg-4 mb-3" v-for="pais in paises" :key="pais.nome">
      <div class="card card-developer-meetup shadow">
        <!----><!---->
        <div class="bg-light-primary rounded-top text-center p-2 bg-dark">
          <img
            :src="pais.flags.png"
            alt="pais.name.comom"
            width="100%"
            height="170"
            class="card-flags"
          />
        </div>
        <div class="card-body">
          <div class="media">
            <div class="media-body">
              <span
                >Nome: <span class="fw-bold">{{ pais.name.common }}</span></span
              >
              <hr class="m-0 p-0" />
              <span
                >Capital:
                <span class="fw-bold">{{
                  pais.capital ? pais.capital[0] : "Nenhum registro"
                }}</span></span
              >
              <hr class="m-0 p-0" />
              <span
                >Região: <span class="fw-bold">{{ pais.region }}</span></span
              >
              <hr class="m-0 p-0" />
              <span
                >SubRegião:
                <span class="fw-bold">{{ pais.subregion }}</span></span
              >
              <hr class="m-0 p-0" />
              <span
                >Idioma(s):
                <a
                  class="fw-bold"
                  style="text-decoration: none; cursor: pointer"
                  v-for="(idioma, key, value) in pais.languages"
                  :key="key"
                  @click.prevent="buscarDadosIdioma(idioma)"
                  >{{ value >= 1 ? `, ${idioma}` : idioma }}
                </a>
              </span>
              <hr class="m-0 p-0" />
              <span
                >Lat: <span class="fw-bold">{{ pais.latlng[0] }}</span> Log:
                <span class="fw-bold">{{ pais.latlng[1] }}</span>
              </span>
              <hr class="m-0 p-0" />
              <span
                >Ver no mapa:
                <a :href="pais.maps.googleMaps" target="_blank">
                  <b-icon-flag class="fs-5 mt-2 ms-2 google-maps"></b-icon-flag
                ></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-dados-idioma"
      centered
      size="xl"
      title="Paises com o mesmo idioma"
      scrollable
      ok-only
      ok-title="Fechar"
      ok-variant="danger"
    >
      <div class="row">
        <div
          class="card col-sm-2 m-3 shadow ms-auto"
          v-for="(dados, key) in dadosIdioma"
          :key="key"
        >
          <img
            :src="dados.flags.svg"
            class="card-img-top border mt-2"
            :alt="dados.name.common"
            style="heigth: 70px"
          />
          <span class="text-center pb-2">{{ dados.name.common }}</span>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { apiPaises } from "@/services.js";

export default {
  name: "CardPaises",
  props: ["paises"],
  data() {
    return {
      dadosIdioma: null,
      urlMaps: null,
    };
  },
  methods: {
    buscarDadosIdioma(idioma) {
      apiPaises.get(`/lang/${idioma}`).then((r) => {
        this.dadosIdioma = r.data;
        this.$bvModal.show("modal-dados-idioma");
      });
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1200) {
  .card-flags {
    width: 150px;
  }
}

.google-maps {
  cursor: pointer;
}
</style>