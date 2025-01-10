import "./styles/main.css";
import "./styles/variables.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { SharedModule } from "./components";

const app = createApp(App);

app.use(createPinia());
app.use(router).use(SharedModule);

app.mount("#app");
