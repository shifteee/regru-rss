<template>
	<div class="app-layout">

		<AppHeader />
		<Searchline />
		
		<router-view></router-view>

	</div>
</template>

<script>
	import AppHeader  from './components/AppHeader.vue'
	import Searchline from './components/Searchline.vue'

	export default {
		components: { AppHeader, Searchline },
		mounted () {
			this.$store.dispatch('getNewsList') /* < Получаем список новостей */
		}
	}
</script>

