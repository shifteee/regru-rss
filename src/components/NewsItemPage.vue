<template>
	<div class="articlepage">
		<div class="container articlepage__container">
			<a class="articlepage__back" @click="$router.push('/news')">← Все новости</a>

			<h1 class="articlepage__title">{{ selectedItemInfo.title }}</h1>
			<div class="articlepage__content" v-html="selectedItemInfo.content"></div>
			<!-- <pre>{{ this.$store.state.news }}</pre> -->
		</div>

	</div>
</template>

<script>
	import Searchline from './Searchline.vue'
	export default {
		components: { Searchline },
		computed: {
			selectedItemID () { /* Идентификатор выбранной новости */
				return this.$route.params.id
			},

			selectedItemInfo () { /* Инфо выбранной новости */
				/* Поскольку у новости нет уникального идентификатора, 
				 * возьмем за таковой заголовок статьи с приконкатинированной датой публикации.
				 * Чтобы на странице статьи получить информацию статьи, перебираем все новости 
				 * сравнивая их идентификаторы с иденитфикатором выбранной статьи */
				let news = this.$store.state.news
				let selectedItemID = encodeURIComponent(this.selectedItemID)
				for (let item of news) {
					let itemID = encodeURIComponent(item.title + item.pubDate)

					if (itemID === selectedItemID) return item
				}

				return {}
			}
		}
	}
</script>

<style lang="sass">
	.articlepage
		&__container
			margin-top: 20px !important
		&__content
			margin-top: 20px
			line-height: 1.55
			margin-bottom: 40px
		img
			max-width: 100%
			float: right
			margin-left: 20px
			margin-bottom: 20px
			@media screen and (max-width: 480px)
				float: none
				display: block
				margin: 0
		&__back
			display: block
			width: 100%
			margin: 20px 0
			padding: 10px 0
			color: #999
			&:hover
				text-decoration: underline
				cursor: pointer
</style>
