// 入口文件
import Vue from 'vue';

import index from './index.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import router from './router';

import './less/global.less';

import '../lib/mui/css/mui.min.css';

import '../lib/mui/css/icons-extra.css';

import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.filter('timeFormat', function (msg) {
    var dt = new Date(msg);

    var y = dt.getFullYear();
    var m = dt.getMonth() + 1;
    m = m.padStart(2, '0');
    var d = dt.getDate().padStart(2, '0');

    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();

    return `${y}-${m}-${d} ${h}:${m}:${s}`;
})

var vm = new Vue({
    el: '#box',
    render: function (c) {
        return c(index);
    },
    router: router
})
