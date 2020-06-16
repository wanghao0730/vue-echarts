<template>
  <div id="world-map-size">
    <world-map :worldSeriesData="worldSeriesData"></world-map>
  </div>
</template>

<script>
//! 子组件
import WorldMap from "views/World/childComps/WorldMap";
import axios from "axios";
export default {
  name: "WorldData",
  props: {},
  components: {
    WorldMap
  },
  data() {
    return {
      worldSeriesData: []
    };
  },
  mounted() {
    this.worldData();
  },
  methods: {
    worldData() {
      axios("api/wdata").then(res => {
        const data = res.data;
        data.getListByCountryTypeService2true.forEach(item => {
          this.worldSeriesData.push({
            //! 国家
            name: item.provinceName,
            //! 现在确诊人数
            value: item.currentConfirmedCount,
            //! 累计确诊人数
            confirmedCount: item.confirmedCount,
            //! 死亡人数
            deadCount: item.deadCount,
            //! 治愈人数
            curedCount: item.curedCount
          });
        });
      });
    }
  }
};
</script>

<style>
#world-map-size {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
}
</style>