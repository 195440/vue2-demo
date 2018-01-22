<style lang="less" scoped>
.v-left {
  position: relative;
  line-height: 38px;
  color: #fff;
  padding: 0 15px;
  width: 320px;
  background: #27313c;
}
</style>
<template>
	<div class="v-left">
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