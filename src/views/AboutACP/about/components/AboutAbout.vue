<template>
    <div>
        <!--AboutAbout-->
        <div>$ztColor  233 80 152</div>
        <h2>ACP是一款很好的游戏交友平台</h2>
        <h2>在这里不是你想玩什么游戏</h2>
        <h2>而是我会写什么游戏</h2>
        <h2>欢迎大佬提供Vue小游戏代码</h2>
        <div>$ztColor;</div>
        <div>{{ new Date() | moment("MM月DD号HH点") }}</div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'aboutabout',
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
@import '~@/assets/styles/com.styl';
    h2
        font-weight: 400;
        color: $ztColor
        font-size: 18px;
        margin: 10px 20px;
</style>