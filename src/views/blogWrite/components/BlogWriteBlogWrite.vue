<template>
    <div>
        <div class="wrapper">
            <div class="header">
                <div class="header-left">
                    <input class="blog-title-input" type="text" placeholder="请输入标题..." :key="blog-title-input">
                </div>
                <div class="header-right">
                    <div>
                        <router-link class="router-link" to="/blogWrite">添加至草稿</router-link>
                    </div>
                    <div>加图片</div>
                    <div>发布</div>
                </div>

            </div>
            <div class="content">
                <textarea class="content-textarea" placeholder = "请输入内容..." autocorrect="off" autocapitalize="off" spellcheck="false" >
                </textarea>
            </div>
            <div>

            </div>
        </div>



    </div>
</template>
<script>
    export default {
        name: 'blogwriteblogwrite',
        components: {
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
    width 100%
    min-height 100px
    display flex
    flex-direction column
    .header
        display flex
        justify-content space-between
        margin 10px 0
        width 100%
        height 60px
        border 1px solid #cccccc

        .blog-title-input
            font-size 24px
            font-weight 600
            padding 0 10px
            line-height 60px
        .header-right
            display flex
            justify-content flex-end
            color #e95098
            font-size 16px
            font-weight 600
            line-height 60px
            text-align center
            div
                margin 0 10px
    .content
        margin 10px 0
        width 100%
        height 200px
        border 1px solid #cccccc
        .content-textarea
            box-sizing border-box
            width 100%
            height 100%
            padding 10px
            color #666

</style>