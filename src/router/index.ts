import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import auth$AuthLayout from '@/layout/AuthLayout.vue';
import auth$Login from '../views/Login.vue';
import testproject$Home from '../views/Home.vue';
import testproject$RootLayout from '@/layout/RootLayout.vue';
import testproject$Header from '@/views/nav/Header.vue';
import testproject$LeftNav from '@/views/nav/LeftNav.vue';
import testproject$Footer from '@/views/nav/Footer.vue';


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [


  { path: '/auth', meta : {},   components : { default : auth$AuthLayout},
	children : [
		{ path: '', redirect: { name : 'Auth.Login'}}, 
		{ path: 'login', meta : {},  name: 'Auth.Login', components : { default : auth$Login}  }
] },


  {path: '/', meta : {},   components : { default : testproject$RootLayout},
		children : [
			 { path: '/', redirect: { name : 'Auth.Login'}}, 
       { path: 'home', meta : {},  name: 'Root.Home', components : { header : testproject$Header, leftnav : testproject$LeftNav, footer : testproject$Footer, default : testproject$Home}}
    ]
  }


  
]

const router = new VueRouter({
  routes
})

export default router
