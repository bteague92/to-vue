import store from "./vuex/store";
export default {
  store,
  install(Vue, options) {
    Vue.prototype.$myStore = store;
    console.log(options);
  },
};
