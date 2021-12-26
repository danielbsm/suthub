import axios from 'axios'


export const apiPaises = {
    get(url) {
        return axios.get(`https://restcountries.com/v3.1${url}`);
    }
}