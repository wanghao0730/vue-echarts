<template>
  <div class="forum-warp">
    <div class="choice">
      <a href="javascript:;">热门</a>
      <a href="javascript:;">最新</a>
      <a href="javascript:;">热榜</a>
    </div>
    <div
      class="forum-block"
      v-for="(item) of forumMsg"
      :key="item.forum_id"
      @click="detailShow(item)"
    >
      <div class="author">
        <h2 class="title">{{ item.forum_title }}</h2>
        <span class="name">{{ item.forum_author }}</span>
        <!-- <span class="time">2020年6月23日16:17:34</span> -->
      </div>
      <div class="brief">
        <p>{{ item.forum_content }}</p>
      </div>
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ForumMsg",
  data() {
    return {
      forumMsg: []
    };
  },
  created() {
    this.forumData();
  },
  deactivated() {},
  methods: {
    forumData() {
      axios("api/forum")
        .then(res => {
          this.forumMsg = res.data.data;
        })
        .catch(err => {
          if (err) throw err;
        });
    },
    detailShow(item) {
      //! 利用事件总线发送当前点击的对象数据
      //! 这里有个大坑 $on的监听先于$emit 所以跳转时拿不到数据
      setTimeout(() => {
        this.$bus.$emit("detailData", item);
      }, 30);
      this.$router.push({ path: "/forum/forumDetail" });
    }
  }
};
</script>

<style scoped>
.forum-warp {
  width: 100%;
  height: 100%;
  padding: 45px;
}
.forum-warp .choice {
  width: 100%;
  padding: 20px;
  background: rgb(255, 255, 255);
  border: 1px solid #f4f5f5;
}
.forum-warp .choice > a {
  margin-right: 25px;
}
.forum-warp .choice > a:nth-child(1) {
  color: blue;
}
.forum-warp .forum-block {
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 20px;
  border: 1px solid #f4f5f5;
  margin-bottom: 15px;
  cursor: pointer;
}
.forum-block .author {
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
  align-items: center;
}
.forum-block .author .title {
  margin-right: 15px;
}
.forum-block .author .name {
  margin-right: 15px;
  font-size: 18px;
  color: gray;
  font-weight: 500;
}
.forum-block .author .time {
  margin-right: 15px;
  font-size: 15px;
  color: gray;
  font-weight: 500;
}
.forum-block .brief {
  width: 80%;
  height: 50px;

  color: black;
  font-weight: 500;
  font-size: 17px;
}
.forum-block .brief > p {
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>