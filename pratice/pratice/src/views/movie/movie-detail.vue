<template>
  <div>
    <div v-if="movie.id" class="detail-card">
      <div class="title">{{movie.title}}&nbsp;{{ movie.original_title ? movie.original_title : ''}}</div>

      <img :src="movie.images.large" class="img-show">

      <div class="subject-mark">
        <div class="mark-item">
          <a>
            <span>想看({{ movie.wish_count }})</span>
          </a>
          <a>
            <span>評價({{ movie.reviews_count }})</span>
          </a>
        </div>
      </div>
      <span>{{movie.rating.average}} / {{movie.rating.max}}</span>
      <div class="star-rating">
        <div
          class="star-rating-top"
          :style="{width: (movie.rating.average / movie.rating.max)*100+'%'}"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="star-rating-bottom">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div style="text-align:left">
        <li v-for="cast in movie.casts" :key="cast.id">{{cast.name}}</li>
      </div>
      <div class="subject-intro">
        <h2 class>劇情簡介</h2>
        <span class="bd">{{ movie.summary }}</span>
      </div>
    </div>
    <spinner :show="loading"></spinner>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
import Spinner from "../../components/Spinner.vue";
import { fetchMovieById } from "@/store/api";

export default {
  components: {
    Spinner
  },
  data() {
    return {
      loading: true,
      id: "",
      movie: {}
    };
  },
  computed: {},
  mounted() {
    this.id = this.$route.params.id;
    console.log("id=", this.id);
    fetchMovieById(this.id).then(data => {
      this.movie = data;
      console.log("movie=", this.movie);
      this.loading = false;
      if (this.movie.code === 5000) {
        this.$router.push({
          name: "error",
          params: { result: this.movie.code, errMsg: this.movie.msg }
        });
      }
    });
  },
  method: {}
};
</script>

<style scoped lang="scss">
.detail-card {
  background: #fff;
  border-radius: 10px;
  padding: 10px 15px;
  -webkit-text-size-adjust: 100%;

  .title {
    font-size: 16px;
    line-height: 32px;
    word-break: break-all;
  }

  section {
    margin-bottom: 30px;

    p {
      font-size: 15px;
      color: #494949;
      line-height: 1.5;
      text-align: justify;
    }
  }

  .subject-info {
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    line-height: 1.5;
  }

  .subject-mark {
    .mark-item {
      margin-bottom: 30px;
      display: -webkit-box;
      display: -moz-box;
      display: box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -moz-box-align: center;
      box-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      -ms-align-items: center;
      -o-align-items: center;
      align-items: center;
      -ms-flex-align: center;

      a {
        height: 30px;
        line-height: 30px;
        display: block;
        border: 1px solid #ffb712;
        border-radius: 3px;
        margin-right: 10px;
        color: #ffb712;
        font-size: 15px;
        text-align: center;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
    }
  }

  .subject-intro {
    h2 {
      color: #aaa;
      margin: 0 0 15px;
      font-size: 15px;
    }
  }
}
</style>

<style>
.star-rating {
  unicode-bidi: bidi-override;
  color: #ddd;
  font-size: 0;
  height: 25px;
  margin: 0 auto;
  position: relative;
  display: table;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
}

.star-rating span {
  padding: 5px;
  font-size: 20px;
}

.star-rating span:after {
  content: "★";
}

.star-rating-top {
  color: #ffd700;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
}

.star-rating-bottom {
  padding: 0;
  display: block;
  z-index: 0;
}
</style>
