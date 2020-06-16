<template>
  <div id="control-map">
    <div class="map"></div>
  </div>
</template>

<script>
//! 导入封装配置
import { option } from "option/_china/map/option";
export default {
  name: "ChinaMap",
  props: {
    chinaSeriesData: {
      type: Array
    }
  },
  data() {
    return {
      myChart: {}
    };
  },
  mounted() {
    //! 调用初始化地图
    this.initData();
  },

  methods: {
    // ! 地图初始化
    initData() {
      this.myChart = this.$echarts.init(
        document.querySelector("#control-map .map")
      );
      //! 配置 导入封装的option配置
      this.myChart.setOption(option);
      //! 监听窗口大小的变化 重新修改视图
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  },
  //! 在vuecli中使用echarts的坑
  //! 如果直接拿父元素请求的数据直接给series的data 会不能渲染数据
  //! 所以这里利用了 监听父元素传递过来的数据
  //todo 当数据改变时传递给series的data 完美解决数据渲染问题
  watch: {
    chinaSeriesData: {
      handler() {
        this.myChart.setOption({
          series: [
            {
              type: "map",
              map: "china",
              //! 将chinaSeriesData赋值给data
              data: this.chinaSeriesData,
              label: {
                show: true,
                color: "#3fdaff"
              },
              //!设置边框颜色
              itemStyle: {
                borderColor: "#3fdaff",
                borderWidth: 2,
                fontSize: 19
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
#control-map {
  flex: 2;
}
#control-map .map {
  width: 100%;
  height: 100%;
}
</style>