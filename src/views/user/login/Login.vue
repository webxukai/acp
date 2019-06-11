<template>
  <LoginLogin />

</template>

<script>
import LoginLogin from './components/LoginLogin.vue'

export default {
  name: 'login',
  components: {
      LoginLogin
  },
  data() {
    return {
      name: "",
      psw: ""
    };
  },
}
</script>
<style lang="stylus" scoped>

</style>

