<template>
  <div>
	  <div class="wrapper">
		  <div class="header">
			  <router-link class="logo-wrapper" to="/register">
			  	<img class="logo" src="@/assets/logo.png" alt="">
			  </router-link>
		  </div>
		  <div class="middle">
			  <div class="middle-left">
				  <img src="@/assets/img/cardimg/login.jpg" alt="">
			  </div>
			  <div class="middle-right">
				  <div class="wrapper">
					<div class="login-header login-flex-item">
						<div>密码登录</div>
						<div>
							<router-link class="router-link" to="/register">
							其他方式登录
							</router-link>
						</div>
					</div>
					<div class="login-flex-item">
						<input type="text" placeholder="账号名" v-model="name">
					</div>
					<div class="login-flex-item">
						<input type="password" placeholder="密码" v-model="psw">
					</div>
					<div class="login-flex-item fogetpassword-wrapper">
					<router-link class="router-link" to="/forgetPassword">
						忘记密码?
					</router-link>
					</div>
					<div class="login-flex-item">
						<button class="login-flex-item-button" @click="loginSubmit">登录</button>

					</div>
					<div class="login-flex-item regist-wrapper">
						<div>
							还没有账号?
						</div>
							<router-link class="router-link" to="/register">
								免费注册
							</router-link>
					</div>
					<div class="login-flex-item text-center">
						用合作账号登录
					</div>
					<div class="login-flex-item regist-wrapper">
						<div>
							暂无
						</div>
						<div>
							暂无
						</div>
						<div>
							暂无
						</div>
						<div>
							暂无
						</div>
					</div>
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
					  <div class="beian">
					 	 ©2019 我爱CP网 2cp.xyz 苏ICP备19036661号
					  </div>
				  </div>
			  </div>

		  </div>
	  </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import { setTimeout } from 'timers';

export default {
  name: "loginlogin",

  data() {
    return {
      name: "",
      psw: ""
    };
  },
  methods: {
    loginSubmit() {
      console.log(this.name);
      console.log(this.psw);
      console.log({
        account: this.name,
        agentPwd: md5("agent" + this.psw)
      });
      this.$http
        .post("http://129.211.47.103/login", {
          account: this.name,
          agentPwd: md5("agent" + this.psw)
        })
        .then(res => {
          console.log("cheeng");
          console.log(res);
          if (res.data.message.res == true) {
	          this.$notify({
		  title: '登录成功',
        	duration: '1000',
		  type: 'success',
		});
		this.$store.dispatch('setUserInfo',res.data.message);
		sessionStorage.setItem("userName",res.data.message.userName)
		sessionStorage.setItem("userId",res.data.message.userId)
		setTimeout(() => {
            this.$router.push("home");
		},1000)
          } else {
	          this.$notify.error({
		  title: '登录失败',
        	duration: '1000',
		});
          }
        })
        .catch(err => {
		  console.log("shibai");
          this.$notify.error({
		  title: err,
        	duration: '1000',
		});
        });
    },
    noLoginSubmit() {
      this.$router.push("home");
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/com.styl';

.wrapper
	position relative
	flexCB()
	width 80%
	height 650px
	margin 0 10%
	background-color #ffffff
	font-size 14px
	color #666
	.header
		height 100px
		// margin 40px 0
		.logo-wrapper
			width 70px
			height 100px
			.logo
				width 100px
				height 100px
	.middle
		flex()
		height 400px
		flex-grow 1
		.middle-left
			width 50%
			img 
				width 100%
				height 100%
		.middle-right
			flexCB()
			width 50%
			.wrapper 
				width 270px
				height 600px
				margin 30px auto 
				.login-flex-item
					height 40px
					line-height 40px
					margin 5px 0
					.login-flex-item-button
						width 100%
						height 100%
						cursor:pointer
				.regist-wrapper
					flexB()
				.fogetpassword-wrapper
					display flex
					justify-content flex-end
					
				.login-header
					flexB()
				button
					color #ffffff
					font-weight 600
					background-color $ztColor
				input
					padding 10px
					width 250px
					border 1px solid #666
				.text-center
					text-align center
	.foot
		height 100px
		.foot-wrapper
			flexCA()
			.flex
				flexS()
				div
					width 100px
					height 40px
					margin 40px 0 0 0
					font-size 10px
	.router-link
		color $ztColor
	.beian
		font-size 10px


</style>
