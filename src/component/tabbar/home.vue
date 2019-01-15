<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="items in goodsList" :key="items.src"><a href="#"><img :src="items.src" alt=""></a></mt-swipe-item>
        </mt-swipe>
        
        <nav>
            <ul>
                <li><a href="#"><img src="../../images/menu1.png" alt=""><span>新闻资讯</span></a></li>
                <li><a href="#"><img src="../../images/menu2.png" alt=""><span>图片分享</span></a></li>
                <li><a href="#"><img src="../../images/menu3.png" alt=""><span>商品购买</span></a></li>
                <li><a href="#"><img src="../../images/menu4.png" alt=""><span>留言反馈</span></a></li>
                <li><a href="#"><img src="../../images/menu5.png" alt=""><span>视频专区</span></a></li>
                <li><a href="#"><img src="../../images/menu6.png" alt=""><span>联系我们</span></a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                goodsList: [
                    {src: '../../images/goods3.jpg'},
                    {src: '../../images/goods4.jpg'},
                    {src: '../../images/goods5.jpg'},
                    {src: '../../images/goods6.jpg'}
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
 .mint-swipe {
     height: 200px;

    .mint-swipe-item {
        background-color: red;

        &:nth-last-of-type(2) {
            background-color: yellow;
        }
        &:nth-last-of-type(3) {
            background-color: pink;
        }

        a {
            display: block;
            width: 100%;
            height: 100%;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
 }
nav {

    margin-top: 10px;

 ul {
     overflow: hidden;
     list-style: none;

     li {
         float: left;
         height: 100px;
         width: 33.333%;
         text-align: center;

         a {
             display: block;
             width: 100%;
             font-size: 12px;
             color: #666;

             img {
                 display: block;
                 height: 60px;
                 margin: 0 auto;
             }

             span {
                 display: inline-block;
                 margin-top: 5px;
             }
         }
     }
 }
}
</style>