<template>
    <div>
        <swipe :goodsList="goodsList"></swipe>
        
        <nav>
            <ul>
                <li><a href="#/home/newsList"><img src="../../images/menu1.png" alt=""><span>新闻资讯</span></a></li>
                <li><a href="#/home/picShare"><img src="../../images/menu2.png" alt=""><span>图片分享</span></a></li>
                <li><a href="#/home/buyGoods"><img src="../../images/menu3.png" alt=""><span>商品购买</span></a></li>
                <li><a href="#"><img src="../../images/menu4.png" alt=""><span>留言反馈</span></a></li>
                <li><a href="#"><img src="../../images/menu5.png" alt=""><span>视频专区</span></a></li>
                <li><a href="#"><img src="../../images/menu6.png" alt=""><span>联系我们</span></a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import swipe from '../global/swipe.vue';

    export default {
        data: function () {
            return {
                goodsList: [
                    {src: '../../images/goods3.jpg'},
                    {src: '../../images/goods4.jpg'},
                    {src: '../../images/goods5.jpg'},
                    {src: '../../images/goods6.jpg'},
                    {src: '../../images/goods2.jpg'}
                ]
            }
        },
        components: {
            swipe: swipe
        },
        created: function() {
            this.getGoodsList();
        },
        methods: {
            getGoodsList: function () {
                this.$http.get('./data/goodsList.json').then(function (res) {
                    console.log(res.body);
                })
            }
        }
    }
</script>

<style lang="less" scoped>
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