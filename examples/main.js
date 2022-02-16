import Vue from "vue";
import App from "./App.vue";
import EorzeaCui from "../packages/index";
Vue.use(EorzeaCui);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
