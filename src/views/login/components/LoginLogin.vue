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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'loginlogin',

  data() {
    return {
      name: "",
      psw: ""
    };
  },
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
