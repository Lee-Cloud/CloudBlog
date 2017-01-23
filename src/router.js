import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './views/home.vue'
import Posts from './views/posts.vue'
import Post from './views/post.vue'
import Gallery from './views/gallery.vue'
import About from './views/about.vue'
export default new VueRouter({
  mode: 'history',
  base: 'blog',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/gallery',
      component: Gallery
    },
    {
      path: '/posts',
      component: Posts
    },
    {
      path: '/post/:filename',
      component: Post
    },
    {
      path: '/about',
      component: About
    }
  ]
})
