<template>
  <section class="grid has-search-bar">
    <div v-if="inTheater.title">
      <h2>{{inTheater.title}}
        <router-link tag="span" :to="{ name: 'movieList', query: { type: inTheater.type }}" class="more btn btn-warning">更多</router-link>
      </h2>
      <div class="card">
        <router-link :to="{ name: 'movie-detail', params:{ id: item.id } }" class="item" v-for="item in inTheater.subjects"
          :key="item.id">
          <div class="cover">
            <div class="wp">
              <img class="img-show" :src="item.images.medium" />
            </div>
          </div>
          <div class="info">
            <h3>{{item.title}}</h3>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="cominigSoon.title">
      <h2>{{cominigSoon.title}}
        <router-link tag="span" :to="{name: 'movieList', query: { type: cominigSoon.type }}" class="more btn btn-warning">更多</router-link>
      </h2>
      <div class="card">
        <router-link :to="{name: 'movie-detail', params:{ id: item.id } }" class="item" v-for="item in cominigSoon.subjects"
          :key="item.id">
          <div class="cover">
            <div class="wp">
              <img class="img-show" :src="item.images.medium" />
            </div>
          </div>
          <div class="info">
            <h3>{{item.title}}</h3>
          </div>
        </router-link>
      </div>
    </div>
    <spinner :show="loading"></spinner>
  </section>
</template>
<!-- .js 檔案在此相依 -->
<script>
import spinner from '@/components/Spinner'
  import {
    API_TYPE,
    fetchMoviesByType,
    fetch2
  } from "@/store/api";
  import {
    fetch, fetch3
  } from "../../store/api";

  export default {
    components: {spinner},
    data() {
      return {
        loading: true,
        inTheater: {
          type: ""
        },
        cominigSoon: {
          type: ""
        }
      };
    },
    computed: {},
    mounted() {
      console.log("API_TYPE.movie.in_theaters");
      fetchMoviesByType(API_TYPE.movie.in_theaters, "0", "9",this).then(data => {
        this.inTheater = data;
        this.inTheater.type = API_TYPE.movie.in_theaters;
        this.loading = false;
        console.log("inTheater=", this.inTheater);
      });
        console.log('$route', this.$route.path);
      fetchMoviesByType(API_TYPE.movie.coming_soon, '0', '9',this).then(data => {
        this.cominigSoon = data;
        this.cominigSoon.type = API_TYPE.movie.coming_soon;
        this.loading = false;
        console.log('comingSoon=', this.cominigSoon);
      });
    },
    updated() {},
    destroyed() {}
  };

</script>
