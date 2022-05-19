import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/form",
    },
    {
      path: "/form",
      name: "user-form",
      component: () => import("../views/UserForm.vue"),
    },
  ],
});

export default router;
