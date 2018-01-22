<style lang="less" scoped>
.v-footer {
  position: relative;
  line-height: 50px;
  background: #778a9d;
  padding: 0 15px;
}
</style>
<template>
	<footer class="v-footer">
        <router-link slot="left" to="/WF">WF</router-link>
        <router-link slot="left" to="/CCL">CCL</router-link>
        <router-link slot="left" to="/login">login</router-link>
    </footer>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    routeComplete() {
        console.log(this.$route.path);
    }
  },
  mounted() {
    // 组件创建完后
    this.routeComplete();
  },
  watch: {
    $route: "routeComplete"
  }
};
</script>