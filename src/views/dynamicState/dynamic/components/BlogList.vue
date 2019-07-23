<template>
    <div>
        <div class="wrapper">
            <div class="img-wrapper"><img :src="blogList.ShareCardImg" alt=""></div>
            <div class="content-wrapper">
                <div class="title">{{blogList.blogName}}</div>
                <div class="blogDescription">{{blogList.blogDescription}}</div>
                <div class="bottom-wrapper">
                    <div class="left-wrapper">
                        <div class="header-wrapper"><img :src="blogList.ShareCardHeadImg" alt=""></div>
                        <div>{{blogList.userId}}</div>
                        <div>{{blogList.blogTime | moment("MM月DD号HH点")}}</div>
                    </div>
                    <div class="right-wrapper">
                        <div class="right-flex">
                             <i class="iconfont icon-share"></i> 
                            <div>{{blogList.blogTranspond}}</div>
                        </div>
                        <div class="right-flex">
                            <i class="iconfont icon-pinglun"></i> 
                            <div>{{blogList.blogComment}}</div>
                        </div>
                        <div class="right-flex">
                            <i class="iconfont icon-duomeitiicon-"></i> 
                            <div>{{blogList.blogLove}}</div>
                        </div>
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
            blogList : {
                type: Object,
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
    flexB()
    width 100%
    height 120px
    margin 6px 4px
    padding 4px 4px
    border 1px solid rgba(255,255,255,0)
    border-bottom 1px solid #b5b5bb
    &:hover
        border 1px solid $ztColor
        cursor:pointer;
    .img-wrapper
        width 25%
        height 120px
        img 
            width 100%
            height 100%
    .content-wrapper
        flexCB()
        width 70%
        height 120px
        .title
            width 100%
            height 20px
            font-weight: 600
            line-height :20px
            color: $ztColor
            font-size: 18px
            dian3()
        .blogDescription
            width 100%
            height 20px
            line-height :20px
            color: #666
            dian3()
        .bottom-wrapper
            flexB()
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
                flex()
                .right-flex
                    flexD()
                    margin 0 10px
                    div
                        padding 0 2px
            

    

</style>