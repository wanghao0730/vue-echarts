<template>
  <div id="app">
    <nav-bar></nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import ChinaData from "views/China/ChinaData";
export default {
  name: "App",
  components: {
    NavBar,
    ChinaData
  }
};
</script>

<style>
@import url("~assets/css/base.css");
</style>
