<template>
    <div>
        <div class="wrapper">
            <TitleMain :msg="titleMain[0]"/>
            <div class="card-wrapper">
                <Card v-for="item in cardMsg" :key="item.cardId" :cardMsg='item'/>
            </div>
            <TitleMain :msg="titleMain[1]"/>
            <ShareCard v-for="item in shareCardMsg" :key="item.ShareCardId" :shareCardMsg = 'item'/>
            <TitleMain :msg="titleMain[2]"/>
            <ShareCard4 v-for="item in shareCard4Msg" :key="item.ShareCard4Id" :shareCard4Msg = 'item' />
        </div>

    </div>
</template>
<script>
import TitleMain from '@/components/TitleMain'
import Card from '@/components/Card'
import ShareCard from '@/components/ShareCard'
import ShareCard4 from '@/components/ShareCard4'
    export default {
        name: 'indexindex',
        components: {
            TitleMain,
            Card,
            ShareCard,
            ShareCard4
        },
        data() {
            return {
                titleMain:[{
                    titleId:'001',
                    text:'热门推荐',
                    hort:['听说你给我送了件女装','听说你是个怂货','山雨欲来风满楼']
                },{
                    titleId:'002',
                    text:'本周红人',
                    hort:['二狗被贱卖','飞猪飞飞飞']
                },{
                    titleId:'003',
                    text:'八卦天堂'
                }],
                cardMsg:[{
                    cardId:'001',
                    cardImg:require('@/assets/img/cardimg/01.jpg'),
                    cardTitle: '占星',
                    cardContent:'开始遨游你的世界吧!'
                },{
                    cardId:'002',
                    cardImg:require('@/assets/img/cardimg/02.jpg'),
                    cardTitle: '风水',
                    cardContent:'在这里，到处都是你的房子!'
                },{
                    cardId:'003',
                    cardImg:require('@/assets/img/cardimg/03.jpg'),
                    cardTitle: '看相',
                    cardContent:'你的对象就在你对面!'
                },{
                    cardId:'004',
                    cardImg:require('@/assets/img/cardimg/04.jpg'),
                    cardTitle: '卜卦',
                    cardContent:'要来一发嘛!'
                },{
                    cardId:'005',
                    cardImg:require('@/assets/img/cardimg/05.jpg'),
                    cardTitle: '测字',
                    cardContent:'你有生成八字，我给你分配对象!'
                },{
                    cardId:'006',
                    cardImg:require('@/assets/img/cardimg/06.jpg'),
                    cardTitle: '星座',
                    cardContent:'今天你是什么座的!'
                }
                ],
                shareCardMsg:[{
                    ShareCardId:'SC001',
                    ShareCardImg:require('@/assets/img/cardimg/07.jpg'),
                    ShareCardTitle: '河池寻梦醉三生三世',
                    ShareCardHeadImg:require('@/assets/img/cardimg/card_02.png'),
                    ShareCardAuthor : '河池哥哥',
                    ShareCardTime : new Date(),
                    ShareCardShare : 16,
                    ShareCardTalk : 33,
                    ShareCardLove : 99
                },
                {
                    ShareCardId:'SC002',
                    ShareCardImg:require('@/assets/img/cardimg/08.jpg'),
                    ShareCardTitle: '河池邀月揽万象星河',
                    ShareCardHeadImg:require('@/assets/img/cardimg/card_03.png'),
                    ShareCardAuthor : '河池妹妹',
                    ShareCardTime : new Date(),
                    ShareCardShare : 36,
                    ShareCardTalk : 32,
                    ShareCardLove : 49
                },
                {
                    ShareCardId:'SC003',
                    ShareCardImg:require('@/assets/img/cardimg/01.jpg'),
                    ShareCardTitle: '河池看柳品花开花落',
                    ShareCardHeadImg:require('@/assets/img/cardimg/card_04.png'),
                    ShareCardAuthor : '河池弟弟',
                    ShareCardTime : new Date(),
                    ShareCardShare : 13,
                    ShareCardTalk : 36,
                    ShareCardLove : 92
                }],
                shareCard4Msg:[{
                    ShareCard4Id:'SC4001',
                    ShareCard4Img:[require('@/assets/img/cardimg/11.jpg'),require('@/assets/img/cardimg/12.jpg'),require('@/assets/img/cardimg/13.jpg'),require('@/assets/img/cardimg/14.jpg')],
                    ShareCard4Title: '河池寻梦醉三生三世',
                    ShareCard4HeadImg:require('@/assets/img/cardimg/12.jpg'),
                    ShareCard4Author : '河池哥哥',
                    ShareCard4Time : new Date(),
                    ShareCard4Share : 16,
                    ShareCard4Talk : 33,
                    ShareCard4Love : 99
                },
                {
                    ShareCard4Id:'SC4002',
                    ShareCard4Img:[require('@/assets/img/cardimg/15.jpg'),require('@/assets/img/cardimg/16.jpg')],
                    ShareCard4Title: '河池邀月揽万象星河',
                    ShareCard4HeadImg:require('@/assets/img/cardimg/13.jpg'),
                    ShareCard4Author : '河池妹妹',
                    ShareCard4Time : new Date(),
                    ShareCard4Share : 36,
                    ShareCard4Talk : 32,
                    ShareCard4Love : 49
                },
                {
                    ShareCard4Id:'SC4003',
                    ShareCard4Img:[require('@/assets/img/cardimg/17.jpg'),require('@/assets/img/cardimg/18.jpg'),require('@/assets/img/cardimg/19.jpg')],
                    ShareCard4Title: '河池看柳品花开花落',
                    ShareCard4HeadImg:require('@/assets/img/cardimg/14.jpg'),
                    ShareCard4Author : '河池弟弟',
                    ShareCard4Time : new Date(),
                    ShareCard4Share : 13,
                    ShareCard4Talk : 36,
                    ShareCard4Love : 92
                }]

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
    display flex
    flex-direction column
    width 73%
    margin 0 auto
    .card-wrapper
        display flex
        flex-wrap wrap

</style>