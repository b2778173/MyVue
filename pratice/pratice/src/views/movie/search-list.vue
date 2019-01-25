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
    <spinner :show="loading" style="margin-top:25%"></spinner>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
  import { fetchSearchMovies } from "@/store/api"
  import spinner from '@/components/Spinner'

  export default {
    components: { spinner },
    directives: {},
    data() {
      return {
        query: "",
        movieList: {
          subjects: []
        },
        busy: false,
        loading:true,
      
      };
    },
    computed: {},
    mounted() {
      this.query = this.$route.query.mName;
      console.log("this.$route.query.mName:", this.$route.query.mName);
    },
    methods: {
      
      async loadMore() {
        let start = this.movieList.subjects.length;
        console.log('start', start);
        this.loading = true;
        
         
         
        
        console.log("start", this.start);
        let data = await fetchSearchMovies(this.query, start);
        console.log('data:', data);
        this.movieList.title = data.title;
        this.movieList.total = data.total;
        this.movieList.subjects = this.movieList.subjects.concat(data.subjects);

        console.log("this.movieList:", this.movieList);
        this.loading = false;
      }
    }
  };

</script>
