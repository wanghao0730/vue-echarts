<template>
  <div class="top-navbar">
    <ul>
      <li>
        <router-link :to="{path:'index'}">中国疫情</router-link>
      </li>
      <li>
        <router-link :to="{path:'world'}">世界疫情</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.top-navbar {
  width: 100vw;
  height: 60px;
  display: flex;
  font-size: 20px;
  background: white;
  color: black;
  font-weight: 800;
}
.top-navbar > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
</style>