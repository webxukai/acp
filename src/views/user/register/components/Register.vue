<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <router-link class="logo-wrapper" to="/register">
          <img class="logo" src="@/assets/logo.png" alt />
        </router-link>
      </div>
      <div class="middle">
        <div class="middle-left">
          <img src="@/assets/img/cardimg/login.jpg" alt />
        </div>
        <div class="middle-right">
          <div class="wrapper">
            <div class="login-header login-flex-item">
              <div>账号注册</div>
              <div>
                <router-link class="router-link" to="/">已有账号,直接登陆</router-link>
              </div>
            </div>
            <div class="login-flex-item">
              <input type="text" placeholder="账号名" v-model="name" />
            </div>
            <div class="login-flex-item">
              <input type="password" placeholder="密码" v-model="psw" />
            </div>
            <div class="login-flex-item">
              <input type="password" placeholder="确认密码" v-model="confirmPsw" />
            </div>
            <button class="login-flex-item" @click="registerSubmit">注册</button>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="foot-wrapper">
          <div class="flex">
            <div>关于我们</div>
            <div>商家入驻</div>
            <div>加入我们</div>
            <div>帮助中心</div>
            <div>手机版本</div>
          </div>
          <div>
            <div class="beian">©2019 我爱CP网 2CP.xyz 京ICP证(暂无)号 京公网安备(正在备案中......)号</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import axios from "axios";
import { constants } from "crypto";

export default {
  name: "registerregister",

  data() {
    return {
      name: "zhangsan",
      psw: "",
      confirmPsw: ""
    };
  },
  methods: {
    registerSubmit() {
      console.log(this.name);
      console.log(this.psw);
      if (this.psw !== this.confirmPsw) {
        alert("两次密码不同，请重新确认");
        this.confirmPsw = "";
        return;
      } else {
        console.log({
          account: this.name,
          agentPwd: md5("agent" + this.psw)
        });
        axios
          .post("http://localhost:3000/register", {
            account: this.name,
            agentPwd: md5("agent" + this.psw)
          })
          // .get("http://localhost:3000/login")
          .then(res => {
            console.log("cheeng");
            console.log(res);
            if (res.data.message == true ) {
              alert('注册成功')
              this.$router.push("/");
            } else {
              alert("登录失败");
            }
          })
          .catch(err => {
            console.log("shibai");
            alert(err);
          });
      }
    },
    noLoginSubmit() {
      this.$router.push("home");
    }
  },
  watch: {
    confirmPsw() {
      if (this.psw !== this.confirmPsw) {
        console.log("两次密码不同");
      } else {
        console.log("相同");
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 650px;
  margin: 0 10%;
  background-color: #ffffff;
  font-size: 14px;
  color: #666;

  .header {
    height: 100px;

    // margin 40px 0
    .logo-wrapper {
      width: 70px;
      height: 100px;

      .logo {
        width: 100px;
        height: 100px;
      }
    }
  }

  .middle {
    display: flex;
    height: 400px;
    flex-grow: 1;

    .middle-left {
      width: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .middle-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;

      .wrapper {
        width: 270px;
        height: 300px;
        margin: 30px auto;

        .login-flex-item {
          height: 40px;
          line-height: 40px;
          margin: 5px 0;
        }

        .regist-wrapper {
          display: flex;
          justify-content: space-between;
        }

        .login-header {
          display: flex;
          justify-content: space-between;
        }

        button {
          color: #ffffff;
          font-weight: 600;
          background-color: #e95098;
        }

        input {
          padding: 10px;
          width: 250px;
          border: 1px solid #666;
        }

        .text-center {
          text-align: center;
        }
      }
    }
  }

  .foot {
    height: 100px;

    .foot-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .flex {
        display: flex;
        justify-content: flex-start;

        div {
          width: 100px;
          height: 40px;
          margin: 40px 0 0 0;
          font-size: 10px;
        }
      }
    }
  }

  .router-link {
    color: #e95098;
  }

  .beian {
    font-size: 10px;
  }
}
</style>