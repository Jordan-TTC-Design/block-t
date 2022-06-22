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
    <img
      class="marquee__ring--1"
      src="https://i.imgur.com/4NZ4vxf.png"
      alt="ring1"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="300"
    />
    <img
      class="marquee__ring--2"
      src="https://i.imgur.com/0Dhzqb7.png"
      alt="ring2"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="500"
    />
    <img
      class="marquee__ring--3"
      src="https://i.imgur.com/peuq5Xh.png"
      alt="ring3"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="400"
    />
    <img
      class="marquee__ring--4 hidden lg:block"
      src="https://i.imgur.com/29kIOL3.png"
      alt="ring4"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800"
    />
    <img
      class="marquee__ring--5"
      src="https://i.imgur.com/WbTRDVm.png"
      alt="ring4"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="800"
    />
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
.marquee__ring--1 {
  position: absolute;
  width: 140px;
  top: 18%;
  left: 44px;
  @media (max-width: 767.98px) {
    width: 100px;
    top: 24%;
    left: -30px;
  }
  @media (max-width: 629.98px) {
    width: 90px;
  }
}
.marquee__ring--2 {
  position: absolute;
  width: 250px;
  bottom: 10%;
  left: 24%;
  z-index: 100;
  @media (max-width: 767.98px) {
    width: 180px;
    bottom: 15%;
  }
  @media (max-width: 629.98px) {
    width: 120px;
    bottom: 25%;
  }
}
.marquee__ring--3 {
  position: absolute;
  width: 126px;
  bottom: 42%;
  right: 30%;
  z-index: 100;
  @media (max-width: 767.98px) {
    width: 100px;
  }
  @media (max-width: 629.98px) {
    bottom: 45%;
    width: 70px;
  }
}
.marquee__ring--4 {
  position: absolute;
  width: 110px;
  bottom: 16%;
  right: 8%;
  z-index: 100;
}
.marquee__ring--5 {
  position: absolute;
  width: 90px;
  top: 19%;
  right: 2%;
  z-index: 100;
  @media (max-width: 767.98px) {
    top: 24%;
  }
}
</style>
