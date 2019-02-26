<template>
	<div class="header container">
		<div class="header__logo-wrapper">
			<img src="~/assets/images/logo.svg" alt="Reg.ru" class="header__logo">
		</div>
		<ul class="header__menu">
			<li class="header__menu-item">
				<a class="header__menu-link" @click="$router.push('/news')">Новости</a>
			</li>
			<li class="header__menu-item">
				<a class="header__menu-link" @click="$router.push('/about')">Об этом</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="sass" scoped>

	@import "./src/assets/sass/vars"
	.header
		display: flex
		justify-content: space-between
		align-items: center
		padding: 20px
		&__menu
			display: flex
		&__menu-item
			position: relative
			display: inline-block
			list-style-type: none
			margin: 0
		&__menu-link
			padding: 10px
			text-decoration: none
			color: $blue
			font: 400 14px Arial
			&--current
				font-weight: bold
				border: 0
			&:hover
				cursor: pointer
</style>
