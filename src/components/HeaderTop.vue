<script>
import ViewBtn from "@/components/helpers/ViewBtn.vue";
import { ref } from "vue";
export default {
  components: {
    ViewBtn,
  },
  setup() {
    const imgTotal = ref(3);
    const active = ref(0);
    const animationDuration = 16;
    const perActive = ref(0);
    setInterval(() => {
      perActive.value = active.value;
      active.value = (active.value + 1 + imgTotal.value) % imgTotal.value;
      console.log(active.value);
    }, (animationDuration / 2) * 1000);
    return { active, perActive };
  },
};
</script>

<template>
  <div
    class="headerTop relative flex flex-col bg-primary-light pb-10 md:flex-row md:items-end md:px-10 md:pb-24"
  >
    <div class="headerRightImg">
      <img
        class="w-full"
        src="@/assets/images/white-cotton-buds-on-white-surface.jpg"
        alt="主產品"
        data-aos="fade-down-left"
        data-aos-delay="600"
        data-aos-duration="500"
      />
    </div>
    <div
      class="headerTopImg z-10 bg-primary-light"
      data-aos="fade-up-right"
      data-aos-delay="400"
      data-aos-duration="500"
    >
      <img
        :class="{ active: active === 0 || perActive === 0 }"
        class="headerTopImg__img w-full"
        src="https://i.imgur.com/5zU6dNa.jpg"
        alt="主視覺"
      />
      <img
        :class="{ active: active === 1 || perActive === 1 }"
        class="headerTopImg__img w-full"
        src="https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        alt="主視覺"
      />
      <img
        :class="{ active: active === 2 || perActive === 2 }"
        class="headerTopImg__img w-full"
        src="https://images.unsplash.com/photo-1609357912334-e96886c0212b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        alt="主視覺"
      />
      <h3 class="fz--d1 hidden text-primary-light mix-blend-overlay lg:block">
        Pure,<br />Organic,<br />Natural.
      </h3>
    </div>
    <div
      class="container z-20 mx-auto grid grid-cols-12 px-6 md:col-start-4 md:pt-0"
    >
      <div
        class="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-7"
      >
        <div class="headerTop__txtBox grid grid-cols-6 gap-y-20 md:pt-24">
          <div
            class="headerTop__txtBox__up col-span-6 grid grid-cols-6"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <div class="col-span-1">
              <p class="sectionTitle fz--h3 font-display uppercase text-white">
                <span class="mb-4">/</span>Concept
              </p>
            </div>
            <div
              class="md:justify-star col-span-5 col-start-2 flex justify-center"
            >
              <h2 class="fz--h1 text-white">
                Natural<br />
                Skin<br />
                Products
              </h2>
            </div>
          </div>
          <div
            class="col-span-6 pt-6 md:col-span-3 md:col-start-4"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <p class="fz--b1 mb-8 text-white md:mb-12">
              Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam
              amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident
              nisi nostrud dolore. Et labore minim laboris esse amet eu eu
              exercitation ea esse velit tempor culpa.
            </p>
            <ViewBtn btn-color="white"></ViewBtn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headerTop {
  min-height: 120vh;
  margin-bottom: 20rem;
  @media (max-width: 767.98px) {
    padding-top: 120px;
    min-height: auto;
    margin-bottom: 120px;
    &__txtBox__up {
      position: absolute;
      width: calc(100% - 3rem);
      top: 30%;
      left: 1.5rem;
    }
  }
}
.headerTopImg {
  position: absolute;
  top: 178px;
  left: 0;
  height: 120vh;
  width: calc(50% - 1.5rem);
  .headerTopImg__img {
    object-fit: cover;
    object-position: center top;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .headerTopImg__img.active {
    animation: header-top-img 8s linear;
  }

  .fz--d1 {
    position: absolute;
    left: 72px;
    bottom: 2rem;
  }
  @media (max-width: 1023.98px) {
    width: calc(75% - 1.5rem);
  }
  @media (max-width: 767.98px) {
    position: relative;
    top: 0px;
    width: 85%;
    height: 60vh;
  }
  @media (max-width: 629.98px) {
    height: 80vh;
  }
}
.headerRightImg {
  width: 400px;
  height: 246px;
  position: absolute;
  top: 0px;
  right: 0;
  img {
    object-fit: cover;
    object-position: center bottom;
    height: 100%;
  }
  @media (max-width: 767.98px) {
    width: 10rem;
    height: 10rem;
  }
}
.sectionTitle {
  writing-mode: vertical-lr;
  text-orientation: mixed;
}
@keyframes header-top-img {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
