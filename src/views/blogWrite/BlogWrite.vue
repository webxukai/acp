<template>
    <div class="wrapper">
        <BlogWriteBlogWrite />
    </div>
</template>
<script>
import BlogWriteBlogWrite from './components/BlogWriteBlogWrite.vue'
    export default {
        name: 'blogwrite',
        components: {
            BlogWriteBlogWrite
        },
        data() {
            return {

            }
        },
        computed: {

        },
        mounted() {

        }
    }
</script>
<style lang="stylus" scoped>
.wrapper
    width 60%
    margin 0 auto
</style>