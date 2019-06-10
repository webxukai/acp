<template>
    <el-container>
        <el-header>
            <HomeHeaderHeader />
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
    // @ is an alias to /src
    import HomeHeaderHeader from './components/HomeHeaderHeader.vue'

    export default {
        name: 'home',
        components: {
            HomeHeaderHeader
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
            background-color #ddd
        .el-main
            width 100%
            min-height 500px
            flex-grow 1
            background-color #eee
        .el-footer
            width 100%
            height 100px
            background-color #ccc
</style>
