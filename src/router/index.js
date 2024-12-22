import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/IndexView.vue";
import AddExperiencesView from "@/views/AddExperiencesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView,
    },
    {
      path: "/add",
      name: "add",
      component: AddExperiencesView,
    },
  ],
});

export default router;
