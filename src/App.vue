<template>
  <div id="app" class="container mx-auto p-4">
    <TrendingGifs />
    <!-- <SearchGifs /> -->
    <!-- GifDetails will be dynamically displayed based on user interaction -->
    <GifDetails :selectedGif="selectedGif" v-if="selectedGif" />
  </div>
</template>

<script>
import TrendingGifs from "@/components/TrendingGifs.vue";
// import SearchGifs from "@/components/SearchGifs.vue";
// import GifDetails from "@/components/GifDetails.vue";

export default {
  components: {
    TrendingGifs,
    // SearchGifs,
    // GifDetails,
  },
  data() {
    return {
      selectedGif: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
