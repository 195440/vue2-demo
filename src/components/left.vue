<style lang="less" scoped>
.v-left {
  position: relative;
  line-height: 38px;
  color: #fff;
  padding: 0 15px;
  width: 320px;
  background: #27313c;
  overflow: auto;
}
</style>
<template>
	<div class="v-left">
		<ul>
      <li v-for="(list, key) in noticeDatas" :key="key">
        {{ list.notice }}
      </li>
    </ul>
	</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      noticeDatas: []
    };
  },
  methods: {
    noticeList() {
      $.get(
        '/tcloud/mainplat/users/usernow/notices?_dc=1516584064190&page=1&start=0&limit=25&filter=%5B%7B%22property%22%3A%22display%22%2C%22value%22%3A%22%5C%5Cbtrue%5C%5Cb%22%7D%5D'
      ).done(data => (console.log(_.uniqueId()), (this.noticeDatas = data)));
    }
  },
  mounted() {
    // 组件创建完后
    this.noticeList();
  }
};
</script>