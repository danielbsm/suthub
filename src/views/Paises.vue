<template>
    <div class="container">
        <div class="d-flex align-items-center p-3 mt-4 text-white bg-purple rounded shadow-sm">
            <button type="button" v-b-modal.modal-dados-brasil class="btn btn-light dados-brasil text-success fs-6 text-uppercase">Dados do Brasil <img src="../assets/svg/brazil.svg" alt="Brasil" width="30px" height="20px"></button>
            <b-form-select v-model="selected" class="form-control dados-regiao">
                <b-form-select-option :value="null" disabled selected>Selecione uma região </b-form-select-option>
]               <b-form-select-option v-for="region in regions" :value="region.continente" :key="region.continente">{{region.nome}}</b-form-select-option>
            </b-form-select>
            <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Procurar">
            </div>
        </div>
        <b-modal id="modal-dados-brasil" size="lg" title="Dados do Brasil">
            <h5>teste</h5>
        </b-modal>
        <div class="dados-regiao-container mt-3">
            <CardPaises :paises="dadosRegiao"/>
        </div>
    </div>
</template>
<script>

import CardPaises from '@/components/CardPaises.vue';

 export default{
     name: "Paises",
     components: {
         CardPaises
     },
     data() {
        return {
            selected: null,
            dadosRegiao: [],
            regions: [
                {
                    nome:'Africa',
                    continente: 'Africa'
                },
                {
                    nome:'Americas',
                    continente: 'Americas'
                },
                {
                    nome: 'Asia',
                    continente: 'Asia'
                },
                {
                    nome: 'Europa',
                    continente: 'Europe'
                },
                {
                    nome: 'Oceania',
                    continente: 'Oceania'
                }
            ]
        }
      },
      methods: {
          getDadosRegiao(regiao){
              fetch(`https://restcountries.com/v3.1/region/${regiao}`)
              .then(r => r.json())
              .then(r => {
                this.dadosRegiao = r;
              });
          }
      },
      watch: {
          selected(region){
              this.getDadosRegiao(region);
          }
      }
 }
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