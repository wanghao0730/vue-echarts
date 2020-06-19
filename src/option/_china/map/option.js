//! 配置tooltip提示框信息
export let option = {
  //! 控制背景颜色
  title: {
    show: true,
    text: '中国疫情可视化平台',
    textStyle: {
      color: 'white',
      fontSize: 30,
      fontWeight: 800
    },
    left: 'center',
    top: '2%',
    textAlign: 'textAlign'
  },
  backgroundColor: "#0f0c29",
  tooltip: {
    show: true,
    trigger: "item",
    //! 悬浮窗背景
    backgroundColor: '#333333',
    //! 文字颜色
    textStyle: {
      color: 'white',
      fontSize: 17,
      lineHeight: 30
    },
    formatter: function (params) {
      return `
      地区：${params.data === undefined ? '当前地区无数据' : params.data && params.data.name}
      <br/> 
      现确诊人数：${params.data === undefined ? '当前地区无数据' : params.data.value}
      <br/> 
      累计确诊人数:${ params.data === undefined ? '当前地区无数据' : params.data.confirmedCount}
      <br/> 
      死亡人数:${params.data === undefined ? '当前地区无数据' : params.data.deadCount}
      <br/> 
    治愈人数:${ params.data === undefined ? '当前地区无数据' : params.data.curedCount}
      <br/> 
      疑似病例:${ params.data === undefined ? '当前地区无数据' : params.data.comment}
      `;
    }
  },
  roam: true, //!是否支持缩放
  zoom: 1,
  layoutCenter: ["50%", "50%"],
  scaleLimit: {
    min: 1,
    max: 6
  },
  visualMap: [{
    type: 'piecewise',
    //! 设置分段式视觉映射组件 每一段的范围
    pieces: [
      { gt: 100, lte: 499 },
      { gt: 9, lte: 99 },
      { gt: 1, lte: 9 },
      { lte: 0 },
    ],
    //! 设置对应的颜色
    inRange: {
      color: ['rgba(227,231,243,0.2)', 'rgba(233,161,136,0.3)', 'rgba(230,154,141,0.8)', 'red'],
    },
    hoverLink: true,
    textStyle: {
      color: 'white',
      fontSize: 17
    }
  }],
  series: []
}