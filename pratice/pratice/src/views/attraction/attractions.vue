<template>
  <section>
    <spinner :show="loading"></spinner>
    <div class="grid has-search-bar">
      <div v-if="attractions">
        <div class="card" v-for="place in attractions.Infos.Info" :key="place.Id">
           <div class="cover">
            <div class="wp">
              <img class="img-show" :src="place.Picture" />
            </div>
          </div>
          <div class="info">{{place.Name}}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- .js 檔案在此相依 -->
<script>
import spinner from "@/components/Spinner";
import { attraction } from "@/store/api";

export default {
  components: {
    spinner
  },
  data() {
    return {
      loading: true,
      attractions: { Infos: {} }
    };
  },

  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let res = await attraction();
      this.attractions = res.data.XML_Head;
      this.loading = false;
    }
  }
};
</script>
