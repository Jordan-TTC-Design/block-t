<script>
import WordSwiper from "@/components/helpers/WordSwiper.vue";
import WordSwiperTwo from "@/components/helpers/WordSwiperTwo.vue";

export default {
  components: {
    WordSwiper,
    WordSwiperTwo,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="marqueeSection relative">
    <div class="sectionTitle container mx-auto px-6">
      <p
        data-aos="fade-right"
        class="fz--h3 hidden font-display uppercase text-gray-dark lg:block"
      >
        <span class="mr-4">/</span>marquee
      </p>
    </div>
    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
      <WordSwiper></WordSwiper>
      <WordSwiperTwo></WordSwiperTwo>
    </div>
  </div>
</template>

<style lang="scss">
.marqueeSection {
  padding: 200px 0;
  .marqueeRow {
    display: flex;
    flex: nowrap;
    &__item {
      white-space: nowrap;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 70%;
        width: 1px;
        background-color: theme("colors.primary-middle");
        right: 0.75rem;
        top: 50%;
        transform: rotate(15deg) translateY(-50%);
      }
    }
  }
  .sectionTitle {
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
