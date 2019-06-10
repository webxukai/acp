<template>
  <div class = 'wrapper'>
    <div>
      <span>用户名</span>
      <input class="input-item" type="text" placeholder="请输入用户名" v-model="userName">
    </div>
    <div>
      <input class="input-item" type="text" placeholder="请输入验证码" v-model="msgCode">
      <button class="login-button" @click="getMsgCode">短信验证码</button>
    </div>
    <div>
      <input class="input-item" type="password"  placeholder="请输入密码" v-model="password">
      <input class="input-item" type="password"  placeholder="确认密码" v-model="passwordAgain">
    </div>
    <div>
      <input class="input-item" type="text"  placeholder="请输入验证码" v-model="verificationCode">
    </div>
    <div class="router-wrapper">
      <div @click="clear">清空</div>
      <div @click="cancle">取消</div>
    </div>
    <button class="login-button" @click="submitRegister">提交</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterRegister",
  data() {
    return {
      userName: "",
      msgCode: "",
      password: "",
      passwordAgain: "",
      verificationCode: "",
      msgId:""
    };
  },
  methods: {
    getMsgCode() {
      axios
        .post("http://192.168.101.123:8899/ysscale/web/agent/login/getMsgCode", {
          account: this.userName,
          msgId: ''
        })
        .then(res => {
          console.log("cheeng");
          console.log(res);
          this.msgId = res.data.data.msgId
        })
        .catch(err => {
          console.log("shibai");
          console.log(err);
        });
    },
    submitRegister(){
      axios
        .post("http://192.168.101.123:8899/ysscale/web/agent/login/register", {
          account: this.userName,
          msgCode: this.msgCode,
          msgId: this.msgId,
          newPwd:this.password,
        })
        .then(res => {
          console.log("cheeng");
          console.log(res);
          this.$router.push({ name: "Home", params: {} });
        })
        .catch(err => {
          console.log("shibai");
          console.log(err);
        });
    },
    clear(){
      this.userName= "",
      this.msgCode="",
      this.password= "",
      this.passwordAgain= "",
      this.verificationCode= "",
      this.msgId= ""
    },
    cancle(){
        this.$router.push({ name: "Login", params: {} });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  position relative
  display flex
  flex-direction column
  justify-content start
  width 400px
  height 500px
  border 1px solid #666
  margin 0 auto
  padding 0 10px
  margin-top 20px
  font-size 24px
  .input-item
    height 30px
    margin 10px 0
    padding 0 10px
    border 1px solid #666
  .router-wrapper
    display flex
    height 30px
    margin 10px 0
    padding 0 10px
    justify-content space-between
</style>
