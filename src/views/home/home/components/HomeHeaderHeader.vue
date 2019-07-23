<template>


    <el-menu  class="el-menu-demo" mode="horizontal" active-text-color = "$ztColor">
        <router-link to="/home">
            <img class="img-logo" src="@/assets/logo.png" />
        </router-link>
        <el-menu-item index="0"> <router-link to="/userMsg">
            <img class="img-head" src="@/assets/img/cardimg/card_01.png" alt="">
        </router-link> </el-menu-item>
        <el-menu-item index="1"> <router-link to="/home">ACP首页</router-link> </el-menu-item>
        <el-menu-item index="2"> <router-link to="/store">ACP商城</router-link> </el-menu-item>
        <el-menu-item index="3" > <router-link to="/community">用户社区</router-link></el-menu-item>
        <el-menu-item index="4" > <router-link to="/dynamic">ACP动态</router-link></el-menu-item>
        <el-submenu index="5" >
            <template slot="title"> 全部游戏</template>
            <el-menu-item index="2-1"> <router-link to="/register">五子棋</router-link></el-menu-item>
            <el-menu-item index="2-2"> <router-link to="/register">贪吃蛇</router-link></el-menu-item>
            <el-menu-item index="2-3"> <router-link to="/register">你画我猜</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="6" > <router-link to="/consultation">咨询服务</router-link></el-menu-item>
        <el-menu-item index="7" > <router-link to="/about">关于ACP</router-link></el-menu-item>
    </el-menu>
</template>

<script>
    // @ is an alias to /src
    // import LoginLogin from './components/LoginLogin.vue'

    export default {
        name: 'homeheaderheader',
        components: {
        },
        data() {
            return {

            };
        },
        methods:{
            // handleSelect(a,b){
            //     console.log(a)
            //     console.log(b)
            // },

        }
    }
</script>
<style lang="stylus" scoped>
    .el-menu
        /*float right*/
        width 100%
        .el-menu-item,.el-submenu
            float right
        .img-logo
            width:80px
            height:80px
        .img-head
            width 40px
            height 40px
            border-radius 50%

</style>