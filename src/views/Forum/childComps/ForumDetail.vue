<template>
  <div class="forum-detail" v-if="!detail == ''">
    <div class="back" @click="backPrev">
      <img src="~assets/image/back.png" alt />
    </div>
    <div class="top">
      <div class="title">
        <h1>{{ detail.forum_title }}</h1>
      </div>
      <div class="author">作者:{{ detail.forum_author }}</div>
    </div>
    <div class="content">
      <p>{{ detail.forum_content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumDetail",
  data() {
    return {
      detail: {}
    };
  },
  created() {
    this.$bus.$on("detailData", res => {
      this.detail = res;
    });
  },
  methods: {
    backPrev() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.forum-detail {
  width: 100%;
  height: 100%;
  padding: 35px;
  background: rgb(255, 255, 255);
  border: 1px solid #f4f5f5;
  display: flex;
  flex-direction: column;
}
.forum-detail .back {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.forum-detail .back > img {
  width: 100%;
  height: 100%;
}
.forum-detail .top {
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.forum-detail .top .title {
  font-size: 20px;
  margin-bottom: 16px;
}
.forum-detail .top .title h1 {
  letter-spacing: 10px;
}
.forum-detail .top .author {
  color: gray;
  font-size: 18px;
  letter-spacing: 10px;
}
.forum-detail .content {
  width: 80%;
  padding: 30px;
  align-self: center;
}
.forum-detail .content p {
  width: 100%;
  font-size: 19px;
  line-height: 50px;
  font-family: "微软雅黑";
  font-weight: 800;
}
</style>