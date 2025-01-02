<template>
  <Carousel id="banner-container" v-bind="config">
    <Slide v-for="(src, index) in urls" :key="index">
      <div class="carousel__item">
        <img id="banner" :src="src" alt="배너이미지">
      </div>
    </Slide>

    <template #addons="{ slideSize,currentSlide,slidesCount }">
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { ref } from 'vue';

const urls = ref(['/src/assets/images/Banner.svg',
  '/src/assets/images/Banner.svg',
  '/src/assets/images/Banner.svg']);

const config = {
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>

<style scoped>
#banner-container {
  width: 100%;
  box-sizing: border-box;
}

#banner {
  width: 85%;
  height: auto;
  max-width: 2000px;
  max-height: 2000px;
}

img {
  width: 80%;
  min-width: 30%;

}

.carousel__item {
  margin-top: 20px;
  min-height: 200px;
  width: 100%;
  background-color: var(#535bf2);
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>