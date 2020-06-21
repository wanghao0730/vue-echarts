<template>
  <div class="detail-msg">
    <table>
      <thead>
        <th
          v-for="(item,index) in title.areatitle"
          :key="index"
          :style="{background:title.color[index]}"
        >{{ item }}</th>
      </thead>
      <tbody>
        <tr v-for="(item,index) of areaMsg" :key="index">
          <td>
            <span class="icon">
              <img src="~assets/image/right.png" alt />
            </span>
            {{ item.provinceName }}
          </td>
          <td>{{ item.currentConfirmedCount }}</td>
          <td>{{ item.confirmedCount }}</td>
          <td>{{ item.deadCount }}</td>
          <td>{{ item.curedCount }}</td>
          <td class="color" @click="detail(item)">详情></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailMsg",
  data() {
    return {
      title: {
        areatitle: ["地区", "现存确诊", "累计确诊", "死亡", "治愈", "疫情"],
        color: [
          "#e3e7f3",
          "#f3bab0",
          "#e69a8d",
          "#b4c0d5",
          "#95db9a",
          "#e3e7f3"
        ]
      },
      areaMsg: []
    };
  },
  created() {
    this.$bus.$on("areaData", res => {
      this.areaMsg = res;
    });
  },
  deactivated() {
    //! 清除事件总线
    this.$bus.$off("areaData");
  },
  methods: {
    detail(item) {
      //! 将点击的数据保存到vuex中
      this.$store.commit("updateCity", {
        cityName: item.provinceShortName,
        cities: item.cities
      });
      this.$router.push({ path: "/detail/areaMsg" });
    }
  }
};
</script>

<style scoped>
.detail-msg {
  height: 100%;
  padding: 20px 20px;
}
.detail-msg > table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  background-color: rgb(247, 247, 247);
}

.detail-msg > table > thead > th {
  width: 17%;
  padding: 10px 0;
}
.detail-msg > table th {
  font-size: 20px;
  border: 1px solid #ffffff;
}
.detail-msg > table > tbody > tr {
  border: 1px solid #ffffff;
}
.detail-msg > table > tbody > tr .icon > img {
  width: 20px;
  height: 13px;
  cursor: pointer;
}
.detail-msg > table > tbody > tr > td:nth-child(1) {
  text-align: left;
}
.detail-msg > table > tbody > tr > td {
  padding: 10px 10px;
  color: black;
  font-weight: 800;
  text-align: right;
  border-right: 1px solid #ffffff;
}
.detail-msg > table > tbody > tr > .color {
  text-align: center;
  cursor: pointer;
  color: blue;
}
</style>