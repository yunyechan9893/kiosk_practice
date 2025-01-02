import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/HomePage.vue"),
  },{
    path: "/products",
    name: "products",
    component: () => import("@/views/ProductPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;