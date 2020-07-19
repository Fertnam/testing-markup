<template>
  <div class="slider">
    <div class="container">
      <swiper
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide
          class="swiper__slide"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img
            class="swiper__slide-item"
            :src="'/slides/' + slide"
            alt="Слайд"
          >
        </swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-black"
          slot="pagination"
        ></div>
        <div
          class="swiper__button swiper-button-prev"
          slot="button-prev"
        ></div>
        <div
          class="swiper__button swiper-button-next"
          slot="button-next"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import slides from '@/store/static/slides';

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        slides,
        swiperOption: {
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          loop: true,
          autoplay: {
            disableOnInteraction: false,
            delay: 4000
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      };
    }
  };
</script>

<style>
  @import "~swiper/swiper-bundle.min.css";

  .slider {
    background-color: #f8f8f8;
  }

  .slider .container {
    padding-top: 0;
    padding-bottom: 0;
  }

  .swiper__slide-item {
    max-height: 300px;
    max-width: 100%;
  }

  .swiper__button:after {
    background-color: #d2d2d2;
    color: #000;
    font-size: 2em;
    padding: 10px;
  }

  .swiper-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
</style>
