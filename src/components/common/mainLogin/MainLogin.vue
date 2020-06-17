<template>
  <div id="control-login">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainLogin"
};
</script>

<style scoped>
#control-login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>