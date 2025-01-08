<script setup>
    import { onMounted } from "vue";

    let backToTopBTN;

    onMounted(() => {
    backToTopBTN = document.querySelector(".backToTopBTN");

    window.onscroll = function () {
        scrollFunction();
    };
    });

    function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopBTN.style.display = "block";
    } else {
        backToTopBTN.style.display = "none";
     }
    }

    function topFunction() {
    window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
}
</script>

<template>
    <button @click="topFunction" class="backToTopBTN" title="Go to top">
      <img src="@/assets/icons/BackToTopImg.png" alt="Go to top" class="backToTopIcon" />
    </button>
</template>

<style scoped>
.backToTopBTN {
  position: fixed;
  bottom: 1rem;
  right: 30px;
  z-index: 99;
  background-color: var(--CTA);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: .5rem .5rem;
  animation: fade-in 0.3s ease-in-out, pulse 1.5s infinite;
}

.backToTopIcon {
  width: 1.5rem;
  height: auto;
}

.backToTopBTN:hover {
  background-color: var(--primary);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}


@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}



</style>