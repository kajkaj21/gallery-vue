import { defineStore } from "pinia";

export default defineStore("ApiData", {
  state: () => {
    return {
      API_key: "HVdsTkWw4SHRam4tyFwqn4_AyO0c8n57gTHjctVIH3U",
      images: [],
      currentPage: 1,
      maxPage: null,
      perPage: 24,
      searchValue: null,
    };
  },
  getters: {
    getImagesLength(state) {
      return state.images.length;
    },
  },
});
