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
		<v-footer></v-footer>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { SET_STORE } from 'store/info';

export default {
  methods: {
    ...mapActions([SET_STORE]),
    routeComplete() {
      if (this.routePath.indexOf(this.$route.path) === -1) {
        let newRoutePath = this.routePath;
        newRoutePath.push(this.$route.path)
        this.SET_STORE({ routePath: newRoutePath })
      }
    }
  },
  mounted() {
    // 组件创建完后
    this.routeComplete();
  },
  computed: mapState({
    routePath: state => state.info.routePath
  }),
  watch: {
    $route: 'routeComplete'
  }
};
</script>