<script setup>
// Components
import TheHeader from "./components/TheHeader.vue";
import MainPage from "./components/MainPage.vue";
// import ImagesContainer from "./components/ImagesContainer.vue";

import useApiData from "./stores/useApiData";
import { watch, computed } from "vue";
import { useRoute } from "vue-router";

const storeApidata = useApiData();

const route = useRoute();

const isArrayNotEmpty = computed(() => {
  return storeApidata.images.length !== 0;
});

watch(route, (to) => {
  document.title = to.meta.title;
});
</script>

<template>
  <div class="app">
    <TheHeader />
    <!-- <MainPage class="input" /> -->
    <router-view></router-view>
    <!-- <ImagesContainer class="images" /> -->
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;
  scroll-behavior: smooth;
}

.app {
  background: url("./assets/earth-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  transition: 0.3s ease all;
}
</style>
