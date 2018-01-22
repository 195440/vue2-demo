<style lang="less" scoped>
.v-header {
  position: relative;
  line-height: 38px;
  color: #fff;
  box-shadow: 0 1px 5px -2px #000;
  display: flex;
  text-align: center;
  span {
    flex: 1;
    .t-user {
      float: right;
      .t-user-photo {
        width: 30px;
        height: 30px;
        background-size: 100%;
        border-radius: 100px;
        margin: 5px 5px 0;
        box-shadow: 0 1px 5px -1px #000;
      }
    }
  }
}
</style>
<template>
	<header class="v-header">
    <span></span>
		<span>Vue tCloud</span>
    <span>
      <div class="t-user">
        <div class="t-user-photo" :style="'background-image:url(http://t3cloud.jp/userPhoto/'+uerData.employeecode+'.jpg)'"></div>
      </div>
    </span>
	</header>
</template>
<script>
export default {
  data() {
    return {
      uerData: { employeecode: '' }
    };
  },
  methods: {
    uerGet() {
      $.get('/tcloud/mainplat/users/usernow').done(
        data => (this.uerData = data)
      );
    }
  },
  mounted() {
    // 组件创建完后
    this.uerGet();
  }
};
</script>