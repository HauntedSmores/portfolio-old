import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/work',
			name: 'work'
		},
		{
			path: '/contact',
			name: 'contact',
		}
	]
})
