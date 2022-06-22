<script>
import ViewBtn from "@/components/helpers/ViewBtn.vue";

export default {
  components: {
    ViewBtn,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div
    class="collectionSection container relative mx-auto grid grid-cols-12 gap-2 px-6 md:gap-5 md:px-10"
  >
    <div class="col-span-12 mb-4 lg:mb-0">
      <p
        data-aos="fade-right"
        class="sectionTitle fz--h3 static left-6 font-display uppercase text-gray-dark lg:absolute lg:left-10"
      >
        <span class="mr-4">/</span>Collection
      </p>
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <div
        class="collectItem collectItem--1 md:h-full lg:h-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          class="collectItem__img"
          src="@/assets/images/brown-box-on-white-table.jpg"
          alt="collectionImg-1"
        />
        <button
          type="button"
          class="collectItem__btn fz--btn rounded-full text-gray-dark hover:text-white"
        >
          face balm
        </button>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-5">
      <div
        class="collectItem collectItem--2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          class="collectItem__img w-full"
          src="@/assets/images/white-and-black-usb-flash-drive.jpg"
          alt="collectionImg-2"
        />
        <button
          type="button"
          class="collectItem__btn fz--btn rounded-full text-gray-dark hover:text-white"
        >
          Hand Cream
        </button>
      </div>
    </div>
    <div
      class="col-span-12 flex flex-col gap-y-2 md:flex-row md:gap-5 lg:col-span-4 lg:flex-col lg:gap-y-5"
    >
      <div
        class="collectItem collectItem--3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          class="collectItem__img w-full"
          src="@/assets/images/yellow-and-black-tube-bottle.jpg"
          alt="collectionImg-3"
        />
        <button
          type="button"
          class="collectItem__btn fz--btn rounded-full text-gray-dark hover:text-white"
        >
          face balm
        </button>
      </div>
      <div class="grid grid-cols-4">
        <div
          class="col-span-4 lg:col-span-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="collectItem collectItem--4 h-full lg:h-auto">
            <img
              class="collectItem__img w-full"
              src="@/assets/images/white-calvin-klein-soft-tube.jpg"
              alt="collectionImg-4"
            />
            <button
              type="button"
              class="collectItem__btn fz--btn rounded-full text-gray-dark hover:text-white"
            >
              Hand Cream
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 flex justify-end pt-8 lg:pt-0" data-aos="fade-left">
      <ViewBtn btn-color="black"></ViewBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collectionSection {
  margin-bottom: 160px;
  @media (max-width: 767.98px) {
    margin-bottom: 120px;
  }
}
.collectItem {
  overflow: hidden;
  position: relative;
  &__img {
    object-fit: cover;
    object-position: center bottom;
    height: 100%;
    width: 100%;
    transform: scale(1);
    transition: all 0.3s;
  }
  &:hover {
    .collectItem__img {
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }
  &__btn {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2.5rem;
    white-space: nowrap;
    background-color: theme("colors.primary-white");
    box-shadow: 0px 4px 32px -8px rgba(172, 172, 172, 0.2);
    &:hover {
      background-color: theme("colors.primary-middle");
    }
    &:active {
      background-color: theme("colors.primary");
    }
  }
  &--1 {
    margin-top: 278px;
  }
  &--2 {
    margin-top: 118px;
  }
  &--3 {
    max-height: 296px;
  }
  @media (max-width: 1023.98px) {
    &--1 {
      margin-top: 0px;
    }
    &--2 {
      margin-top: 0px;
    }
    &--3 {
      max-height: none;
    }
  }
  @media (max-width: 767.98px) {
    &--1 {
      height: 75vh;
    }
    &--2 {
      height: 75vh;
    }
    &--3 {
      height: 75vh;
    }
    &--4 {
      height: 75vh;
    }
  }
  @media (max-width: 639.98px) {
    &--1 {
      height: 55vh;
    }
    &--2 {
      height: 55vh;
    }
    &--3 {
      height: 55vh;
    }
    &--4 {
      height: 55vh;
    }
  }
}
.sectionTitle {
  top: 120px;
}
</style>
