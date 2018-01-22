<style lang="less" scoped>
.v-right {
  position: relative;
  line-height: 38px;
  color: #fff;
  padding: 0 15px;
  flex: 1;
}
</style>
<template>
	<div class="v-right">
		<span>Vue tCloud</span>
	</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>