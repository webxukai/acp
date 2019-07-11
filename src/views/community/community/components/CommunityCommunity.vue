<template>
    <div>
        <div class="wrapper">
            <Card class="wrapper-item"/>
            <Card class="wrapper-item"/>
            <Card class="wrapper-item"/>
            <Card class="wrapper-item"/>
            <Card class="wrapper-item"/>
            <Card class="wrapper-item"/>
            <ShareCard class="wrapper-share-card"/>
            <ShareCard class="wrapper-share-card"/>
            <ShareCard4 class="wrapper-share-card"/>
            <ShareCard4 class="wrapper-share-card"/>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import ShareCard from '@/components/ShareCard'
import ShareCard4 from '@/components/ShareCard4'
    export default {
        name: 'communitycommunity',
        components: {
            Card,
            ShareCard,
            ShareCard4
        },
        data() {
            return {

            };
        },
    }
</script>
<style lang="stylus" scoped>
.wrapper 
    display flex
    justify-content space-around
    flex-wrap wrap
    width 80%
    border 1px solid #e95098
    margin 10px auto 
    .wrapper-item
        margin 6px 16px
        padding 4px 4px
        width 20%
    .wrapper-share-card
        margin 6px 16px
        padding 4px 4px
        width 80%
</style>