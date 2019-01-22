<template>
    <div class="shoppingCar_container">
        <!--  商品列表-->
        <div class="goodsList">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img src="../../images/goods1.jpg" alt="">
                        <h4>下北泽特产————旺旺先辈</h4>
                        <span>￥114514</span>

                        <div class="mui-numbox" data-numbox-min='0' data-numbox-max='10'>
                            <!-- "-"按钮，点击可减小当前数值 -->
                            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                            <input class="mui-numbox-input" type="number"/>
                            <!-- "+"按钮，点击可增大当前数值 -->
                            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                        </div>

                        <a href="#">删除</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 结算区域 -->
        <div class="buy">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from '../global/shoppingcar_numbox.vue';

    export default {
        data() {
            return {}
        },
        methods: {},
        components: {
            shoppingNumBox: numbox
        }
    }
</script>

<style lang="less" scoped>
    .shoppingCar_container {
        .mui-card-content-inner {
        }

        .goodsList {
            position: relative;

            img {
                width: 60px;
                height: 60px;
                position: absolute;
                top: 0;
                left: 80px;
            }

            h4 {
                font-size: 13px;
                position: absolute;
                top: 2px;
                right: 80px;
            }
            span {
                font-size: 14px;
                color: red;
                position: absolute;
                top: 41px;
                left: 144px;
            }
            a {
                position: absolute;
                top: 44px;
                right: 20px;
            }
            .mui-numbox {
                position: absolute;
                bottom: 3px;
                right: 62px;
                width: 110px;
                height: 25px;
            }
        }
    }
</style>