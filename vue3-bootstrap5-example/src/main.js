import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap css
import "bootstrap"; //import bootstrap other components

createApp(App).use(store).use(router).mount("#app");
