<style lang="less" scoped>
	.footer {
		position: relative;
		line-height: 50px;
        background: #778A9D;
        padding: 0 15px;
	}
</style>
<template>
	<footer class="footer">
        <router-link slot="left" to="/WF">WF</router-link>
        <router-link slot="left" to="/CCL">CCL</router-link>
    </footer>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>