<template>
  <div class="login">
    <div class="control-form">
      <h1>登录</h1>
      <div class="item">
        <input type="text" placeholder="账户" name="userName" v-model="userName" />
      </div>
      <div class="item">
        <input type="password" placeholder="密码" name="userPwd" v-model="userPwd" />
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
      userPwd: ""
    };
  },
  methods: {
    submitLogin() {
      axios({
        type: "post",
        url: "api/login",
        headers: {
          //请求头设置为表单提交的请求头
          "Content-Type": "application/x-www-form-urlencoded"
        },
        params: {
          userName: this.userName,
          userPwd: this.userPwd
        }
      })
        .then(res => {
          console.log(res);
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
.control-form .item input {
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