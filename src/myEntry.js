// 入口文件
import Vue from 'vue';

import index from './index.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import router from './router';

import './less/global.less';

import '../lib/mui/css/mui.min.css';

import '../lib/mui/css/icons-extra.css';

import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
    el: '#box',
    render: function (c) {
        return c(index);
    },
    router: router
})
