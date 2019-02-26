import 'es6-promise/auto'

import Vue    from 'vue'
import Vuex   from 'vuex'

import router from './routes'
import store  from './store'

import App    from './App.vue'

import './assets/sass/_global.sass'

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#app')
