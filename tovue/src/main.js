import Vue from "vue";
import App from "./App.vue";
import storePlugin from "./storePlugin";
Vue.use(storePlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
