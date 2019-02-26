<template>
	<ul class="pagination">
		<li class="pagination__item" v-for="_, i in Array(pageCount)">
			<a :class="['pagination__link', {'pagination__link--current': +i+1 === currentPage }]" @click="currentPage = +i+1">{{ +i+1 }}</a>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['pageCount', 'value'],
		computed: {
			currentPage: { 
				/* Реализация v-model: приходит value, уходит - событие input */
				get () {
					return this.value
				},
				set (value) {
					return this.$emit('input', value)
				}
			}
		}
	}
</script>

<style lang="sass">
	@import "./src/assets/sass/vars"

	.pagination
		display: flex
		flex-wrap: wrap
		position: relative
		&__item
			display: inline-block
			list-style: none
			margin: 5px
		&__link
			display: inline-block
			width: 50px
			height: 50px
			text-align: center
			font: bold 14px/50px Arial
			border-radius: 25px
			background: #F3F3F3
			transition: all .2s
			&:hover, &--current
				background: $blue
				cursor: pointer
				color: #fff
			@media screen and (max-width: 1024px)
				width: 30px
				height: 30px
				line-height: 30px
</style>
