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
import { mapActions } from 'vuex';
import { SET_STORE } from 'store/store';
import { SET_USER } from 'store/user';

export default {
  methods: {
    ...mapActions([SET_STORE]),
    ...mapActions([SET_USER]),
    routeComplete() {
      debugger;
      this.SET_STORE({ routepath: this.$route.path });
      this.SET_USER({ routepath: this.$route.path });
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