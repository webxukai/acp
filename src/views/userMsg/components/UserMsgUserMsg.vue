<template>
  <div>
    <div class="wrapper">
      <div class="wrapper-item">
        <div class="wrapper-item-item">
          <div>用户名</div>
          <div>{{name}}</div>
        </div>
        <div class="wrapper-item-item">
          <div>真实姓名</div>
          <div>{{relName}}</div>
        </div>
      </div>
      <div class="wrapper-item">
        <div class="wrapper-item-item">
          <div>头像</div>
          <form id="advForm">
            <input type="file" id="file" multiple ref="file" @change="bindFileChange" />
          </form>
          <div @click="bindHead" class="img-head-div">
            <img class="img-head" src="@/assets/img/cardimg/card_01.png" alt />
          </div>
        </div>
        <div class="wrapper-item-item">
          <div>手机号</div>
          <div>{{phone}}</div>
        </div>
      </div>
      <div class="wrapper-item">
        <div class="wrapper-item-item">
          <div>性别</div>
          <div>{{six}}</div>
        </div>
        <div class="wrapper-item-item">
          <div>年龄</div>
          <div>{{age}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: "userMsguserMsg",
  components: {},
  data() {
    return {
      name: "张三",
      relName: "张三三",
      phone: "18852859526",
      six: "男",
      age: "26"
    };
  },
  methods: {
    bindFileChange() {
      console.log(222);
      console.log(this.$refs.file.files[0]);
      let file = this.$refs.file.files[0];
      // console.log(file);

      //创建formdata对象
      var form = new FormData();
      form.append("file", file);
      //创建xhr，使用ajax进行文件上传
      //   var xhr = new XMLHttpRequest();
      // console.log(form.get("file"));
      // console.log(form);
      //   const instance = axios.create({
      //     withCredentials: true,
      //     headers: {
      //       "Content-Type": "multipart/form-data"
      //     }
      //   });

      axios
        .post(
          // "http://129.211.47.103/img",
          "http://129.211.47.103/profile",
            form
          ,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(res => {
          console.log("cheeng");
          console.log(res);
          if (res.data.message.res == true) {
            this.$router.push("home");
          } else {
            alert("登录失败");
          }
        })
        .catch(err => {
          console.log("shibai");
          alert(err);
        });

    },
    bindHead() {
      console.log(111);
    },
  },
  computed:{
            // ...mapState({
            //     name: state => state.userInfo.userName ,
            // }),
  },
  mounted(){
    // this.name = this.$store.state.userInfo.userName
     this.name = sessionStorage.userName
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/com.styl';
.wrapper {
  flexCS()
  width: 100%;
  height: 100%;
  color: #666;

  // border 1px solid black
  .wrapper-item {
    flexB()
    margin: 10px 0px;

    // border 1px solid black
    .wrapper-item-item {
      flexB()
      margin: 0px 160px;
      border-bottom: 2px solid $ztColor;
      width: 50%;
      height: 40px;
      line-height: 40px;

      .img-head-div {
        width: 40px;
        height: 40px;

        .img-head {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>