<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modulesA = ref([Autoplay, FreeMode]);
    return { modulesA };
  },
};
</script>

<template>
  <div class="marqueeRow border-b py-2">
    <Swiper
      class="swiper-no-swiping"
      slidesPerView="auto"
      :loop="true"
      :freeMode="{
        momentum: false,
        momentumBounce: false,
      }"
      :modules="modulesA"
      :centeredSlides="true"
      :speed="8000"
      :autoplay="{
        delay: 1,
        disableOnInteraction: false,
      }"
    >
      <Swiper-slide style="width: auto">
        <div
          class="marqueeRow__item fz--d2 w-auto px-8 font-display text-primary-middle"
        >
          Organic
        </div>
      </Swiper-slide>
      <Swiper-slide style="width: auto">
        <div
          class="marqueeRow__item fz--d2 w-auto px-8 font-display text-primary-middle"
        >
          Fragrance Free
        </div>
      </Swiper-slide>
      <Swiper-slide style="width: auto">
        <div
          class="marqueeRow__item fz--d2 w-auto px-8 font-display text-primary-middle"
        >
          Pure
        </div>
      </Swiper-slide>
    </Swiper>
  </div>
</template>

<style lang="scss">
.swiper-slide {
  width: auto !important;
  // margin-right: 12px !important;
}
.swiper-free-mode > .swiper-wrapper {
  transition-timing-function: linear;
  margin: 0 auto;
}
</style>
