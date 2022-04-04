<script setup>
import TheInput from "./TheInput.vue";
import ImageCard from "./ImageCard.vue";
import ImageModal from "./ImageModal.vue";
import Pagination from "./Pagination.vue";

import useApiData from "../stores/useApiData";

import { ref, computed } from "vue";

const storeApiData = useApiData();

const images = computed(() => {
  return storeApiData.images;
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const fullSizePhoto = ref(false);
const imgUrl = ref(null);

function showPhoto(payload) {
  imgUrl.value = payload;
  fullSizePhoto.value = true;
}

function closeWindow() {
  fullSizePhoto.value = false;
}
</script>

<template>
  <ImageModal
    :imgUrl="imgUrl"
    @closeWindow="closeWindow"
    v-if="fullSizePhoto"
  />
  <div class="wrapper">
    <span @click="scrollToTop" class="scroll-to-top"
      ><font-awesome-icon icon="arrow-up"
    /></span>
    <TheInput />
    <ul v-show="storeApiData.length !== 0">
      <ImageCard
        v-for="image in images"
        :imageData="image"
        :key="image.id"
        @imgURL="showPhoto"
      />
    </ul>
    <Pagination />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15rem;
  // padding-bottom: 6.4rem;
  background: #272727;
  min-height: 100vh;

  .scroll-to-top {
    cursor: pointer;
    position: fixed;
    display: none;
    bottom: 1rem;
    right: 0.35rem;
    color: #fff;
    font-size: 2.4rem;
    border: solid 2px #fff;
    border-radius: 9999px;
    padding: 0.5rem;
    transition: 0.3s ease transform;
    z-index: 10;

    @media screen and (min-width: 800px) {
      display: initial;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.4);
    }
  }

  ul {
    color: #fff;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
    padding-top: 5rem;

    @media screen and (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (min-width: 1600px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
