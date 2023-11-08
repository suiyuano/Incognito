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
