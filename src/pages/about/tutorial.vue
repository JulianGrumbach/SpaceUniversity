<template>
  <div
    class="hero"
    tabindex="0"
    @keyup.enter="nextSlide"
    @keyup.space="lastSlide"
    @keyup.right="nextSlide"
    @keyup.left="previousSlide"
  >
    <v-carousel
      v-model="slide"
      hide-delimiter-background
    >
      <v-carousel-item>
        <h2 class="text-h4">
          {{ t('$vuetify.aboutTutorial.welcome') }}
        </h2>
        {{ t('$vuetify.aboutTutorial.slide1.title') }}
        <p>{{ t('$vuetify.aboutTutorial.slide1.description') }}</p>
        <img
          src="@/assets/introduction/example.png"
          alt="Example Image"
          style="display: block; margin-left: auto; margin-right: auto;"
        >
      </v-carousel-item>
      <v-carousel-item>
        <h2 class="text-h4">
          {{ t('$vuetify.aboutTutorial.slide2.title') }}
        </h2><br>
        <p>
          {{ t('$vuetify.aboutTutorial.slide2.description1') }}<br>
          {{ t('$vuetify.aboutTutorial.slide2.description2') }}
        </p>
        <img
          src="@/assets/introduction/Navbar02.png"
          alt="Navbar Image 02"
          class="navbar-image02"
        >
      </v-carousel-item>
      <v-carousel-item>
        <h2 class="text-h4">
          {{ t('$vuetify.aboutTutorial.slide3.title') }}
        </h2>
        <p>{{ t('$vuetify.aboutTutorial.slide3.description') }}</p>
      </v-carousel-item>
      <v-carousel-item>
        <h2 class="text-h4">
          {{ t('$vuetify.aboutTutorial.slide4.title') }}
        </h2>
        <p>{{ t('$vuetify.aboutTutorial.slide4.description') }}</p>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
  import { useLocale } from 'vuetify';
  const { t } = useLocale();
  const slide = ref(0);
  function nextSlide() {
    slide.value = (slide.value + 1) % 4;
  }

  function previousSlide() {
    slide.value = (slide.value - 1) % 4;
  }

  function lastSlide() {
    slide.value = 3;
  }
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 20px;
  outline: none;
}

.carousel {
  width: 80%;
  margin: 0 auto;
}

.slide {
  padding: 20px;
}


.navbar-image02 {
  width: 16%; /* Adjust the percentage as needed */
  height: auto;
  vertical-align: top; /* Align images to the top */
  position: static;
  right: 1000;
  margin-right: 1200px; /* Leave a margin of 50px */
}
</style>
