<template>
    <el-container>
        <el-header>
            <HomeHeaderHeader />
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
        <el-footer>
            <HomeFooterFooter />
        </el-footer>
    </el-container>
</template>

<script>
    // @ is an alias to /src
    import HomeHeaderHeader from './components/HomeHeaderHeader.vue'
    import HomeFooterFooter from './components/HomeFooterFooter.vue'

    export default {
        name: 'home',
        components: {
            HomeHeaderHeader,
            HomeFooterFooter
        },
        data() {
            return {

            };
        },
    }
</script>
<style lang="stylus" scoped>
    .el-container
        display flex
        flex-direction column
        justify-content space-between
        width 100%
        height 100%
        color aqua
        .el-header
            width 100%
            height 100px
            padding 0px
            background-color #ddd
        .el-main
            width 100%
            min-height 390px
            flex-grow 1
            background-color #eee
        .el-footer
            width 100%
            /*height 500px*/
            /*background-color #ccc*/
</style>
