<template>
<div class="row match-height">
    <div class="col-md-6 col-lg-4 mb-3" v-for="pais in paises" :key="pais.nome">
    <div class="card card-developer-meetup shadow">
        <!----><!---->
        <div class="bg-light-primary rounded-top text-center p-2 bg-dark">
            <img :src="pais.flags.png" alt="Meeting Pic" width="100%" height="170" class="">
        </div>
        <div class="card-body">
            <div class="media">
                <div class="media-body">
                    <span>Nome: <span class="fw-bold">{{pais.name.common}}</span></span>
                    <hr class="m-0 p-0">
                    <span>Capital: <span class="fw-bold">{{(pais.capital ? pais.capital[0] : 'Nenhum registro')}}</span></span> 
                    <hr class="m-0 p-0">
                    <span>Região: <span class="fw-bold">{{pais.region}}</span></span> 
                    <hr class="m-0 p-0">
                    <span>SubRegião: <span class="fw-bold">{{pais.subregion}}</span></span>  
                    <hr class="m-0 p-0">
                    <span>Idioma(s): <span class="fw-bold">{{formatarIdioma(pais.languages)}} </span> </span> 
                    <hr class="m-0 p-0">
                    <span>Lat: <span class="fw-bold">{{pais.latlng[0]}}</span> Log: <span class="fw-bold">{{pais.latlng[1]}}</span> </span> 
                    <hr class="m-0 p-0">
                    <span>Ver no mapa: <a target="_blank" :href="pais.maps.googleMaps"><b-icon-flag class="fs-5 mt-2"></b-icon-flag></a></span> 
                
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    name: 'CardPaises',
    props: ['paises'],
    methods: {
        formatarIdioma(valor){

            let returnIdiomas = [];

            if(valor.lenght > 1) {
                for(let i = 0; i < valor.lenght; ++i)
                {
                    returnIdiomas += valor[i];
                }
            }
            else
                returnIdiomas = valor;
            return returnIdiomas;
        }
    }
}
</script>
