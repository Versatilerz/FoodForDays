import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MealsView from "@/views/MealsView.vue";
import SettingsView from "@/views/SettingsView.vue";
import HistoryView from "@/views/HistoryView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/meals", name: "meals", component: MealsView },
    { path: "/settings", name: "settings", component: SettingsView },
    { path: "/history", name: "history", component: HistoryView },
    { path: "/about", name: "about", component: AboutView },
  ],
});

export default router;
