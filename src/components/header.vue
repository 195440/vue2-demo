<style lang="less" scoped>
.v-header {
  position: relative;
  line-height: 38px;
  color: #fff;
  box-shadow: 0 1px 5px -2px #000;
  padding: 0 15px;
  text-align: center;
}
</style>
<template>
	<header class="v-header">
		<span>Vue tCloud</span>
	</header>
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