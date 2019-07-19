<template>
  <div>
      <div class="wrapper">
        <BlogList v-for="(item) in blogList" :key="item.blogId" :blogList = 'item'/>
      </div>
  </div>
</template>

<script>
import BlogList from "./BlogList";

export default {
  name: "dynamicdynamic",
  components: {
    BlogList
  },
  data() {
    return {
        blogList:[]
    };
  },
  methods: {
    getBlogList() {
      this.$http
        .post("http://129.211.47.103/getBlogList")
        .then(res => {
          if (res.data.message.res == true) {
              let results = res.data.message.results
              this.blogList = results.reverse()
              console.log(results)
            // this.$notify({
            //   title: "获取博客列表成功",
            //   duration: "1000",
            //   type: "success"
            // });
          } else {
            this.$notify.error({
              title: "获取博客列表失败",
              duration: "1000"
            });
          }
        })
        .catch(err => {
          this.$notify.error({
            title: err,
            duration: "1000"
          });
        });
    }
  },
  mounted() {
    this.getBlogList();
  }
};
</script>
<style lang="stylus" scoped>
.wrapper
    width 60%
    margin 0 auto
</style>