<template>
    <div>
        <UserMsgUserMsg />
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

</style>