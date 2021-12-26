<template>
  <div class="container">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <div
      class="
        d-flex
        align-items-center
        p-3
        mt-4
        text-white
        bg-purple
        rounded
        shadow-sm
      "
    >
      <button
        type="button"
        class="btn btn-light dados-brasil text-success fs-6 text-uppercase"
        @click.prevent="buscarDadosBrasil"
      >
        Dados do Brasil
        <img
          src="../assets/svg/brazil.svg"
          alt="Brasil"
          width="30px"
          height="20px"
        />
      </button>
      <b-form-select v-model="selected" class="form-control dados-regiao">
        <b-form-select-option :value="null" disabled selected
          >Selecione uma região
        </b-form-select-option>
        <b-form-select-option
          v-for="region in regions"
          :value="region.continente"
          :key="region.continente"
          >{{ region.nome }}</b-form-select-option
        >
      </b-form-select>
      <div class="form-group has-search">
        <input type="text" class="form-control" placeholder="Procurar" />
        <b-icon-search></b-icon-search>
      </div>
    </div>
    <b-modal id="modal-dados-brasil" size="lg" title="Dados do Brasil">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(dados, key) in dadosBrasil"
          :key="key"
        >
          {{ key }} - {{ dados }}
        </li>
      </ul>
    </b-modal>
    <div class="dados-regiao-container mt-3">
      <CardPaises :paises="dadosPaisesRegiao" />
    </div>
  </div>
</template>
<script>
import { apiPaises } from "@/services.js";
import CardPaises from "@/components/CardPaises.vue";

export default {
  name: "Paises",
  components: {
    CardPaises,
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      selected: null,
      dadosPaisesRegiao: null,
      dadosBrasil: null,
      regions: [
        {
          nome: "Africa",
          continente: "Africa",
        },
        {
          nome: "Americas",
          continente: "Americas",
        },
        {
          nome: "Asia",
          continente: "Asia",
        },
        {
          nome: "Europa",
          continente: "Europe",
        },
        {
          nome: "Oceania",
          continente: "Oceania",
        },
      ],
    };
  },
  methods: {
    buscarDadosBrasil() {
      if (this.dadosBrasil === null) {
        this.isLoading = true;
        apiPaises.get("/name/brazil").then((r) => {
          this.dadosBrasil = r.data[0];
          this.isLoading = false;
          this.$bvModal.show("modal-dados-brasil");
        });
      }
    },
    buscarDadosRegiao(regiao) {
      this.isLoading = true;
      apiPaises.get(`/region/${regiao}`).then((r) => {
        this.dadosPaisesRegiao = r.data;
        this.isLoading = false;
      });
    },
  },
  watch: {
    selected(regiao) {
      this.buscarDadosRegiao(regiao);
    },
  },
};
</script>

<style scoped>
.bg-purple {
  background-color: rgb(48, 149, 142);
}

.dados-regiao {
  width: 180px;
  margin: auto;
}
</style>