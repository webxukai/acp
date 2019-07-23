<template>
    <div>
        <div class="wrapper">
            <div class="title">{{shareCard4Msg.ShareCard4Title}}</div>
            <div class="img-wrapper">
                <img v-for="(item,index) in shareCard4Msg.ShareCard4Img " :key="index" :src="item" alt="">
            </div>
            <div class="bottom-wrapper">
                <div class="left-wrapper">
                    <div class="header-wrapper"><img :src="shareCard4Msg.ShareCard4HeadImg" alt=""></div>
                    <div>{{shareCard4Msg.ShareCard4Author}}</div>
                    <div>{{shareCard4Msg.ShareCard4Time}}</div>
                </div>
                <div class="right-wrapper">
                    <div class="right-flex">
                        <i class="iconfont icon-share"></i> 
                        <div>{{shareCard4Msg.ShareCard4Share}}</div>
                    </div>
                    <div class="right-flex">
                        <i class="iconfont icon-pinglun"></i> 
                        <div>{{shareCard4Msg.ShareCard4Talk}}</div>
                    </div>
                    <div class="right-flex">
                        <i class="iconfont icon-dianzan"></i> 
                        <div>{{shareCard4Msg.ShareCard4Love}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sharecard',
        props:{
            shareCard4Msg:{
                type:Object,
                required:true
            }
        },
        data() {
            return {

            }
        },
        computed: {
        }
    }
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/com.styl';
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
        border 1px solid $ztColor
        cursor:pointer;
    .title
            width 100%
            height 20px
            font-weight: 600
            line-height :20px
            margin-bottom 5px
            color: $ztColor
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