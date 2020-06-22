<template>
  <div class="time-service-warp">
    <div class="col-content">
      <div class="item-block" v-for="(item,index) of timeService" :key="index">
        <div class="tab-left">
          <span class="left-time">
            <b>{{ item.pubDateStr }}</b>
            <br />
            <span class="date">{{ item.pubDate | changeTime }}</span>
          </span>
          <span class="icon"></span>
          <span class="left-line"></span>
        </div>
        <div class="tab-right">
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.summary }}</div>
          <div class="infoSource">信息来源:{{ item.infoSource}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "@/util/formatDate";
import axios from "axios";
export default {
  name: "TimeService",
  data() {
    return {
      timeService: []
    };
  },
  created() {
    axios({
      method: "get",
      url: "api/time"
    }).then(res => {
      this.timeService = res.data.getTimelineService1;
    });
  },
  filters: {
    changeTime: function(value) {
      //! 利用時間戳转换
      return formatDate(new Date(value));
    }
  }
};
</script>

<style scoped>
.time-service-warp {
  width: 100vw;
  padding: 30px;
  height: 100%;
  background: #f7f7f7;
}
.time-service-warp .col-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.time-service-warp .col-content .item-block {
  flex: 1;
  display: flex;
}

.col-content .tab-left {
  position: relative;
  flex: 1;
}
.tab-left .left-time > b {
  font-size: 20px;
}
.tab-left .left-time .date {
  display: inline-block;
  margin-top: 10px;
}
.tab-left .icon {
  display: inline-block;
  z-index: 100;
  position: absolute;
  right: 20px;
  top: 0;
  width: 20px;
  height: 20px;
  background: url("~assets/image/dot.png") no-repeat;
  background-size: cover;
}
.tab-left .left-line {
  position: absolute;
  top: 5px;
  right: 28px;
  display: inline-block;
  width: 3px;
  height: 100%;
  background: #ebebeb;
}
.col-content .tab-right {
  flex: 4;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 20px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
}
.col-content .tab-right .title {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 15px;
}
.col-content .tab-right .content {
  width: 80%;
  font-size: 18px;
  margin-top: 20px;
  color: gray;
}
.col-content .tab-right .infoSource {
  margin-top: 20px;
  align-self: flex-end;
  margin-right: 30px;
  color: gray;
}
</style>