<template>
	<div class="app-layout">

		<AppHeader />

		<Searchline v-model="newsSearchQuery"/>

		<News :query="newsSearchQuery"/>


	</div>
</template>

<script>
	import AppHeader from './components/AppHeader.vue'
	import Searchline from './components/Searchline.vue'
	import News from './components/News.vue'

	export default {
		components: { AppHeader, Searchline, News },
		data () {
			return {
				newsSearchQuery: ''
			}
		}
	}
</script>

