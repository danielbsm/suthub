<template>
  <div class="container mt-4">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <h3>
      <b-icon-person-plus-fill></b-icon-person-plus-fill> Formulario de cadastro
    </h3>
    <hr />
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form @submit.prevent="handleSubmit(onSubmit)">
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
                  validarAniversario: { min: 18, max: 65 },
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
                :rules="{ required: true, validarCpf: true }"
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
              <validation-provider
                name="Espécie do Pet"
                rules="required"
                v-slot="{ errors }"
              >
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="selectRaca"
                  @change="selectPet($event)"
                >
                  <option selected disabled>Selecione uma opção</option>
                  <option
                    v-for="pet in pets"
                    :key="pet.value"
                    :value="pet.value"
                  >
                    {{ pet.text }}
                  </option>
                </select>
                <span class="mensagem-error">{{ errors[0] }}</span>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="4" sm="12" class="mt-2">
            <b-form-group label="Raça do pet:" label-for="racaPet">
              <validation-provider
                name="Raça do Pet"
                rules="required"
                v-slot="{ errors }"
              >
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="racaSelecionada"
                  :disabled="disabled"
                >
                  <option
                    v-for="raca in racas"
                    :key="raca.value"
                    :value="raca.value"
                  >
                    {{ raca.text }}
                  </option>
                </select>
                <span class="mensagem-error">{{ errors[0] }}</span>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="4" sm="12" class="mt-2" v-if="racaSelecionada == 'OU'">
            <b-form-group label="Digite a raça:" label-for="outraRaca">
              <validation-provider
                name="Outra Raça"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <b-form-input
                  :class="classes"
                  v-model="outraRaca"
                ></b-form-input>
                <span class="mensagem-error">{{ errors[0] }}</span>
              </validation-provider>
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
    </ValidationObserver>
  </div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
} from "vee-validate";
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

extend("validarAniversario", {
  validate(value, args) {
    if (value.length === 10) {
      const newDate = value.split("/");
      const data = new Date();
      const data65 = new Date().setFullYear(
        data.getFullYear() - Number.parseInt(args.max)
      );
      const data15 = new Date().setFullYear(
        data.getFullYear() - Number.parseInt(args.min)
      );
      const aniversario = new Date(`${newDate[1]}/${newDate[0]}/${newDate[2]}`);
      if (aniversario >= data65 && aniversario <= data15) {
        return true;
      } else {
        return `O intervalo de idade valido é entre ${args.min} e ${args.max} anos`;
      }
    } else {
      return "Data incompleta";
    }
  },
  params: ["min", "max"],
});

extend("validarCpf", (value) => {
  let cpfDigitado = value.replaceAll("-", "");
  cpfDigitado = cpfDigitado.replaceAll(".", "");
  if (cpfDigitado.length === 11) {
    var Soma;
    var Resto;

    Soma = 0;
    if (
      cpfDigitado == "00000000000" ||
      cpfDigitado == "11111111111" ||
      cpfDigitado == "22222222222" ||
      cpfDigitado == "33333333333" ||
      cpfDigitado == "44444444444" ||
      cpfDigitado == "66666666666" ||
      cpfDigitado == "77777777777" ||
      cpfDigitado == "88888888888" ||
      cpfDigitado == "99999999999"
    )
      return "O CPF digtado é invalido.";

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(cpfDigitado.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpfDigitado.substring(9, 10)))
      return "O CPF digtado é invalido.";

    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(cpfDigitado.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpfDigitado.substring(10, 11)))
      return "O CPF digtado é invalido.";
    return true;
  } else {
    return "CPF incompleto.";
  }
});

extend("validarRendaMensal", (value) => {
  if (value !== 0 && value >= 1000) {
    return true;
  } else {
    return "O campo Renda Mensal precisa ser 1000 ou maior";
  }
});

import { apiBuscaCep } from "@/services.js";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
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
      selectRaca: null,
      racas: [],
      racaSelecionada: null,
      outraRaca: null,
      disabled: true,
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
      ],
      racaCaes: [
        { value: "VL", text: "Vira Lata" },
        { value: "CF", text: "Coffap" },
        { value: "LB", text: "Labrador" },
        { value: "BD", text: "Buldogue" },
        { value: "HK", text: "Husk" },
        { value: "OU", text: "Outros" },
      ],
      racaGato: [
        { value: "PS", text: "Persa" },
        { value: "MC", text: "Maine Coon" },
        { value: "SM", text: "Siamês" },
        { value: "RL", text: "Ragdoll" },
        { value: "SP", text: "Sphynx" },
        { value: "OU", text: "Outros" },
      ],
      show: true,
      selected: null,
      status: null,
      file1: null,
    };
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
    selectPet(event) {
      this.disabled = false;
      this.outraRaca = null;
      if (event.target.value === "cao") {
        this.racas = this.racaCaes;
      } else {
        this.racas = this.racaGato;
      }
    },
    onSubmit() {
      alert("submitted");
    },
  },
  watch: {
    cep() {
      let cepFormatado = this.cep.replace("-", "");
      if (cepFormatado.length === 8) {
        this.buscaCep(cepFormatado);
      }
    },
  },
};
</script>

<style>
.mensagem-error {
  color: red;
}
</style>
