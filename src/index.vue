<template>
    <div class="myContainer">
        <!-- 顶部固定定位的通栏topbar -->
        <mt-header fixed title="木毛商城">
        </mt-header>
        <transition>
            <router-view></router-view>
        </transition>
            <!-- 底部的固定通栏 -->
            <footer>
                <nav class="mui-bar mui-bar-tab">
                    <router-link class="mui-tab-item-wyw" to="/home">
                        <span class="mui-icon mui-icon-home"></span>
                        <span class="mui-tab-label">首页</span>
                    </router-link>
                    <router-link class="mui-tab-item-wyw" to="/vip">
                        <span class="mui-icon mui-icon-contact"></span>
                        <span class="mui-tab-label">会员</span>
                    </router-link>
                    <router-link class="mui-tab-item-wyw" to="/shoppingCart">
                        <span id="cartBadge" class="mui-icon mui-icon-extra mui-icon-extra-cart"><span
                                class="mui-badge" @sendCount="getCount">{{ $store.getters.getAllCount }}</span></span>
                        <span class="mui-tab-label">购物车</span>
                    </router-link>
                    <router-link class="mui-tab-item-wyw" to="/search">
                        <span class="mui-icon mui-icon-search"></span>
                        <span class="mui-tab-label">搜索</span>
                    </router-link>
                </nav>
            </footer>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            getCount(data) {
                this.count = data;
            }
        }
    }
</script>

<style lang="less" scoped>
    .myContainer {
        padding-top: 40px;
        padding-bottom: 50px;
        background-color: #fff;
        overflow-x: hidden;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all .4s;
    }

    .mui-active {
        background-color: #26A2FF;
    }

    .mui-bar-tab {

        .mui-tab-item-wyw {
            display: table-cell;
            overflow: hidden;
            width: 1%;
            height: 50px;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #929292;

            .mui-icon {
                top: 3px;
                width: 24px;
                height: 24px;
                padding-top: 0;
                padding-bottom: 0;
            }

            .mui-tab-label {
                font-size: 11px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>