<template>
  <div class="container mt-4">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <h3>
      <b-icon-person-plus-fill></b-icon-person-plus-fill> Formulario de cadastro
    </h3>
    <hr />

    <b-form>
      <b-row>
        <b-col md="4" sm="12">
          <b-form-group
            label="Data de nascimento:"
            label-for="dataDeNascimento"
          >
            <b-form-datepicker
              placeholder="dd/mm/yyyy"
              required
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12">
          <b-form-group label="Nome:" label-for="nome">
            <b-form-input placeholder="Ex: João Silva" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12">
          <b-form-group label="CPF:" label-for="cpf">
            <b-form-input placeholder="123.456.789-09" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="CEP:" label-for="cep">
            <b-form-input
              placeholder="00000-000"
              v-model="cep"
              @keyup="buscaCep()"
              maxlength="8"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="Endereço:" label-for="rua">
            <b-form-input
              placeholder="Digite seu endereço"
              required
              :value="logradouro"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="2" sm="12" class="mt-2">
          <b-form-group label="Cidade:" label-for="cidade">
            <b-form-input
              placeholder="Digite sua cidade"
              require
              :value="cidade"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="2" sm="12" class="mt-2">
          <b-form-group label="Bairro:" label-for="bairro">
            <b-form-input
              placeholder="Digite seu bairro"
              require
              :value="bairro"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="1" sm="12" class="mt-2">
          <b-form-group label="Estado:" label-for="estado">
            <select class="form-select" aria-label="Default select example">
              <option></option>
              <option v-for="uf in ufs" :key="uf.value">{{ uf.text }}</option>
            </select>
          </b-form-group>
        </b-col>
      </b-row>

      <h3 class="mt-3">Pet</h3>
      <hr class="mb-2 mt-0" />

      <b-row>
        <b-col md="6" sm="12">
          <select class="form-select" aria-label="Default select example">
            <option selected disabled>Selecione uma opção</option>
            <option v-for="pet in pets" :key="pet.value">{{ pet.text }}</option>
          </select>
        </b-col>
        <b-col md="6" sm="12">
          <select class="form-select" aria-label="Default select example">
            <option selected disabled>Selecione uma opção</option>
            <option v-for="pet in pets" :key="pet.value">{{ pet.text }}</option>
          </select>
        </b-col>
      </b-row>
      <div class="mt-3">
        <b-button type="submit" variant="primary">Salvar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { apiBuscaCep } from "@/services.js";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      nome: null,
      email: null,
      cpf: null,
      dataDeNascimento: null,
      cep: null,
      logradouro: null,
      bairro: null,
      cidade: null,

      pets: [
        { value: "cao", text: "Cão" },
        { value: "gato", text: "Gato" },
        { value: "outro", text: "Outro" },
      ],
      racaPet: [
        { value: "VL", text: "Vira Lata" },
        { value: "CF", text: "Coffap" },
        { value: "LB", text: "Labrador" },
        { value: "PL", text: "Peludo" },
      ],
      ufs: [
        { value: "GO", text: "GO" },
        { value: "SP", text: "SP" },
        { value: "MG", text: "MG" },
        { value: "PR", text: "PR" },
      ],
      show: true,
      selected: null,
      status: null,
      file1: null,
    };
  },
  methods: {
    buscaCep() {
      if (this.cep.length === 8) {
        this.isLoading = true;
        apiBuscaCep.get(this.cep).then((r) => {
          const dados = r.data;

          if (dados.erro === true) {
            this.logradouro = null;
            this.bairro = null;
            this.cidade = null;
            this.estado = null;

            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Cep não encontrado, verifique o cep digitado e tente novamente.",
            });
            this.isLoading = false;
          } else {
            this.logradouro = dados.logradouro;
            this.bairro = dados.bairro;
            this.cidade = dados.localidade;
            this.estado = dados.uf;
            this.isLoading = false;
          }
        });
      }
    },
  },
};
</script>

<style>
</style>
