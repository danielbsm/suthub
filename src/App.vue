<template>
  <div id="app">
    <div class="vld-parent"></div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./views/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>