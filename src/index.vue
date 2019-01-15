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
                    <router-link class="mui-tab-item" to="/home">
                        <span class="mui-icon mui-icon-home"></span>
                        <span class="mui-tab-label">首页</span>
                    </router-link>
                    <router-link class="mui-tab-item" to="/vip">
                        <span class="mui-icon mui-icon-contact"></span>
                        <span class="mui-tab-label">会员</span>
                    </router-link>
                    <router-link class="mui-tab-item" to="/shoppingCart">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span
                                class="mui-badge">0</span></span>
                        <span class="mui-tab-label">购物车</span>
                    </router-link>
                    <router-link class="mui-tab-item" to="/search">
                        <span class="mui-icon mui-icon-search"></span>
                        <span class="mui-tab-label">搜索</span>
                    </router-link>
                </nav>
            </footer>

    </div>
</template>

<script>

</script>

<style scoped>
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
</style>