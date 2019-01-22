import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movieDetail from '@/views/movie/movie-detail'
import movieList from '@/views/movie/movie-list'
import movies from '@/views/movie/movies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/movies',
      name:'movies',
      component: movies
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path:'/movieList',
      name:'movieList',
      component: movieList
    }
  ]
})
