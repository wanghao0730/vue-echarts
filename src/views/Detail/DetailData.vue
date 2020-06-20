<template>
  <div class="detail-wrap">
    <detail-msg :areaStat="areaStat"></detail-msg>
  </div>
</template>

<script>
import axios from "axios";
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
    this.detailMsg();
  },
  methods: {
    detailMsg() {
      axios("api/detail")
        .then(res => {
          //! 过滤数据
          this.areaStat = res.data.getAreaStat;
        })
        .catch(err => {
          if (err) throw err;
        });
    }
  }
};
</script>

<style>
.detail-wrap {
  width: 100%;
  height: 100%;
}
</style>