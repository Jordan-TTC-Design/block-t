<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="serviceSection mx-auto">
    <div class="container mx-auto px-6">
      <p
        data-aos="fade-right"
        class="sectionTitle fz--h3 mb-6 font-display uppercase text-gray-dark md:mb-14"
      >
        <span class="mr-4">/</span>Service
      </p>
    </div>
    <div
      class="serviceRow flex overflow-x-auto"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="500"
    >
      <div
        class="serviceItem flex w-5/6 flex-shrink-0 flex-col border-t border-b border-r md:w-1/2"
      >
        <div class="serviceItem__imgBox mb-5">
          <img
            class="serviceItem__img"
            src="@/assets/images/Frame-310.svg"
            alt="earth"
          />
        </div>
        <div>
          <h4 class="fz--h4 mb-4">
            Multinational<br />
            service base
          </h4>
          <p class="fz--b1">
            Do et reprehenderit exercit reprehendetation excepteur aliqua duis
            culpa.
          </p>
        </div>
      </div>
      <div
        class="serviceItem flex w-5/6 flex-shrink-0 flex-col-reverse border-t border-b md:w-1/2"
      >
        <div class="serviceItem__imgBox mb-5">
          <img
            class="serviceItem__img"
            src="@/assets/images/Frame-318.svg"
            alt="earth"
          />
        </div>
        <div>
          <h4 class="fz--h4 mb-4">
            Multinational<br />
            service base
          </h4>
          <p class="fz--b1">
            Do et reprehenderit exercit reprehendetation excepteur aliqua duis
            culpa.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.serviceItem {
  padding: 40px;
  &__img {
    width: 11rem;
    height: 11rem;
  }
  &__imgBox {
    padding: 40px 52px;
  }
}
// 改變滾輪
.serviceRow::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}
.serviceRow::-webkit-scrollbar {
  width: 4px;
  background-color: rgba(0, 0, 0, 0);
}
.serviceRow::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
}
</style>
