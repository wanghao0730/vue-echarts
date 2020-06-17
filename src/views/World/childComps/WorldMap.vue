<template>
  <div id="control-world-map">
    <div class="map"></div>
  </div>
</template>

<script>
import geoCoorMap from "option/_world/map/data/geoMap";
import makeMapData from "@/work/makeMapData";
import option from "option/_world/map/option";

export default {
  name: "WorldMap",
  props: {
    worldSeriesData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      myChart: {},
      //! 世界经纬度坐标
      geoMap: geoCoorMap
    };
  },

  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.myChart = this.$echarts.init(
        document.querySelector("#control-world-map .map")
      );

      this.myChart.setOption(option);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    geoMapData() {}
  },
  watch: {
    worldSeriesData: {
      handler() {
        console.log(makeMapData(this.geoMap, this.worldSeriesData));
        let that = this;
        this.myChart.setOption({
          series: [
            {
              //!这里用了scatter散点需要用到coordinateSystem属性的值为geo因为我设置geo模式
              type: "effectScatter",
              coordinateSystem: "geo",
              //! makeMapData是自己封装的函数 会返回一个数组 数组中记录国家的名称坐标和感染人数
              data: makeMapData(this.geoMap, this.worldSeriesData),
              symbolSize: function(val) {
                return val[2] > 10000 ? 45 : 12;
              },
              label: {
                normal: {
                  formatter: "{b}",
                  position: "right",
                  show: true,
                  color: "#fff"
                },
                emphasis: {
                  show: true
                }
              },
              //! 涟漪特效相关配置。
              rippleEffect: {
                period: 4,
                brushType: "stroke",
                scale: 3.5
              }
            }
          ]
        });
      }
    },
    deep: true
  }
};
</script>

<style scoped>
#control-world-map {
  flex: 1;
}
#control-world-map > .map {
  width: 100%;
  height: 100%;
}
</style>