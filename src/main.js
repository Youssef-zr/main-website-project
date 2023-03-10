import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import bootstrap and jquery and popper

import "bootstrap/dist/js/bootstrap.min.js";
import {PopoverPlugin} from"popper.js"


global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
