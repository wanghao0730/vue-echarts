<template>
  <div class="login">
    <div class="control-form">
      <h1>登录</h1>
      <div class="item">
        <input type="text" required placeholder="账户" name="userName" v-model="userName" />
      </div>
      <div class="item">
        <input type="password" required placeholder="密码" name="userPwd" v-model="userPwd" />
      </div>
      <div class="waring-login" v-if="showWaring">
        <strong>{{ waringMsg }}</strong>
      </div>
      <div class="item">
        <button type="input" id="submit" @click="submitLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import request from "network/request";
export default {
  name: "SingIn",
  data() {
    return {
      userName: "",
      userPwd: "",
      //! 是否显示登录错误信息
      showWaring: false,
      waringMsg: null
    };
  },
  methods: {
    submitLogin() {
      //! 判断用户输入内容是否为空
      if (this.userName.trim() !== "" && this.userPwd.trim() !== "") {
        axios({
          method: "post",
          url: "api/user/login",
          //! 携带json数据用data携带
          data: {
            userName: this.userName,
            userPwd: this.userPwd
          }
        })
          .then(res => {
            //! 判断后端返回的状态码和有没有错误信息
            if (res.data.code === 422) {
              this.showWaring = true;
              this.waringMsg = res.data.sqlMsg;
            } else if (res.data.code === 200) {
              //! 表示登录成功了 跳转路由界面
              this.$router.push({ path: "/index" });
            }
          })
          .catch(err => {
            if (err) {
              throw err;
            }
          });
      } else {
        //!  提示内容不能为空
        (this.showWaring = true), (this.waringMsg = "输入内容不能为空");
      }
    }
  }
};
</script>

<style>
.login {
  flex: 1;
  width: 100vw;
  height: calc(100vh - 60px);
  background: url("~assets/image/zmpm3g.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.control-form {
  width: 35%;
  background: #00000090;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
}
.control-form h1 {
  color: #fff;
  letter-spacing: 3px;
}
.control-form .item {
  margin-top: 25px;
}
.control-form .item > input {
  width: 250px;
  padding: 10px;
  border-radius: 30px;
  outline: none;
  background: #00000090;
  color: white;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
}
.control-form .item #submit {
  width: 100px;
  padding: 10px;
  border-radius: 30px;
  outline: none;
  background: #00000090;
  color: white;
  text-align: center;
  cursor: pointer;
}
.control-form .waring-login {
  font-size: 18px;
  color: white;
  margin-top: 25px;
  cursor: pointer;
}
.control-form .item input:hover {
  width: 350px;
  padding: 10px;
  border-radius: 30px;
  font-weight: 600;
  outline: none;
  animation: inputBorder 5s linear infinite;
}
.control-form .item #submit:hover {
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
}
</style>