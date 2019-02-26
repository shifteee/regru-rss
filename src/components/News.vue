<template>
	<div class="news">
		<div class="container news__container">
			<div class="news__row">
				<NewsItem v-for="newsItem in pageNews" :key="newsItem.title + newsItem.pubDate" :info="newsItem" />
			</div>

			<div v-if="!fullList && pageNews.length" class="news__control">
				<Pagination :page-count="pageCount" v-model="page" />
				<button @click="fullList = true" class="news__full">Показать все</button>
			</div>

			<div class="news__empty" v-if="!news.length">Список пуст</div>
			<div class="news__empty" v-if="news.length && !foundNews.length">Нет найденных новостей по запросу «{{ newsSearchQuery }}»</div>

		</div>
	</div>
</template>

<script>
	import NewsItem   from './NewsItem.vue'
	import Pagination from './Pagination.vue'

	export default {
		components: { NewsItem, Pagination },
		data () {
			return {
				perPage: 12, /* Количество новостей на страницу */
				page: 1, /* Номер страницы */
				fullList: false /* Показываем ли весь список */
			}
		},
		watch: {
			newsSearchQuery () { /* При смене поискового запроса - сбрасывем на первую страницу */
				this.page = 1
			}
		},
		computed: {
			newsSearchQuery () { /* Строка поискового запроса */
				return this.$store.state.searchQuery
			},
			news () { /* Полный список новостей */
				return this.$store.state.news
			},
			foundNews () { /* Список новостей, заголовок которых содержит текст поисковой строки */
				let newsSearchQuery = this.newsSearchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
				newsSearchQuery = new RegExp(newsSearchQuery, 'gim')

				return this.news.filter((item) => {
					return newsSearchQuery.test(item.title)
				})
			},
			pageNews () { /* Новости текущей страницы  */
				let news = this.foundNews

				/* Если выбран показ всех новостей */
				if (this.fullList) return news

				let firstShownItem = (this.page - 1) * this.perPage
				let lastShownItem  = firstShownItem + this.perPage

				return news.slice(firstShownItem, lastShownItem)
			},
			pageCount () { /* Количество страниц с новостями, найденными по поисковому запросу */
				return Math.ceil(this.foundNews.length / this.perPage)
			}
		}
	}
</script>

<style lang="sass">
	@import "./src/assets/sass/vars"

	.news
		&__container
			margin-top: 20px !important
		&__row
			display: flex
			flex-wrap: wrap
			align-items: stretch
			position: relative
			margin-left: -10px
			margin-right: -10px
		&__control
			display: flex
			justify-content: space-between
			align-items: center
			margin-bottom: 40px
			@media screen and (max-width: 1024px)
				flex-direction: column
		&__full
			background: $blue-light
			color: #fff
			flex-shrink: 0
			font: bold 15px/36px Arial
			padding: 0 12px
			height: 36px
			border-radius: 4px
			transition: background .2s
			&:hover
				background: lighten($blue-light, 5%)
				cursor: pointer
			@media screen and (max-width: 1024px)
				margin-top: 20px
		&__empty
			text-align: center
			padding: 40px
			overflow: hidden
			text-overflow: ellipsis
			color: rgba(#000,.5)

</style>
