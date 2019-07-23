<template>
    <div>
        <div class="wrapper">
            <div>
                提示信息提示信息提示信息提示信息
            </div>
        </div>
    </div>
</template>
<script>
// import Title from '@/components/Title'
    export default {
        name: 'alert',
        components: {

        },
        data() {
            return {

            }
        },
        computed: {

        },
        mounted() {
            // current swiper instance

        }
    }
</script>
<style lang="stylus" scoped>
.wrapper
    position fixed
    display flex
    flex-direction column
    width 200px
    text-align center
    padding 10px
    border-radius 10px
    background-color #999
    border 2px solid $ztColor
    color #ffffff
    opacity 0.8
    z-index 99999

</style>