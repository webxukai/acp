<template>
    <div>
        <UserMsgUserMsg />
        <div class="blog-write-wrapper">
            <router-link class="router-link" to="/blogWrite">写文章</router-link>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import UserMsgUserMsg from './components/UserMsgUserMsg.vue'

    export default {
        name: 'userMsg',
        components: {
            UserMsgUserMsg
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
.blog-write-wrapper
    width 30%
    height 100px
    border 2px solid #e95098
    margin 10px auto 
    font-size 40px
    font-weight 600px
    text-align center
    line-height 100px
    border-radius 20px
    .router-link
        color #e95098

</style>