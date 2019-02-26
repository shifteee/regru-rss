<template>
	<div class="searchline">
		<div class="container searchline__container">
			<input type="text" placeholder="Введите поисковый запрос…" v-model="query" class="searchline__input">
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: { /* Строка поискового запроса */
				default: ''
			}
		},
		computed: {
			query: {
				get () {
					return this.$store.state.searchQuery
				},
				set (value) {
					return this.$store.commit('changeSearchQuery', value)
				}
			}
		}
	}
</script>

<style lang="sass">
	@import "./src/assets/sass/vars"

	.searchline
		background: $blue
		height: 50px
		margin-bottom: 20px
		&__container
			height: 100%
		&__input
			height: 100%
			width: 100%
			color: #fff
			font: 600 16px Arial
</style>
