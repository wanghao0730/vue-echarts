<template>
  <div class="detail-wrap">
    <detail-msg :areaStat="areaStat"></detail-msg>
  </div>
</template>

<script>
import detailMsg from "views/Detail/childComps/DetailMsg";
export default {
  name: "DetailData",
  components: {
    detailMsg
  },
  data() {
    return {
      areaStat: []
    };
  },
  created() {
    this.$bus.$on("areaData", res => {
      this.areaStat = res;
    });
  },
  deactivated() {
    //! 清除事件总线
    this.$bus.$off("areaData");
  },
  mounted() {},
  activated() {},
  methods: {}
};
</script>

<style>
.detail-wrap {
  width: 100%;
  height: 100%;
}
</style>