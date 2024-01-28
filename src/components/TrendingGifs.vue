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
          <button
            @click="search"
            class="w-60 p-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div
      class="mr-6 ml-6 grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="gif in visibleGifs"
        :key="gif.id"
        class="flex justify-center items-center"
      >
        <div
          @click="expandGif(gif)"
          class="flex justify-center w-fit items-center"
          @load="handleImageLoad"
        >
          <img
            :src="gif.images.fixed_height.url"
            :alt="gif.title"
            class="cursor-pointer rounded-lg"
          />
        </div>
      </div>
    </div>

    <button
      v-if="hasMore"
      @click="loadMore"
      class="mt-4 p-2 bg-blue-500 text-white rounded"
    >
      Load More GIFs
    </button>

    <!-- Loading Indicator -->
    <div v-if="loading" class="text-center mt-4">Loading...</div>

    <!-- Gif Modal -->
    <GifModal v-if="isModalOpen" :gif="selectedGif" @close="closeModal" />
  </div>
</template>

<script>
import GifModal from "./GifModal.vue";

export default {
  components: {
    GifModal,
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
    };
  },

  mounted() {
    this.fetchGifs();
  },
  methods: {
    async fetchGifs() {
      try {
        this.loading = true;
        this.offset = 0; // Reset offset when searching
        const response = await this.$axios.get("/gifs/trending", {
          params: {
            q: this.searchQuery,
            offset: this.offset,
            limit: this.limit,
          },
        });
        this.gifs = response.data.data;
        this.hasMore = response.data.pagination.total_count > this.limit;
        this.visibleGifs = this.gifs;
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      } finally {
        this.loading = false;
      }
    },
    async loadMore() {
      try {
        this.loading = true;
        this.offset += this.limit;
        const response = await this.$axios.get("/gifs/trending", {
          params: {
            q: this.searchQuery,
            offset: this.offset,
            limit: this.limit,
          },
        });
        const newGifs = response.data.data;
        this.gifs = [...this.gifs, ...newGifs];
        this.visibleGifs = newGifs;
        this.hasMore =
          response.data.pagination.total_count > this.offset + this.limit;
      } catch (error) {
        console.error("Error loading more GIFs:", error);
      } finally {
        this.loading = false;
      }
    },
    async search() {
      // Trigger search when the button is clicked
      this.fetchGifs();
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
