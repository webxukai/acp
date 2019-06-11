<template>
    <div>
        <AboutAbout />
    </div>
</template>

<script>
    // @ is an alias to /src
    import AboutAbout from './components/AboutAbout.vue'

    export default {
        name: 'about',
        components: {
            AboutAbout
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