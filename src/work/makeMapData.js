//! 调用是传入两个参数一个是geoMap世界图的地理坐标
//! 第二个是worldSeriesData 存着世界疫情的数据
export default function makeMapData(geoMap, worldSeriesData) {
  //! res 等等要暴露给外边
  let res = [];
  for (let i = 0; i < worldSeriesData.length; i++) {
    //! geoMap是地理坐标key是国家的名称 我要利用疫情数据中的name 找到对应的geo地标
    let geoCoord = geoMap[worldSeriesData[i].name];
    if (geoCoord) {
      //! res 数据存了name 数据国家的名称 value 地标和国家的值
      res.push({
        name: worldSeriesData[i].name,
        //! 现在确诊人数
        value: geoCoord.concat(worldSeriesData[i].value),
        //! 累计确诊
        confirmedCount: worldSeriesData[i].confirmedCount,
        //! 死亡人数
        deadCount: worldSeriesData[i].deadCount,
        //! 治愈人数
        curedCount: worldSeriesData[i].curedCount
      });
    }
  }
  //返回出去
  return res;
}