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
    <span>77</span>
    <span>{{store1}}</span>
   <!--  <router-link v-for="(d, i) in store.rountlink" :key="i" slot="left" :to="d">
       <img :src="'http://t3cloud.jp/img/'+d+'.png'" :alt="d" />
     </router-link>-->
  </footer>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({ store1: function(a){
    debugger;
    return a.store.routepath;
  } }),
};
</script>