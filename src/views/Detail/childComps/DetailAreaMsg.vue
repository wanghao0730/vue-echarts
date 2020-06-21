<template>
  <div class="area-msg">
    <div class="top">
      <div class="back" @click="backPrev">
        <img src="~assets/image/back.png" alt />
      </div>
      <div class="title">
        <h1>{{areaData.cityName }}</h1>
      </div>
    </div>
    <table>
      <thead>
        <th
          v-for="(item,index) in title.areatitle"
          :key="index"
          :style="{background:title.color[index]}"
        >{{ item }}</th>
      </thead>
      <tbody>
        <tr v-for="(item,index) of areaData.cities" :key="index">
          <td>{{ item.cityName }}</td>
          <td>{{ item.currentConfirmedCount }}</td>
          <td>{{ item.confirmedCount }}</td>
          <td>{{ item.deadCount }}</td>
          <td>{{ item.curedCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailAreaMsg",
  data() {
    return {
      areaData: {},
      title: {
        areatitle: ["地区", "现存确诊", "累计确诊", "死亡", "治愈"],
        color: [
          "#e3e7f3",
          "#f3bab0",
          "#e69a8d",
          "#b4c0d5",
          "#95db9a",
          "#e3e7f3"
        ]
      }
    };
  },
  created() {
    this.areaData = this.$store.getters.showCities;
  },
  methods: {
    backPrev() {
      //! 返回上一个路由
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.area-msg {
  height: 100%;
  padding: 20px 30px;
}
.area-msg .top {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.area-msg .top .back {
  width: 45px;
  height: 45px;
  cursor: pointer;
}
.area-msg .top .back > img {
  width: 100%;
  height: 100%;
}
.area-msg h1 {
  text-align: center;
  margin-bottom: 20px;
  color: slateblue;
}
.area-msg > table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  background-color: rgb(247, 247, 247);
}

.area-msg > table > thead > th {
  width: 17%;
  padding: 10px 0;
}
.area-msg > table th {
  font-size: 20px;
  border: 1px solid #ffffff;
}
.area-msg > table > tbody > tr {
  border: 1px solid #ffffff;
}
.area-msg > table > tbody > tr > td:nth-child(1) {
  text-align: left;
}
.area-msg > table > tbody > tr > td {
  padding: 10px 10px;
  color: black;
  font-weight: 800;
  text-align: right;
  border-right: 1px solid #ffffff;
}
.area-msg > table > tbody > tr > .color {
  text-align: center;
  cursor: pointer;
  color: blue;
}
</style>