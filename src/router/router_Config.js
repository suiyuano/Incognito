import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
 
export default new VueRouter({
    routes:[
        {
            path : "/",
            name: 'home',
            component: Index
        }
    ]
})