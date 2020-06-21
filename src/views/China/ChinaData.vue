<template>
  <div id="control-page-size">
    <china-map :chinaSeriesData="chinaSeriesData"></china-map>
    <!-- 导入柱状图 -->
  </div>
</template>

<script>
//! 导入子组件
import ChinaMap from "views/China/childComps/ChinaMap";
import ChinaBar from "views/China/childComps/ChinaBar";
import axios from "axios";
export default {
  name: "ChinaData",
  components: {
    ChinaMap,
    ChinaBar
  },
  data() {
    return {
      //! 请求数据传递给子组件
      chinaSeriesData: []
    };
  },
  created() {
    this.$bus.$emit("areaData", this.chinaCityData);
  },
  mounted() {
    this.getData();
  },
  methods: {
    //! 请求数据
    getData() {
      axios("api/cdata").then(res => {
        const data = res.data; //! 对数据进行过滤成我要的
        //! 带有中国城市的数据
        this.chinaCityData = data.getAreaStat;
        //! seriesData记录过滤后的数据
        data.getAreaStat.forEach(item => {
          //! 过滤数据 放入areaStat数组
          this.chinaSeriesData.push({
            //! 省份名称
            name: item.provinceShortName,
            //! 现在确诊人数
            value: item.currentConfirmedCount,
            //! 累计确诊人数
            confirmedCount: item.confirmedCount,
            //! 死亡人数
            deadCount: item.deadCount,
            //! 治愈人数
            curedCount: item.curedCount,
            //! 疑似病例
            comment: item.comment
          });
        });
      });
    }
  },
  deactivated() {
    this.$bus.$emit("areaData", this.chinaCityData);
  }
};
</script>

<style scoped>
#control-page-size {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
}
</style>