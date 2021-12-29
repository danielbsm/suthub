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
            <validation-provider
              name="Data de Nascimento"
              :rules="{
                required: true,
                regex:
                  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
              }"
              v-slot="{ errors, classes }"
            >
              <b-form-input
                v-model="dataDeNascimento"
                :class="classes"
                placeholder="dd/mm/yyyy"
                v-mask="'##/##/####'"
              ></b-form-input>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12">
          <b-form-group label="Nome completo:" label-for="nome">
            <validation-provider
              name="Nome"
              rules="required|alpha_spaces|min:2"
              v-slot="{ errors, classes }"
            >
              <b-form-input
                :class="classes"
                placeholder="Ex: João Silva"
                v-model="nome"
              ></b-form-input>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12">
          <b-form-group label="CPF:" label-for="cpf">
            <validation-provider
              name="CPF"
              :rules="{ required: true, regex: /^\d{3}.\d{3}.\d{3}-\d{2}$/ }"
              v-slot="{ errors, classes }"
            >
              <b-form-input
                :class="classes"
                v-model="cpf"
                placeholder="123.456.789-09"
                v-mask="'###.###.###-##'"
              ></b-form-input>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="Espécie do pet:" label-for="especie">
            <select class="form-select" aria-label="Default select example">
              <option selected disabled>Selecione uma opção</option>
              <option v-for="pet in pets" :key="pet.value">
                {{ pet.text }}
              </option>
            </select>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="Raça do pet:" label-for="cpracaf">
            <select class="form-select" aria-label="Default select example">
              <option selected disabled>Selecione uma opção</option>
              <option v-for="pet in pets" :key="pet.value">
                {{ pet.text }}
              </option>
            </select>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="Renda mensal:" label-for="renda">
            <validation-provider
              name="Renda Mensal"
              :rules="{ required: true, min_value: 1000 }"
              v-slot="{ errors, classes }"
            >
              <b-input-group prepend="R$">
                <b-form-input
                  :class="classes"
                  v-model="rendaMensal"
                  v-money="money"
                  placeholder="0,00"
                ></b-form-input>
              </b-input-group>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="CEP:" label-for="cep">
            <validation-provider
              name="CEP"
              :rules="{ required: true, regex: /^\d{5}-\d{3}$/ }"
              v-slot="{ errors, classes }"
            >
              <b-form-input
                id="input-cep"
                :class="classes"
                v-model="cep"
                placeholder="00000-000"
                v-mask="'#####-###'"
              ></b-form-input>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="Rua:" label-for="rua">
            <validation-provider
              name="Rua"
              rules="required"
              v-slot="{ errors, classes }"
            >
              <b-form-input
                :class="classes"
                placeholder="Digite seu endereço"
                v-model="logradouro"
              ></b-form-input>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="Bairro:" label-for="bairro">
            <validation-provider
              name="Bairro"
              rules="required"
              v-slot="{ errors, classes }"
            >
              <b-form-input
                :class="classes"
                placeholder="Digite seu bairro"
                v-model="bairro"
              ></b-form-input>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="Cidade:" label-for="cidade">
            <validation-provider
              name="Cidade"
              rules="required"
              v-slot="{ errors, classes }"
            >
              <b-form-input
                :class="classes"
                placeholder="Digite sua cidade"
                v-model="cidade"
              ></b-form-input>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="4" sm="12" class="mt-2">
          <b-form-group label="Estado:" label-for="estado">
            <validation-provider
              name="Estado"
              rules="required|alpha|max:2"
              v-slot="{ errors, classes }"
            >
              <b-form-input
                :class="classes"
                placeholder="Ex: GO"
                v-model="estado"
                maxlength="2"
              ></b-form-input>
              <span class="mensagem-error">{{ errors[0] }}</span>
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="mt-3">
        <b-button type="submit" variant="primary">Salvar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { ValidationProvider, extend, configure } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/pt_BR.json";
import { VMoney } from "v-money";

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
});

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});

import { apiBuscaCep } from "@/services.js";

export default {
  components: {
    ValidationProvider,
  },
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
      estado: null,
      rendaMensal: null,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: "",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
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
      show: true,
      selected: null,
      status: null,
      file1: null,
    };
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  directives: {
    money: VMoney,
  },
  methods: {
    buscaCep(cepFormatado) {
      this.isLoading = true;
      apiBuscaCep.get(cepFormatado).then((r) => {
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
    },
  },
  watch: {
    cep() {
      let cepFormatado = this.cep.replace("-", "");
      if (cepFormatado.length === 8) {
        this.buscaCep(cepFormatado);
      }
    },
    rendaMensal() {
      let rendaMensal = this.rendaMensal.split(",");
      this.rendaMensal = rendaMensal[0].replace(".", "");
    },
  },
};
</script>

<style>
.mensagem-error {
  color: red;
}
</style>
