import VueRouter from 'vue-router';

import home from './component/tabbar/home.vue';
import shoppingCart from './component/tabbar/shoppingCart.vue';
import search from './component/tabbar/search.vue';
import vip from './component/tabbar/vip.vue';
import newsList from './component/news/newsList.vue';
import newsInfo from './component/news/newsInfo.vue';

var router = new VueRouter({
    routes: [
        {path: '/', redirect: 'home'},
        {path: '/home', component: home},
        {path: '/vip', component: vip},
        {path: '/search', component: search},
        {path: '/shoppingCart', component: shoppingCart},
        {path: '/home/newsList', component: newsList},
        {path: '/home/newInfo/:id', component: newsInfo}
    ],
    linkActiveClass: 'mui-active'
})

export default router;