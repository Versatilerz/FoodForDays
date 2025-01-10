import type { App } from "vue";

import HeaderComp from "./Header/HeaderComp.vue";
import Meal from "./Meal/Meal.vue";
import Card from "./shared/Card.vue";

export function SharedModule(app: App) {
  app.component("Card", Card);
  app.component("HeaderComp", HeaderComp);
  app.component("Meal", Meal);
}

export { HeaderComp, Meal };
