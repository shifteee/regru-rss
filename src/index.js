import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import store from './store'
import App from './App.vue'

import './assets/sass/_global.sass'

Vue.use(VueRouter)

new Vue({
	store,
	mounted () {
		this.$store.dispatch('getNewsList')
	},
	render: (h) => h(App),
}).$mount('#app')
