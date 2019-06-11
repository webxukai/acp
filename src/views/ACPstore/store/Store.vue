<template>
    <div>
        <StoreStore />
    </div>
</template>

<script>
    // @ is an alias to /src
    import StoreStore from './components/StoreStore.vue'

    export default {
        name: 'store',
        components: {
            StoreStore
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
