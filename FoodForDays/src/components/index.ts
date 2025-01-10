import type { App } from "vue";

import MealComp from "./Meal/MealComp.vue";
import HeaderComp from "./Header/HeaderComp.vue";

export function SharedModule(app: App) {
  app.component("HeaderComp", HeaderComp);
  app.component("MealComp", MealComp);
}

export { HeaderComp, MealComp };
