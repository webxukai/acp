<template>
  <div>
    <div>
      <span>用户名</span>
      <input type="text" placeholder="请输入用户名" v-model="userName">
    </div>
    <div>
      <input type="text" placeholder="请输入验证码" v-model="msgCode">
      <button @click="getMsgCode">短信验证码</button>
    </div>
    <div>
      <input type="password"  placeholder="请输入密码" v-model="password">
      <input type="password"  placeholder="确认密码" v-model="passwordAgain">
    </div>
    <div>
      <input type="text"  placeholder="请输入验证码" v-model="verificationCode">
    </div>
    <div>
      <div @click="clear">清空</div>
      <div @click="cancle">取消</div>
    </div>
    <button @click="submitRegister">提交</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ForgetPasswordForgetPassword",
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
        .post("http://192.168.101.123:8899/ysscale/web/agent/login/getMsgRestCode", {
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
        .post("http://192.168.101.123:8899/ysscale/web/agent/login/getMsgRestCode", {
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

<style>
</style>
