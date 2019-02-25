<template>
	<div class="news">
		<div class="container">
			<div class="news__row">
				{{news}}
				<!-- <NewsItem v-for="newsItem in news" :info="newsItem" /> -->

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			news () {
				return this.$store.state.news
			}
		}
	}
</script>

<style lang="sass">
@import "./src/assets/sass/vars"

.news
	margin-top: 20px
	position: relative
	&__row
		display: flex
		justify-content: space-between
		flex-wrap: wrap
		align-items: stretch
</style>
