import { createApp } from 'vue'
import App from './App.vue'
import './plugins/element.js'
import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
app.mount('#app')

// 下面貌似是vue2 Element-UI的方式
// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';

// Vue.use(ElementUI);

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });