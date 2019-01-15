import VueRouter from 'vue-router';

import home from './component/tabbar/home.vue';
import shoppingCart from './component/tabbar/shoppingCart.vue';
import search from './component/tabbar/search.vue';
import vip from './component/tabbar/vip.vue';

var router = new VueRouter({
    routes: [
        {path: '/', redirect: 'home'},
        {path: '/home', component: home},
        {path: '/vip', component: vip},
        {path: '/search', component: search},
        {path: '/shoppingCart', component: shoppingCart}
    ],
    linkActiveClass: 'mui-active'
})

export default router;