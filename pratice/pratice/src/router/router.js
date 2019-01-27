import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movieDetail from '@/views/movie/movie-detail'
import movieList from '@/views/movie/movie-list'
import movies from '@/views/movie/movies'
import error from '@/components/error'
import search from '@/views/movie/search-list'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/movies',
            name: 'movies',
            component: movies
        },
        {
            path: '/movie-detail',
            name: 'movie-detail',
            component: movieDetail
        },
        {
            path: '/movieList',
            name: 'movieList',
            component: movieList
        },
        {
            path: '/error',
            name: 'error',
            props: true,
            component: error
        },
        {
            path: '/movie/search',
            name: 'search',
            props: true,
            component: search
        }
    ]
})