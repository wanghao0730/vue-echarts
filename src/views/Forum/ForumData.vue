<template>
  <div class="forum">
    <keep-alive exclude="ForumDetail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ForumData",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.forum {
  width: 100vw;
  height: calc(100vh - 60px);
  background: #f4f5f5;
}
</style>