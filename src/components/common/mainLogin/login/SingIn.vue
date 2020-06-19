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
        <strong>当前用户不存在,请先注册后登录</strong>
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
      showWaring: false
    };
  },
  methods: {
    submitLogin() {
      axios({
        method: "post",
        url: "api/user/login",
        //! 携带json数据用data携带
        data: {
          userName: this.userName.trim(),
          userPwd: this.userPwd.trim()
        }
      })
        .then(res => {
          if (res.data.length <= 0) {
            this.showWaring = true;
          } else {
            //! 存在数据隐藏提示
            this.showWaring = false;
            console.log(res);
          }
        })
        .catch(err => {
          if (err) {
            throw err;
          }
        });
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
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
}
.control-form h1 {
  color: #fff;
  letter-spacing: 6px;
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
  border-color: darkslateblue;
  outline: none;
}
.control-form .item #submit:hover {
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
}
</style>