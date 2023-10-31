import "./styles/main.sass";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount("#app");
