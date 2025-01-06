<script setup>
import { ref } from 'vue';

// Props or mock data for Images
const Images = ref([
  new URL('@/assets/billeder/BrygMester.png', import.meta.url).href,
  new URL('@/assets/billeder/Bryggetanke.png', import.meta.url).href,
  new URL('@/assets/billeder/bryg.png', import.meta.url).href,
]);

// State for the current active Image
const currentIndex = ref(0);

// Function to go to the next Image
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % Images.value.length;
};

// Function to go to the previous Image
const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + Images.value.length) % Images.value.length;
};

const goToImage = (index) => {
  currentIndex.value = index;
};


</script>

<template>
    <div class="carousel">
      <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div
          v-for="(image, index) in Images"
          :key="index"
          class="carousel-image"
        >
          <img :src="image " alt="Carousel Image" />
        </div>
      </div>
  
      <!-- Navigation Buttons -->
      <button @click="prevImage" class="carousel-control prev">‹</button>
      <button @click="nextImage" class="carousel-control next">›</button>
  
    </div>
  </template>

<style scoped>

</style>