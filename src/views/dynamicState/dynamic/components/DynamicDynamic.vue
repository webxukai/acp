<template>
    <div>
        DynamicDynamic
        <VueSwiper :swipperImg ='swipperImg'/>
    </div>
</template>

<script>
    import VueSwiper from '../../../../components/Swiper.vue'

    export default {
        name: 'dynamicdynamic',
        components: {
            VueSwiper
        },
        data() {
            return {
                swiperImg:['../../../../assets/img/swiperimg/1.png','../../../../assets/img/swiperimg/1.png','../../../../assets/img/swiperimg/1.png'],
            };
        },
    }
</script>
<style lang="stylus" scoped>

</style>