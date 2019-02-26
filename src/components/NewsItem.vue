<template>
	<div class="news-item">
		<h2 class="news-item__title">{{ info.title }}</h2>
		<p class="news-item__short">{{ shortText }}</p>

		<button class="news-item__button" @click="goFullPage()">Читать</button>
	</div>
</template>

<script>
	export default {
		props: {
			info: {
				default () {
					return {
						"title": "Хостинг бесплатно для быстрого старта онлайн-бизнеса!",
						"pubDate": "2019-02-25 14:15:09",
						"link": "https://www.reg.ru/company/news/9879",
						"guid": "https://www.reg.ru/company/news/9879",
						"author": "",
						"thumbnail": "https://img.reg.ru/news/hosting250219.png",
						"description": "\n<img src=\"https://img.reg.ru/news/hosting250219.png\" width=\"\" height=\"\" alt=\"\" class=\"b-news-article__right\">Для старта собственного дела в Интернете вам понадобятся: красивый и звучный домен, мощный хостинг и защита для сайта. На сайте REG.RU при регистрации домена в зоне .RU или .РФ вы получите в подарок 2 месяца использования хостинга и SSL-сертификат на 1 год.<cut><br><br>\r\nВоспользоваться специальным предложением легко — всего 5 простых шагов, и вы получите бонус:  <br>\r\n1. Перейдите в раздел «Домены».<br>\r\n2. Подберите подходящий домен и нажмите «Зарегистрировать». <br>\r\n3. Выберите подключение виртуального хостинга, укажите тариф и срок заказа. <br>\r\n4. Отметьте подключение SSL-сертификата.<br>\r\n5. Нажмите на кнопку «Оплатить».<br><br>\r\nХостинг REG.RU — это выгодное и производительное решение. Он обеспечит вашим сайтам быструю и стабильную работу даже при высоких нагрузках.<br><br><span><a href=\"https://www.reg.ru/domain/new/\" class=\"b-button b-button_color_primary b-button_size_big\">Зарегистрировать домен</a></span></cut>\n",
						"content": "\n<img src=\"https://img.reg.ru/news/hosting250219.png\" width=\"\" height=\"\" alt=\"\" class=\"b-news-article__right\">Для старта собственного дела в Интернете вам понадобятся: красивый и звучный домен, мощный хостинг и защита для сайта. На сайте REG.RU при регистрации домена в зоне .RU или .РФ вы получите в подарок 2 месяца использования хостинга и SSL-сертификат на 1 год.<cut><br><br>\r\nВоспользоваться специальным предложением легко — всего 5 простых шагов, и вы получите бонус:  <br>\r\n1. Перейдите в раздел «Домены».<br>\r\n2. Подберите подходящий домен и нажмите «Зарегистрировать». <br>\r\n3. Выберите подключение виртуального хостинга, укажите тариф и срок заказа. <br>\r\n4. Отметьте подключение SSL-сертификата.<br>\r\n5. Нажмите на кнопку «Оплатить».<br><br>\r\nХостинг REG.RU — это выгодное и производительное решение. Он обеспечит вашим сайтам быструю и стабильную работу даже при высоких нагрузках.<br><br><span><a href=\"https://www.reg.ru/domain/new/\" class=\"b-button b-button_color_primary b-button_size_big\">Зарегистрировать домен</a></span></cut>\n",
						"enclosure": {},
						"categories": []
					}
				}
			}
		},
		computed: {
			shortText () {
				return this.strip(this.info.content).split(' ').slice(0, 10).join(' ').substr(0, 100) + '…'
				// return this.strip(this.info.content).substr(0, 50) + '…'
			}
		},
		methods: {
			strip (html) {
				var doc = new DOMParser().parseFromString(html, 'text/html');
				return doc.body.textContent || "";
			},

			goFullPage () {
				let id = encodeURIComponent(this.info.title + this.info.pubDate)
				console.log(id);
				this.$router.push({ path: `/news/${id}` })
			}
		}
	}
</script>

<style lang="sass">
	@import "./src/assets/sass/vars"

	.news-item
		background: #515151
		padding: 30px 30px 65px
		width: calc(100% / 3 - 20px)
		margin: 0 10px 20px
		position: relative
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
			position: absolute
			bottom: 30px
			left: 30px
			font: bold 15px/36px Arial
			padding: 0 12px
			height: 36px
			border-radius: 4px
			transition: background .2s
			&:hover
				background: lighten(#00ca67, 5%)
				cursor: pointer

		@media screen and (max-width: 1024px)
			width: calc(100% / 2 - 20px)
			margin: 0 10px 20px
		@media screen and (max-width: 480px)
			width: 100%
</style>
