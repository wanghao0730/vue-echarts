<template>
  <div class="top-navbar">
    <nav-bar-item link="/index">
      <strong slot="title">国内疫情</strong>
    </nav-bar-item>
    <nav-bar-item link="/world">
      <strong slot="title">国外疫情</strong>
    </nav-bar-item>
    <nav-bar-item link="/time">
      <strong slot="title">实时播报</strong>
    </nav-bar-item>
    <nav-bar-item link="/detail">
      <strong slot="title">详情数据</strong>
    </nav-bar-item>
    <main-login>
      <nav-bar-item link="/login">
        <strong slot="title">登录</strong>
      </nav-bar-item>
      <nav-bar-item link="/register">
        <strong slot="title">注册</strong>
      </nav-bar-item>
    </main-login>
  </div>
</template>

<script>
import MainLogin from "common/mainLogin/MainLogin";
import NavBarItem from "common/navbar/childComps/NavBarItem";
export default {
  name: "NavBar",
  components: {
    NavBarItem,
    MainLogin
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style scoped>
.top-navbar {
  width: 100vw;
  height: 60px;
  display: flex;
  font-size: 20px;
  background: black;
  color: whitesmoke;
  font-weight: 800;
  border-bottom: 1px solid black;
  animation: backMove 5s linear 1s;
  box-shadow: 3px 3px #fff;
}
.top-navbar > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
.active {
  color: deeppink;
}
strong {
  cursor: pointer;
}
@keyframes backMove {
  0% {
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    color: black;
  }
  100% {
    background: black;
    color: whitesmoke;
  }
}
</style>