import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../components/MainPage.vue";
import ImagesContainer from "../components/ImagesContainer.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "MainPage",
    component: MainPage,
    meta: { title: "GalleryApp | Home" },
  },
  {
    path: "/search/:id/page/:pageNum",
    name: "ImagesContainer",
    component: ImagesContainer,
    meta: { title: "GalleryApp | Searching" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { title: "GalleryApp | Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
