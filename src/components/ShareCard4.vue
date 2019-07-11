<template>
    <div>
        <div class="wrapper">
            <div class="title">标题标题标题标题标题标题标题标题</div>
            <div class="img-wrapper">
                <img src="@/assets/img/cardimg/card_01.png" alt="">
                <img src="@/assets/img/cardimg/card_02.png" alt="">
                <img src="@/assets/img/cardimg/card_03.png" alt="">
                <img src="@/assets/img/cardimg/card_04.png" alt="">
            </div>
            <div class="bottom-wrapper">
                <div class="left-wrapper">
                    <div class="header-wrapper"><img src="@/assets/img/cardimg/card_02.png" alt=""></div>
                    <div>作者</div>
                    <div>7/11/ 14:28:54</div>
                </div>
                <div class="right-wrapper">
                    <div class="right-flex">
                        <div>分享</div>
                        <div>12</div>
                    </div>
                    <div class="right-flex">
                        <div>评论</div>
                        <div>13</div>
                    </div>
                    <div class="right-flex">
                        <div>点赞</div>
                        <div>16</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sharecard',
        data() {
            return {

            }
        },
        computed: {
        }
    }
</script>
<style lang="stylus" scoped>
.wrapper
    display flex
    flex-direction column
    justify-content space-between 
    width 100%
    height 120px
    margin 6px 4px
    padding 4px 4px
    border 1px solid rgba(255,255,255,0)
    border-bottom 1px solid #b5b5bb
    &:hover
        border 1px solid #e95098
        cursor:pointer;
    .title
            width 100%
            height 20px
            font-weight: 600
            line-height :20px
            margin-bottom 5px
            color: #e95098
            font-size: 18px
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
    .img-wrapper
        display flex
        justify-content space-between
        width 20%
        height 80px
        img 
            width 100%
            height 100%
            margin 0px 10px 
    .bottom-wrapper
        display flex
        justify-content space-between
        margin-top 5px
        width 100%
        height 20px
        line-height :20px
        color #666
        font-size 14px
        .left-wrapper
            display flex
            div
                padding 0 5px
            .header-wrapper
                width 20px
                height 20px
                border-radius 50%
                img
                    width 100%
                    height 100%
                    border-radius 50%
        .right-wrapper
            display flex
            .right-flex
                display flex
                margin 0 10px
                div
                    padding 0 2px
            

    

</style>