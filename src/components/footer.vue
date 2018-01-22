<style lang="less" scoped>
.v-footer {
  position: relative;
  line-height: 50px;
  background: #778a9d;
  padding: 0 15px;
  img {
    width: 40px;
    width: 40px;
    margin: 0 10px;
  }
}
</style>
<template>
	<footer class="v-footer">
     <router-link v-for="(d, i) in routelinks" :key="i" slot="left" :to="d">
       <img :src="'http://t3cloud.jp/img/'+d+'.png'" :alt="d" />
     </router-link>
  </footer>
</template>
<script>
export default {
  props: ['routelink'],
  data() {
    return {
      routelinks: ['/']
    };
  },
  watch: {
    routelink: {
      handler: function(val, oldVal) {
        debugger;
        console.log(this.routelinks);
        this.routelinks.push(val);
      }
    }
  }
};
</script>