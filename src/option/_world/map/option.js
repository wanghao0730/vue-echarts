//! 导入映射国家配置
import { nameMap } from "option/_world/map/nameMap";
//! 导出基本echarts的option配置
export default {
  //!背景颜色
  backgroundColor: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        //渐变
        offset: 0,
        color: "#1e1e1e" // 0% 处的颜色
      },
      {
        offset: 0.5,
        color: "#111111"
      },
      {
        offset: 1,
        color: "#000000" // 100% 处的颜色
      }
    ]
  },
  //!视觉映射配置
  visualMap: [
    {
      type: 'piecewise',
      selectedMode: 'multiple',
      pieces: [
        { gt: 100000 },
        { gt: 1000, lt: 9999 },
        { gt: 100, lt: 999 },
        { gt: 50, lt: 99 },
        { gt: 40, lt: 49 },
        { gt: 1, lt: 9 },
        { lte: 0 }
      ],
      inRange: {
        color: ['rgb(255,255,255)', 'rgb(255,229,219)', 'rgb(255,196,179)', 'rgb(255,153,133)', 'rgb(245,117,103)', 'rgb(230,69,70)', 'rgb(184,9,9)', 'rgb(184,9,9)', 'rgb(138,8,8)']
      }
    }
  ],
  tooltip: {
    backgroundColor: 'rgb(138,8,8)',
    show: true,
    formatter: function (params) {
      return `
      地区：${params.data === undefined ? '当前地区无数据' : params.data && params.data.name}
      <br/> 
      现确诊人数：${params.data === undefined ? '当前地区无数据' : params.data.value[2]}
      <br/> 
      累计确诊人数:${ params.data === undefined ? '当前地区无数据' : params.data.confirmedCount}
      <br/> 
      死亡人数:${params.data === undefined ? '当前地区无数据' : params.data.deadCount}
      <br/> 
    治愈人数:${ params.data === undefined ? '当前地区无数据' : params.data.curedCount}
      <br/> 
      `;
    },
    textStyle: {
      fontWeight: 400,
      fontSize: 18,
      fontFamily: 'Microsoft YaHei'
    }
  },
  geo: {
    map: "world",
    label: {
      show: false,
    },
    //! 区域颜色
    itemStyle: {
      areaColor: "#333333",
      borderColor: "#333",
    },
    //! 高亮颜色
    emphasis: {
      itemStyle: {
        areaColor: "#123555",
        shadowColor: "#000",
        shadowBlur: 10
      },
      label: {
        show: false,
        color: "#fff"
      }
    },
    //todo 设置为一张完整经纬度的世界地图
    map: "world",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zoom: 2,
    roam: true,
    scaleLimit: {
      min: 2,
      max: 10
    },
    layoutCenter: ["50%", "50%"],
    //! 国家映射
    nameMap
  }
};