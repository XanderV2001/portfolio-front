import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../pages/TestPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
