<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import useApiData from "../stores/useApiData";

const storeApiData = useApiData();

const router = useRouter();
const menuVisible = ref(false);

function changeMenuVisibility() {
  menuVisible.value = !menuVisible.value;
  console.log(menuVisible.value);
}

function toMainPage() {
  // window.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo(0, 0);
  router.push({ name: "MainPage" });
  menuVisible.value = false;
  storeApiData.currentPage = 1;
  storeApiData.searchValue = null;
}
function backToTop() {
  window.scrollTo(0, 0);
  menuVisible.value = false;
}
function backToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
  menuVisible.value = false;
}
</script>

<template>
  <nav>
    <menu v-if="menuVisible">
      <ul>
        <li @click="toMainPage">Home</li>
        <li @click="backToTop">Scroll To Top</li>
        <li @click="backToBottom">Scroll To Bottom</li>
      </ul>
    </menu>
    <span @click="toMainPage" class="logo">GalleryApp</span>
    <span
      v-if="!menuVisible"
      @click="changeMenuVisibility"
      class="hamburger-menu"
    ></span>
    <span @click="changeMenuVisibility" class="close-menu" v-else></span>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #000;
  z-index: 999;
  padding: 3rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.06);

  menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 16rem;
      list-style-type: none;

      li {
        cursor: pointer;
        font-size: 4rem;
        width: 100%;
        text-align: center;
        padding: 1rem 0;

        &:hover {
          background-color: #272727;
        }
      }
    }
  }

  .logo {
    font-size: 3rem;
    cursor: pointer;
  }

  .hamburger-menu {
    cursor: pointer;
    width: 2rem;
    border-top: 3px solid #fff;
    padding-top: 11px;
    position: relative;
    @media screen and (min-width: 800px) {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      // top: -10px;
      width: 2rem;
      border-top: 3px solid #fff;
    }

    &::after {
      content: "";
      position: absolute;
      top: 4px;
      width: 2rem;
      border-top: 3px solid #fff;
    }
  }

  .close-menu {
    cursor: pointer;
    position: relative;
    width: 2rem;

    &::before {
      content: "";
      width: 2rem;
      position: absolute;
      transform: rotate(-45deg);
      top: -3px;
      right: -1px;
      border-top: 3px solid #fff;
    }

    &::after {
      content: "";
      width: 2rem;
      position: absolute;
      transform: rotate(45deg);
      top: -3px;
      right: -1px;
      border-top: 3px solid #fff;
    }
  }
}
</style>
