<script setup>
import { ref, computed, watch } from "vue";
import axios from "axios";
import useApiData from "../stores/useApiData";
import { useRouter } from "vue-router";

const storeApiData = useApiData();
const router = useRouter();

const searchValue = ref(null);

const page = computed(() => {
  return storeApiData.currentPage;
});

function search(e, query) {
  storeApiData.searchValue = query;
  console.log(query);
  storeApiData.currentPage = 1;
  axios
    .get(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=${storeApiData.perPage}&query=${query}&client_id=${storeApiData.API_key}`
    )
    .then((response) => {
      console.log(response);
      console.log(response.data.results);
      if (response.data.results.length !== 0) {
        storeApiData.maxPage = response.data.total_pages;
        storeApiData.images = response.data.results;
        router.push({
          name: "ImagesContainer",
          params: {
            id: query.split(" ").join("-"),
            pageNum: storeApiData.currentPage,
          },
        });
      } else {
        router.push({
          name: "NotFound",
        });
      }
    });
  e.target.value = "";
  e.target.blur();
}

watch(page, (val) => {
  if (val) {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${storeApiData.currentPage}&per_page=${storeApiData.perPage}&query=${storeApiData.searchValue}&client_id=${storeApiData.API_key}`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.results);
        if (response.data.results.length !== 0) {
          storeApiData.maxPage = response.data.total_pages;
          storeApiData.images = response.data.results;
          router.push({
            name: "ImagesContainer",
            params: {
              id: storeApiData.searchValue.split(" ").join("-"),
              pageNum: storeApiData.currentPage,
            },
          });
        } else {
          router.push({
            name: "NotFound",
          });
        }
      });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
</script>

<template>
  <input
    @keydown.enter="search($event, searchValue)"
    v-model="searchValue"
    type="text"
    placeholder="Search for..."
  />
</template>

<style lang="scss" scoped>
input {
  background-color: transparent;
  border: 0;
  border-bottom: 3px solid #929292;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: #929292;
    transition: 0.3s ease color;
  }

  &:focus {
    border-bottom: 3px solid #fff;
    outline: none;

    &::placeholder {
      color: transparent;
    }
  }
}
</style>
