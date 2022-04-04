<script setup>
import { ref, computed } from "vue";
import useApiData from "../stores/useApiData";

const storeApiData = useApiData();

function previousPage() {
  storeApiData.currentPage--;
}

function nextPage() {
  storeApiData.currentPage++;
}

const isImagesArrayEmpty = computed(() => {
  return storeApiData.images.length === 0;
});

const showPreviousBtn = computed(() => {
  return storeApiData.currentPage > 1;
});

const userInputPage = ref(null);

const errorText = ref(null);

function goToPage(e) {
  const errorMessage = document.querySelector(".error-message");
  if (userInputPage.value > storeApiData.maxPage) {
    errorText.value = `You must not type number bigger than ${storeApiData.maxPage}`;
    errorMessage.style.opacity = "1";
    setTimeout(() => {
      errorMessage.style.opacity = "0";
    }, 3000);
  } else if (userInputPage.value < 1) {
    errorText.value = "You must not type number lower than 1";
    errorMessage.style.opacity = "1";
    setTimeout(() => {
      errorMessage.style.opacity = "0";
    }, 3000);
  } else {
    storeApiData.currentPage = userInputPage.value;
  }
  userInputPage.value = null;
  e.target.blur();
}
</script>

<template>
  <div v-if="!isImagesArrayEmpty" class="container">
    <span class="error-message">{{ errorText }}</span>
    <button v-show="showPreviousBtn" @click="previousPage" class="btn-previous">
      Prev
    </button>
    <p>{{ storeApiData.currentPage }} / {{ storeApiData.maxPage }}</p>
    <button @click="nextPage" class="btn-next">Next</button>
    <input
      type="number"
      placeholder="Go to page..."
      min="1"
      :max="storeApiData.maxPage"
      v-model="userInputPage"
      @keydown.enter="goToPage($event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.error-message {
  opacity: 0;
  position: absolute;
  top: -5rem;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
  font-size: 1.6rem;
  transition: 0.3s ease-in-out opacity;
}

.container {
  width: 35rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  gap: 2rem;
  position: relative;

  button {
    cursor: pointer;
    width: 6rem;
    height: 3rem;
    padding: 1.5rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 2rem;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;

    &:hover {
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.97);
    }
  }

  p {
    font-size: 2rem;
    color: #fff;
    margin: 0 auto;
    grid-column: 2;
  }

  input {
    font-family: inherit;
    grid-column: 2;
    width: 100%;
    padding: 0.5rem;
    border: solid 1px #fff;

    &::placeholder {
      color: #000;
    }

    &:focus {
      outline: none;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
