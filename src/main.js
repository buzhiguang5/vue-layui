import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import layui from "./index";

import "@/assets/layui.css";
import "@/assets/layer.css";
import "@/assets/vue-layui.css";

Vue.use(layui);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
