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
import { mapState } from "vuex";
import logo from "./logo.png";
export default {
  data() {
    return {
      logo
    };
  },
  computed: mapState({ user: state => state.user })
};
</script>