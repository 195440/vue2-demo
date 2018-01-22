<style lang="less" scoped>
.login {
  width: 320px;
  height: 440px;
  top: 50%;
  left: 50%;
  margin: -220px 0 0 -160px;
  background: #ffffff;
  position: absolute;
  text-align: center;
  padding: 30px 40px;
  box-shadow: 0 2px 5px -1px #000;
  border-radius: 4px;
  img {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .form-control {

    background-color: #eee;
  }

  button {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 30px;
  }
}
</style>
<template>
	<div>
		<form class="login" v-on:submit.prevent="submit">
			<img src="login.png" />
			<div class="input-group mb-3">
				<input type="text" class="form-control" placeholder="社員/AS番号" v-model="form.id" >
			</div>
			<div class="input-group mb-3">
				<input type="password" class="form-control" placeholder="パスワード" v-model="form.name" >
			</div>
			<button class="btn btn-secondary" >ログイン</button>
		</form>
	</div>
</template>
<script>
import { mapActions } from 'vuex';
import { USER_SIGNIN } from 'store/store';

import './login.png';

export default {
  data() {
    return {
      btn: false, //true 已经提交过， false没有提交过
      form: {
        id: '',
        name: ''
      }
    };
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    submit() {
			debugger;
      this.btn = true;
      if (!this.form.id || !this.form.name) return;
      this.USER_SIGNIN(this.form);
      this.$router.replace({ path: '/' });
    }
  }
};
</script>