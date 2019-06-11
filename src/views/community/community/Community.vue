<template>
    <CommunityCommunity />
</template>

<script>
    // @ is an alias to /src
    import CommunityCommunity from './components/CommunityCommunity.vue'

    export default {
        name: 'community',
        components: {
            CommunityCommunity
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