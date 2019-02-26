import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		searchQuery: '',
		news: []
	},
	mutations: {
		changeSearchQuery (S, query) {
			S.searchQuery = query
		}
	},
	actions: {
		getNewsList ({ state }) {
			var apiURL = 'https://www.reg.ru/company/news/rss'
			var apiKey = 'ihxhj9kzwst1nuh53uj0qd7dklrinmcnyjetp5nq'

			/* Проксируем запрос через сервис конвертации RSS в JSON  */
			axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${ encodeURIComponent(apiURL) }&count=100&api_key=${ apiKey }`)
			  .then((R) => state.news = R.data.items)
			  .catch((Err) => console.error(Err))
		}
	}
})