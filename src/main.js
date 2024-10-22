import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./assets/css/global.less";
import "./assets/font/iconfont.css";
import store from "./store";
import SocketService from "@/utils/socket_service";
// import * as echarts from "echarts";
// 对服务端进行websocket的连接
SocketService.Instance.connect();
// 其他的组件  this.$socket
Vue.prototype.$socket = SocketService.Instance;
// 请求基准路径的配置
axios.defaults.baseURL = "http://127.0.0.1:8888/api/";
// 将axios挂载到Vue的原型对象上
// 在别的组件中 this.$http
Vue.prototype.$http = axios;

// 将全局的echarts对象挂载到Vue的原型对象上
// 别的组件中 this.$echarts
Vue.prototype.$echarts = window.echarts;
// Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
