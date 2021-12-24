<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-4">
                <div class="card">
                    <div class="card-body text-center">
                    <b-icon-flag font-scale="3"></b-icon-flag>
                    <h5 class="card-title">Desafio API Países</h5>
                    <p class="card-text">Neste desafio iremos consumir uma API de Países, podendo consultar e obter informações de um determinado País.</p>

                    <!-- modal trigger button -->
                    <button type="button" class="btn btn-primary waves-effect waves-float waves-light" data-bs-toggle="modal" data-bs-target="#shareProject">
                        Acessar
                    </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mt-4">
                <div class="card">
                    <div class="card-body text-center">
                    <b-icon-code-square font-scale="3"></b-icon-code-square>
                    <h5 class="card-title">Validação de formulário</h5>
                    <p class="card-text">Neste desafio será apresentado as validações dos campos, seleções e retorno das validações pelo submit.</p>

                    <!-- modal trigger button -->
                    <button type="button" class="btn btn-primary waves-effect waves-float waves-light" data-bs-toggle="modal" data-bs-target="#shareProject">
                        Acessar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>