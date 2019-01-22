import VueRouter from 'vue-router';

import home from './component/tabbar/home.vue';
import shoppingCart from './component/tabbar/shoppingCart.vue';
import search from './component/tabbar/search.vue';
import vip from './component/tabbar/vip.vue';
import newsList from './component/news/newsList.vue';
import newsInfo from './component/news/newsInfo.vue';
import picShare from './component/pictures/picShare.vue';
import goodsList from './component/buyGoods/goodsList.vue';
import goodsInfo from './component/buyGoods/goodsInfo.vue';
import desc from './component/buyGoods/desc.vue';
import goodsComment from './component/buyGoods/goodsComment.vue';

var router = new VueRouter({
    routes: [
        {path: '/', redirect: 'home'},
        // 底部导航——主页
        {path: '/home', component: home},
        // 底部导航——vip
        {path: '/vip', component: vip},
        // 底部导航——搜索
        {path: '/search', component: search},
        // 底部导航——购物车
        {path: '/shoppingCart', component: shoppingCart},
        // 新闻列表
        {path: '/home/newsList', component: newsList},
        // 新闻详情
        {path: '/home/newInfo/:id', component: newsInfo},
        // 图片分享
        {path: '/home/picShare', component: picShare},
        // 商品购买
        {path: '/home/buyGoods', component: goodsList},
        // 商品详情
        {path: '/home/goodsInfo/:id', component: goodsInfo, name: 'goodsInfo'},
        // 图文介绍
        {path: '/home/desc/:id', component: desc, name: 'desc'},
        // 商品评论
        {path: '/home/goodsComment/:id', component:goodsComment, name: 'goodsComment'}
    ],
    linkActiveClass: 'mui-active'
})

export default router;