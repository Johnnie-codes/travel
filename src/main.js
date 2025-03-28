import "./assets/wind.css";
import { Icon } from "@iconify/vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import vRipple from "@/directives/vRipple";
import App from "./App.vue";
import router from "./router";
import toast from "./toast";
import modal from "@customizer/modal-x";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(toast);
app.use(modal);
app.use(VueApexCharts);
app.component("IIcon", Icon);
app.directive("ripple", vRipple);
app.mount("#app");
