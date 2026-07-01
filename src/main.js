import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";
import "devicon/devicon.min.css";

createApp(App)
  .use(router)
  .mount("#app");