<template>
    <div>
        <div class="wrapper">
            <i class="iconfont icon-dianzan"></i> 
            <div class="title-text">{{msg.text}}</div>
            <div class="hort" v-for="item in msg.hort" :key="item">
                <i class="iconfont icon-dianzan"></i> 
                <div class="hort-text">{{item}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'titleMain',
        props:['msg'], 
        data() {
            return {
            }
        },
        methods: {

        },
        computed: {

        },
        mounted() {
            // current swiper instance

        }
    }
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/com.styl';
.wrapper
    width 100%
    height 40px
    display flex
    justify-content start
    align-items flex-end
    margin 6px 4px
    padding 4px 4px
    border 1px solid rgba(255,255,255,0)
    border-bottom 1px solid #b5b5bb
    .title-text
        font-size 24px
        color $ztColor
        margin 0 20px
    .hort
        display flex
        justify-content start
        align-items flex-end
        margin 0 20px
        color #666
        .hort-text
            padding 0 5px
</style>