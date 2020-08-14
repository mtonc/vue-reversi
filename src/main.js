import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import EventBus from "./EventBus";

Vue.config.productionTip = false;
Vue.prototype.$eventBus = EventBus;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
