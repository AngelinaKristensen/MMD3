<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Props or mock data for Images
const Images = ref([
  new URL('@/assets/billeder/BrygMesterMobile.png', import.meta.url).href,
  new URL('@/assets/billeder/BryggetankeMobile.png', import.meta.url).href,
  new URL('@/assets/billeder/brygMobile.png', import.meta.url).href,
  new URL('@/assets/billeder/anotherImage.png', import.meta.url).href,
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


</script>

<template>
  <div class="carousel">
    <div
      class="carousel-wrapper"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in Images"
        :key="index"
        class="carousel-image"
      >
        <img :src="image" alt="Carousel Image" />
      </div>
    </div>
    <button @click="prevImage" class="carousel-control prev">‹</button>
    <button @click="nextImage" class="carousel-control next">›</button>
  </div>
</template>

<style scoped>

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center; /* Centers the images between the buttons */
}

.carousel-wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%; /* Default: 1 image visible (mobile) */
  transition: transform 0.3s ease-in-out;
  width: 90%; /* Leave space for buttons on the sides */
}

.carousel-image {
  height: 100%;
  display: flex; /* Ensures the images are centered */
  justify-content: center;
  align-items: center;
}

.carousel-image img {
  max-width: 100%;
  height: auto;
  object-fit: contain; /* Ensures images fit nicely within the container */
}

/*---------------- CAROUSEL CONTROLS START----------- */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--CTA);
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  z-index: 10; /* Ensure controls stay above the images */
}

.carousel-control.prev {
  left: 0; /* Ensure the button is aligned to the left edge */
}

.carousel-control.next {
  right: 0; /* Ensure the button is aligned to the right edge */
}

/*---------------- CAROUSEL CONTROLS END----------- */

/* Media query for desktop: Show 3 images */
@media (min-width: 1000px) {
  .carousel-wrapper {
    grid-auto-columns: 33.333%; /* Display 3 images */
    gap: 0.5rem; /* Add spacing between images */
  }
}
</style>