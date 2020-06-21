<template>
  <div class="detail-wrap">
    <keep-alive exclude="DetailAreaMsg">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import DetailAreaMsg from "views/Detail/childComps/DetailAreaMsg";
import DetailMsg from "views/Detail/childComps/DetailMsg";
export default {
  name: "DetailData",
  components: {
    DetailAreaMsg,
    DetailMsg
  },
  data() {
    return {};
  },
  created() {},
  activated() {},
  mounted() {},

  methods: {}
};
</script>

<style>
.detail-wrap {
  width: 100%;
  height: 100%;
}
</style>