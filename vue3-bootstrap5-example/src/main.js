import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap css
import "bootstrap"; //import bootstrap other components
import mitt from "mitt";

const app = createApp(App).use(store).use(router);
app.config.globalProperties.emitter = mitt();

app.mount("#app");
