import Vue          from 'vue'
import VueRouter    from 'vue-router'

import News         from './components/News.vue'
import NewsItemPage from './components/NewsItemPage.vue'
import AboutPage from './components/AboutPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/',
			redirect: 'news'
		},
		{
			path: '/news',
			component: News
		},
		{
			path: '/news/:id',
			component: NewsItemPage
		},
		{
			path: '/about',
			component: AboutPage
		}
	]
})