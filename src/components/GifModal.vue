<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <div  class="modal-header flex flex-col gap-4">
        <h2 class="font-bold text-xl">Details</h2>
        <img
          :src="gif.images.fixed_height.url"
          :alt="gif.title"
          class="cursor-pointer rounded-md "
        />
        <p>Username: {{ gif.username }}</p>
        <p>Rating: {{ gif.rating }}</p>
        <!-- Add more details as needed -->
      </div>
      <button class="close-button" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gif: Object, // Pass the gif object as a prop
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Add your modal styles here */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.close-button {
  cursor: pointer;
  background: #ccc;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}
</style>
