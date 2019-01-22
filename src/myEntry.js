// 入口文件
import Vue from 'vue';

import index from './index.vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import router from './router';

import './less/global.less';

import '../lib/mui/css/mui.min.css';

import '../lib/mui/css/icons-extra.css';

import { Header, Swipe, SwipeItem, Lazyload, Switch } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);

// 全局的时间格式化过滤器
Vue.filter('timeFormat', function (msg) {
    var dt = new Date(msg);

    var y = dt.getFullYear();
    var m = dt.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dt.getDate();
    d = d < 10 ? '0' + d : d;

    var h = dt.getHours();
    h = h < 10 ? '0' + h : h;
    var min = dt.getMinutes();
    min = min < 10 ? '0' + min : min;
    var s = dt.getSeconds();
    s = s < 10 ? '0' + s : s;

    return `${y}-${m}-${d} ${h}:${min}:${s}`;
})

let car = JSON.parse(localStorage.getItem('car') || '[]');

// vuex的仓储
let store = new Vuex.Store({
    state: {
        // 购物车数据，每一个都是对象，对象中有如下属性： 1.购买商品的数量 2.购买商品的价格 3.是否被选中 4.商品名称
        shoppingCart: car
    },
    mutations: {
        toShoppingCar(state, goodsInfo) {
            let flag = false;

            state.shoppingCart.some(item => {
                if(item.name == goodsInfo.name) {
                    item.count += parseInt(goodsInfo.count);
                    flag = true;
                    return true;
                }
            })
            if(flag === false) {
                state.shoppingCart.push(goodsInfo);
            }
            localStorage.setItem('car', JSON.stringify(state.shoppingCart));
        }
    },
    getters: {
        getAllCount(state) {
            let allCount = 0;
            state.shoppingCart.forEach(item => {
                allCount += item.count;
            })
            return allCount;
        }
    }
})

var vm = new Vue({
    el: '#box',
    render: function (c) {
        return c(index);
    },
    router: router,
    store: store
})
