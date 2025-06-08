import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/Home.vue") },
  { path: "/blog", name: "Blog", component: () => import("@/views/Blog.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
