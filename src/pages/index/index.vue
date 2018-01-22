<style lang="less" scoped>
.layout-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .layout-main {
    flex: 1;
    display: inline-flex;
  }
}
</style>
<template>
	<div class="layout-body">
		<v-header title="首页"></v-header>
		<div class="layout-main">
			<v-left></v-left>
			<v-right></v-right>
		</div>
		<v-footer :routelink="route1"></v-footer>
	</div>
</template>
<script>
export default {
  data() {
    return {
      route1: '/'
    };
  },
  methods: {
    routeComplete() {
      this.route1 = this.$route.path;
      console.log(this.$route.path);
      debugger;
    }
  },
  mounted() {
    // 组件创建完后
    this.routeComplete();
  },
  watch: {
    $route: 'routeComplete'
  }
};
</script>