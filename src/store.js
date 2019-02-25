import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios-jsonp-pro'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		news: []
	},
	mutations: {
		increment (S) {
			S.count++
		}
	},
	actions: {
		getNewsList () {
			axios.jsonp('https://www.reg.ru/company/news/rss')
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		}
	}
})