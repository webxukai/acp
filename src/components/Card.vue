<template>
    <div>
        <div class="wrapper">
            <div class="img-wrapper"><img src="@/assets/img/cardimg/card_01.png" alt=""></div>
            <div class="title-wrapper">标题标题标题标题</div>
            <div class="content-wrapper">详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'card',
        props:['swipperImg'],
        data() {
            return {

            }
        },
        computed: {

        },
        mounted() {
            // current swiper instance

        }
    }
</script>
<style lang="stylus" scoped>
.wrapper
    display flex
    flex-direction column
    justify-content start
    width 100%
    height 200px
    margin 6px 4px
    padding 4px 4px
    border 1px solid rgba(255,255,255,0)
    border-bottom 1px solid #b5b5bb
    &:hover
        border 1px solid #e95098
        cursor:pointer;
    .img-wrapper
        width 100%
        height 120px
        img 
            width 100%
            height 100%
    .title-wrapper
        width 100%
        height 40px
        font-weight: 600
        line-height :40px
        color: #e95098
        font-size: 18px
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    .content-wrapper
        width 100%
        height 40px
        line-height :40px
        color #666
        font-size 12px
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap

    
</style>