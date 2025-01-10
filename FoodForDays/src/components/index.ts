import type { App } from "vue";
import HeaderComp from "./HeaderComp.vue";

export function SharedModule(app: App) {
  app.component("HeaderComp", HeaderComp);
}

export { HeaderComp };
