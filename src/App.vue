<template>
  <div id="app">
    <div class="vld-parent"></div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  created() {
    document.title = "Desafio Suthub";
  },
};
</script>