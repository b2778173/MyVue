<template>
  <div>
      Movie Details
      <spinner :show="loading"></spinner>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
 import Spinner  from '../../components/Spinner.vue'

export default {
  components: {Spinner},
  data() {
    return {
        loading: true,
        id:'',
        movie:{}
    };
  },
  computed: {},
  mounted() {
      this.id = this.$route.params.id;
      console.log('id=', this.id);
  }
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