import { createApp } from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.css";
import roteador from "./routes";
import { key, store } from "./store";

createApp(App).use(roteador).use(store, key).mount("#app");
