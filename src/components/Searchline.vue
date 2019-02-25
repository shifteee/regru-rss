<template>
	<div class="searchline">
		<div class="container searchline__container">
			<input type="text" placeholder="Введите поисковый запрос…" class="searchline__input">
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				query: ''
			}
		},
		methods: {
		}
	}
</script>

<style lang="sass">
@import "./src/assets/sass/vars"

.searchline
	background: $blue
	height: 50px
	&__container
		height: 100%
	&__input
		height: 100%
		width: 100%
		padding-right: 120px
		color: #fff
		font: 600 16px Arial
</style>
