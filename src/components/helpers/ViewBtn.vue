<script>
export default {
  props: ["btnColor"],
  setup() {
    return {};
  },
};
</script>

<template>
  <button
    type="button"
    :class="{
      'text-white': btnColor === 'white',
      'text-gray-dark hover:text-primary-middle active:text-primary':
        btnColor === 'black',
    }"
    class="viewBtn fz--btn group gap-3 font-display md:gap-6"
  >
    <div
      :class="{
        'border-white group-hover:bg-white group-active:border-white/75 group-active:bg-white/75':
          btnColor === 'white',
        'border-black/30 group-hover:border-primary-middle group-hover:bg-primary-middle group-active:border-primary group-active:bg-primary':
          btnColor === 'black',
      }"
      class="viewBtn__circle relative h-12 w-12 rounded-full border md:h-16 md:w-16"
    >
      <span
        :class="{
          'text-white group-hover:text-primary': btnColor === 'white',
          'text-gray-dark group-hover:text-white group-active:text-white':
            btnColor === 'black',
        }"
        class="viewBtn__icon"
        ><svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 10L19 3.86364L12.8636 1" stroke="currentColor" />
        </svg>
      </span>
    </div>
    View All
  </button>
</template>

<style lang="scss" scoped>
.viewBtn {
  display: flex;
  align-items: center;
  &__circle {
    transition: all 0.3s;
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.3s;
  }
}
</style>
