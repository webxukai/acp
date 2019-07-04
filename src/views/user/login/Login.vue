<template>
  <div class="wrapper">
    <LoginLogin />
  </div>
</template>

<script>
import LoginLogin from "./components/LoginLogin.vue";

export default {
  name: "login",
  components: {
    LoginLogin
  },
  data() {
    return {
      name: "",
      psw: ""
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper
	width 100%
	height 650px
	// border 1px solid black
	// background-color #eeeeee
</style>

