<template>
  <div class="grid has-search-bar" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">search-List
    <div>
      <h2>{{movieList.title}}</h2>
      <div class="card" v-if="movieList.subjects.length > 0">
        <router-link :to="{name: 'movieDetail', params:{ id: item.id } }" class="item" v-for="item in movieList.subjects"
          :key="item.id">
          <div class="cover">
            <div class="wp">
              <img class="img-show" :src="item.images.medium">
            </div>
          </div>
          <div class="info">
            <h3>{{item.title}}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
  import {
    fetchSearchMovies
  } from "@/store/api";

  export default {
    components: {},
    directives: {},
    data() {
      return {
        query: "",
        movieList: {
          subjects: []
        },
        busy: false
      };
    },
    computed: {},
    mounted() {
      this.query = this.$route.query.mName;
      console.log("this.$route.query.mName:", this.$route.query.mName);
    },
    methods: {
      async loadMore() {
        let start = 0;
        if (this.movieList.subjects != null) {
          start = this.movieList.subjects.length;
          console.log('start', start);
        }
        console.log("start", start);
        this.movieList = await fetchSearchMovies(this.query, start);
        console.log("this.movieList:", this.movieList);
      }
    }
  };

</script>
