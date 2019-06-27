<template>
  <div>
    <div class="wrapper">
        <input class="input-item" type="text" v-model="name" placeholder="请输入用户名">
        <input class="input-item" type="password" v-model="psw" placeholder="请输入密码">
        <div class="router-wrapper">
          <router-link class="router-item" to="/register">注册</router-link>
          <router-link class="router-item" to="/forgetPassword">忘记密码</router-link>
        </div>

      <button class="login-button" @click="loginSubmit">登录</button>
      <button class="login-button" @click="noLoginSubmit">游客登录</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import md5 from "js-md5";
import axios from "axios";

export default {
  name: 'loginlogin',

  data() {
    return {
      name: "zhangsan",
      psw: "111111"
    };
  },
    methods :{
        loginSubmit() {

            console.log(this.name);
            console.log(this.psw);
            console.log({
                account: this.name,
                agentPwd: md5("agent" + this.psw)
            });
            axios
                .post("http://localhost:3000/login", {
                    account: this.name,
                    agentPwd: md5("agent" + this.psw)
                })
                                // .get("http://localhost:3000/login")
                .then(res => {
                    console.log("cheeng");
                    console.log(res);
                    if(res.data) {
                    this.$router.push('home')
                    } else {
                      alert('登录失败')
                    }
                })
                .catch(err => {
                    console.log("shibai");
                    alert(err);
                });
        },
        noLoginSubmit(){
            this.$router.push('home')
        }
    }
}
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
  font-weight: 400;
  color: #e95098
  font-size: 18px;
  .input-item
    height 30px
    margin 10px 0
    padding 0 10px
    border 1px solid #666 
	&:placeholder
	  color #e95098
  .router-wrapper
    display flex
    height 30px
    margin 10px 0
    padding 0 10px
    justify-content space-between
	.router-item
	  color #e95098
	.login-button
	  color #e95098
	  margin 10px 0
</style>
