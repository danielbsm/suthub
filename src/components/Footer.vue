<template>
  <div class="fixed-bottom">
    <footer class="footer">
      <p>
        Desenvolvido por <span class="nome-desenvolvedor">Daniel Martins</span>
        <a href="https://danielbsm.com.br/" target="_blank"
          ><b-icon-globe2
            class="h4 text-dark ms-2 mb-0 rounded bg-light p-1"
          ></b-icon-globe2
        ></a>
        <b-icon-google
          class="h4 text-dark ms-2 mb-0 rounded bg-light p-1"
        ></b-icon-google>
        <a href="https://www.linkedin.com/in/danielbsm/" target="_blank"
          ><b-icon-linkedin
            class="h4 text-dark ms-2 mb-0 rounded bg-light p-1"
          ></b-icon-linkedin
        ></a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.footer {
  margin: 0;
  padding-bottom: 1px;
  background: #000;
  text-align: center;
  color: #fff;
}

.footer p {
  margin: 5px;
  padding-top: 5px;
  font-size: 1rem;
}

.nome-desenvolvedor {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

@media only screen and (max-width: 392px) {
  .footer p {
    margin: 5px;
    padding-top: 5px;
    font-size: 0.9rem;
  }
  .b-icon {
    font-size: 1rem;
  }
}
</style>
