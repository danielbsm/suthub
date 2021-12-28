import axios from 'axios'


export const apiPaises = {
    get(url) {
        return axios.get(`https://restcountries.com/v3.1${url}`);
    }
}

export const apiBuscaCep = {
    get(cep) {
        return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    }
}