<template>
  <div class="container">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <div class="p-3 mt-4 bg-color shadow rounded">
      <div class="row">
        <div class="col-md-4 mx-auto m-2">
          <button
            type="button"
            class="form-control btn btn-light dados-brasil"
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
        </div>
        <div class="col-md-4 mx-auto m-2">
          <b-form-select
            v-model="selected"
            class="form-control dados-regiao text-center"
          >
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
        </div>
        <div class="col-md-4 mx-auto m-2">
          <div class="search">
            <form>
              <input
                type="text"
                class="form-control"
                placeholder="Buscar..."
                v-model="pais"
              />
              <button @click.prevent="buscarDadosPais" class="btn btn-primary">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="dados-regiao-container mt-3">
      <CardPaises
        :paises="dadosPaisesRegiao !== null ? dadosPaisesRegiao : dadosPais"
      />
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
      pais: null,
      dadosIdioma: null,
      dadosPaisesRegiao: null,
      dadosBrasil: null,
      dadosPais: null,
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
      } else {
        this.$bvModal.show("modal-dados-brasil");
      }
    },
    buscarDadosRegiao(regiao) {
      this.isLoading = true;
      apiPaises.get(`/region/${regiao}`).then((r) => {
        this.dadosPaisesRegiao = r.data;
        this.dadosPais = null;
        this.isLoading = false;
      });
    },
    buscarDadosPais() {
      if (this.pais) {
        this.isLoading = true;
        apiPaises
          .get(`/name/${this.pais}`)
          .then((r) => {
            this.dadosPaisesRegiao = null;
            this.dadosPais = r.data;
            this.isLoading = false;
          })
          .catch((e) => {
            if (e.response.status === 404) {
              this.$swal.fire({
                icon: "error",
                title: "Oops...",
                text:
                  "Nenhum pais encontrado, por favor verifique o nome digitado e tente novamente." +
                  this.pais,
              });
              this.isLoading = false;
            }
          });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Você precisa digitar algo para pesquisar.",
        });
      }
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
.container {
  background-image: url("../assets/world.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 85%;
  background-position: 0px 90px;
  height: 600px;
}

.bg-color {
  background-color: #3f3d56;
}

.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
}

.search input {
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid blue;
}

.search .fa-search {
  position: absolute;
  top: 20px;
  left: 16px;
}

.search button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 30px;
  width: 80px;
  padding: 0;
}

@media only screen and (max-width: 767px) {
  .container {
    background-position: 0px 130px;
  }
}
</style>