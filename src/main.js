import Vue from 'vue'
import App from './App.vue'
import router from './router'
import setRem from "../setRem";
import { Icon } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Icon);
Vue.use(Vant);
Vue.config.productionTip = false;
if(process.env.NODE_ENV === "development"){
  require('./mock/index.js')
}

window.addEventListener("resize", function () {
  setRem(600, 100);
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
