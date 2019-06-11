<template>
    <DynamicDynamic />
</template>

<script>
    // @ is an alias to /src
    import DynamicDynamic from './components/DynamicDynamic.vue'

    export default {
        name: 'dynamic',
        components: {
            DynamicDynamic
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