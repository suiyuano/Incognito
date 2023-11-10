// import { createApp } from 'vue'
// import App from './App.vue'
// import './plugins/element.js'
// import installElementPlus from './plugins/element'
// // import { createWebHistory, createRouter } from 'vue-router'

// const app = createApp(App)
// installElementPlus(app)
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faWeixin, faQq, faWeibo, faAlipay } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faWeixin, faQq, faWeibo, faAlipay, faUser, faLock, faEnvelope);

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)

app.mount('#app')



// const history = createWebHistory()

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



// following are testing code
// import Vue from 'vue'
// import App from './App.vue';
// import { Button,Container,Aside,Header,Main,Radio,RadioGroup,RadioButton,Menu,Submenu,MenuItem,MenuItemGroup,Row,Col,Avatar,Dropdown,DropdownMenu,DropdownItem,Card,Table,TableColumn,Calendar,Divider } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import VueRouter from 'vue-router'
// import RouterConfig from './router/router_Config'
 
 
// Vue.use(VueRouter);
// Vue.use(Button);
// Vue.use(Radio);
// Vue.use(Container);
// Vue.use(Aside);
// Vue.use(Header);
// Vue.use(Main);
// Vue.use(RadioGroup);
// Vue.use(RadioButton);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Avatar);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Card);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Calendar);
// Vue.use(Divider);
 
// Vue.config.productionTip = false
 
// new Vue({
//   el: '#app',
//   router: RouterConfig,
//   render: h => h(App),
// })