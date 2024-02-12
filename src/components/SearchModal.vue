<template>
  <div v-if="searchResults.length > 0">
    <div v-for="gif in searchResults" :key="gif.id" @click="expandGif(gif)">
      <img :src="gif.images.fixed_height.url" :alt="gif.title" class="cursor-pointer rounded-lg">
    </div>
    <button v-if="hasMore" @click="loadMore" :disabled="loading">
      Load More
    </button>
  </div>
  <div v-else>
    <p>No search results found.</p>
  </div>
</template>

<script>
export default {
  props: {
    searchResults: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    hasMore: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    expandGif(gif) {
      // Emit an event to parent component to handle modal closing or further actions
      this.$emit("expandGif", gif);
    },
    loadMore() {
      // Emit an event to parent component to handle load more functionality
      this.$emit("loadMore");
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
