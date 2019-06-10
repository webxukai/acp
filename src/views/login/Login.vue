<template>
  <LoginLogin />
</template>

<script>
// @ is an alias to /src
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

