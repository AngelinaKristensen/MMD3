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
  width: 100%; /* Sætter bredde på carousel */
  height: 250px; /* Sætter højden på carousel */
  display: flex;
  align-items: center;
  justify-content: center; /* gør sådan at billeder er centeret mellem knapperne */
  margin-bottom: 20px; 
}

.carousel-wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%; /* */
  transition: transform 0.3s ease-in-out;
  width: 90%; /* 90% for at der er plads til knapperne i siden */
  
}

.carousel-image {
  height: 100%;
  display: flex; 
  justify-content: center; /* sikre at billederne er centered */
}

.carousel-image img {
  max-width: 100%;
  height: auto;
  object-fit: contain; /* Sørger for at billederne bliver contained i deres parent object. */
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
    gap: 0.5rem; /* tilføj spacing between images */
  }
}
</style>