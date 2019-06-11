<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-item">
                <img src="../../../../assets/xkwx.png" class="xkwx-img">
            </div>
            <div class="wrapper-item">
                <div class="title">关于我们</div>
                <div class="text">
                    <div class="text-item">官方微信公众号</div>
                    <div class="text-item">官方微博</div>
                    <div class="text-item">百度贴吧</div>
                </div>
            </div>

            <div class="wrapper-item">
                <div class="title">联系我们</div>

                <div class="text">
                    <div class="text-item">客服邮箱：790134972@qq.com</div>
                    <div class="text-item">客服电话：18852859526</div>
                    <div class="text-item">廉洁举报：790134972@qq.com</div>
                    <div class="text-item">主播签约： QQ：790134972</div>
                </div>
            </div>

            <div class="wrapper-item">
                <div class="title">对外合作</div>

                <div class="text">
                    <div class="text-item">邮箱：790134972@qq.com</div>
                    <div class="text-item">前端：底层大佬.com</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'login',
        components: {
        },
        data() {
            return {
                name: "",
                psw: ""
            };
        },
    }
</script>
<style lang="stylus" scoped>
    .wrapper
        display flex
        justify-content space-around
        .wrapper-item
            .title
                font-weight: 400;
                color: #e95098
                font-size: 18px;
                margin: 10px 20px;
            .text
                display flex
                flex-direction column
                justify-content space-around
                color: #999;
                .text-item
                    padding 5px 10px
            .xkwx-img
                width 170px
                height 170px
                padding 5px
                border:1px solid #999

</style>