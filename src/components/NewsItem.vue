<template>
	<div class="news-item">
		<h2 class="news-item__title">Заголовок</h2>
		<p class="news-item__short">Далеко-далеко за словесными горами в стране, гласн…</p>

		<button class="news-item__button">Читать</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				a: 1
			}
		}
	}
</script>

<style lang="sass">
@import "./src/assets/sass/vars"

.news-item
	margin-bottom: 30px
	background: #515151
	padding: 30px
	width: calc(100% / 3 - 20px)
	&__title
		font: bold 24px/30px Arial
		color: #fff
		margin-bottom: 12px
	&__short
		font: 15px/24px Arial
		color: #e5e5e5
		margin-bottom: 12px
	&__button
		background: #00ca67
		color: #fff
		font: bold 15px/36px Arial
		padding: 0 12px
		height: 36px
		border-radius: 4px
		transition: background .2s
		&:hover
			background: lighten(#00ca67, 5%)
			cursor: pointer
	@media screen and (max-width: 1024px)
		width: calc(50% - 10px)
	@media screen and (max-width: 480px)
		width: 100%
	
</style>
