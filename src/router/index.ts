import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/IndexView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginRegister.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    name: "nomatch",
    path: "/:pathMatch(.*)*",
    redirect: { name: "404" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
