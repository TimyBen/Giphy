<template>
  <div>
    <div>
      <h1 class="text-4xl font-bold mb-4">Trending GIFs</h1>
      <div class="mb-4 py-12">
        <div class="flex justify-center items-center gap-24">
          <input
            v-model="searchQuery"
            placeholder="Search for GIFs..."
            class="p-2 w-96 flex justify-center items-center border rounded"
          />
          <button @click="search" class="w-60 p-2 bg-blue-500 text-white rounded">Search</button>
        </div>
      </div>
    </div>

    <!-- Search Modal -->
    <SearchModal
      v-if="searching"
      :searchResults="searchResults"
      :loading="loading"
      :hasMore="hasMore"
      @expandGif="expandGif"
      @loadMore="loadMore"
    />

    <div
      v-if="!searching"
      class="mr-6 ml-6 grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <!-- Trending GIFs Display -->
      <!-- You can keep your existing code here -->
    </div>

    <!-- Loading Indicator -->
    <div v-if="loading" class="text-center mt-4">Loading...</div>

    <!-- Gif Modal -->
    <GifModal v-if="isModalOpen" :gif="selectedGif" @close="closeModal" />
  </div>
</template>

<script>
import GifModal from "./GifModal.vue";
import SearchModal from "./SearchModal.vue"; // Import the SearchModal component

export default {
  components: {
    GifModal,
    SearchModal, // Register the SearchModal component
  },
  data() {
    return {
      gifs: [],
      visibleGifs: [],
      searchQuery: "",
      offset: 0,
      limit: 25,
      isModalOpen: false,
      selectedGif: null,
      hasMore: true,
      loading: false,
      searching: false, // Add a flag to indicate if searching is in progress
      searchResults: [], // Store search results
    };
  },

  mounted() {
    this.fetchGifs();
  },

  methods: {
    async fetchGifs() {
      // Implement the logic to fetch trending GIFs
    },

    async searchGifs() {
      // Implement the logic to search GIFs
    },

    async loadMore() {
      // Implement the logic to load more GIFs
    },

    async search() {
      this.searchGifs();
      this.searching = true; // Set searching flag to true when searching starts
    },

    expandGif(gif) {
      this.selectedGif = gif;
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },

    handleImageLoad() {
      this.loading = false; // Hide loading indicator when image is loaded
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
