import { createRouter, createWebHashHistory } from "vue-router";
import HomeMenu from "../pages/HomeMenu.vue";
import CocktailMenu from "../pages/CocktailMenu.vue";
import CocktailRandom from "../pages/CocktailRandom.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeMenu,
  },
  {
    path: "/cocktails/:rid",
    name: "cocktail",
    component: CocktailMenu,
  },
  {
    path: "/random",
    name: "cocktailRandom",
    component: CocktailRandom,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
