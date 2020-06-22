<template>
  <div class="top-bar-item" @click="itemClck">
    <div :class="isActive">
      <slot name="icon"></slot>
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    link: {
      type: String
    }
  },
  data() {
    return {
      activeColor: "deeppink"
    };
  },
  computed: {
    isActive() {
      //! 判断当前路由是否和父组件传递的路由一致 一致就返回一个class类用于显示选中颜色
      return this.$route.path.indexOf(this.link) !== -1
        ? { activeColor: true }
        : {};
    }
  },
  methods: {
    itemClck() {
      //! 监听点击切换路由
      this.$router.push({ path: this.link });
    }
  }
};
</script>
<style scoped>
.top-bar-item {
  flex: 1;
}
.top-bar-item .icon {
  width: 30px;
  height: 30px;
}
.top-bar-item > div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.activeColor {
  color: deeppink;
}
</style>