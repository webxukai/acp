<template>
  <div class = 'wrapper'>
    <div>
      <div>
        用户名
      </div>
      <input placeholder="请输入用户名" />
    </div>
    <div>
      <div>密码</div>
      <input placeholder="请输入秘密" />
    </div>
    <div>
      <div>请确认密码</div>
      <input placeholder="确认密码"/>
    </div>
    <button>注册</button>

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
        .post("http://localhost:3000/register", {
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

</style>
