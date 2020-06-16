<template>
  <div id="control-bar">
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  name: "ChinaBar",
  props: {
    barData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      myChart: {},
      option: {},
      xAxisData: [], //! x轴数据
      yAxisData: [] //! y轴数据
    };
  },
  created() {
    this.changeData();
  },
  mounted() {},
  updated() {},
  methods: {
    //!过滤数据
    changeData() {
      //!过滤属性
      this.barData.forEach(item => {
        this.yAxisData.push({
          name: item.name
        });
      });
    },
    initBar() {
      this.myChart = this.$echarts.init(
        document.querySelector("#control-bar .bar")
      );
      this.option = {
        backgroundColor: "#0f0c29"
      };
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
#control-bar {
  flex: 1;
}
#control-bar .bar {
  width: 100%;
  height: 100%;
}
</style>