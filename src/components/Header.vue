<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const menuShow = ref(false);
    watch(menuShow, (newVal, oldVal) => {
      if (newVal === true) {
        const windowAll = document.querySelector("body");
        windowAll.className = "overflow-hidden";
      } else {
        const windowAll = document.querySelector("body");
        windowAll.className = "";
      }
    });
    return { menuShow };
  },
};
</script>

<template>
  <header class="header">
    <div class="flex items-center justify-between">
      <img
        class="headerLogo mix-blend-darken"
        src="@/assets/images/brand-logo.svg"
        alt="logo"
      />
      <ul
        :class="{ isShow: menuShow }"
        class="header__nav z-50 rounded-full bg-white shadow-sm md:flex"
      >
        <li class="flex w-full justify-center border-b p-6 md:hidden">
          <img
            class="headerLogo mix-blend-darken"
            src="@/assets/images/brand-logo.svg"
            alt="logo"
          />
        </li>
        <li class="header__nav__item fz--b2 text-dark hover:text-primary-dark">
          About
        </li>
        <li class="header__nav__item fz--b2 text-dark hover:text-primary-dark">
          How To
        </li>
        <li class="header__nav__item fz--b2 text-dark hover:text-primary-dark">
          Product
        </li>
        <li class="header__nav__line mx-2"></li>
        <li
          class="header__nav__item fz--b2 flex items-center justify-center gap-1 text-dark hover:text-primary-dark"
        >
          <span class="h-4">
            <svg
              width="13"
              height="19"
              viewBox="0 0 13 19"
              fill="none"
              class="h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75167 7.00364V4.00182C3.75167 2.34331 4.98648 1 6.50333 1C8.02363 1 9.255 2.34707 9.255 4.00182V7.00364M1 5.50273H12.0067V17.51H1V5.50273Z"
                stroke="currentColor"
                stroke-linecap="round"
              />
            </svg>
          </span>
          Shop
        </li>
      </ul>
      <button
        class="menuBtn flex flex-col items-end gap-1 rounded-full bg-primary-white p-4 shadow-sm active:bg-primary-middle md:hidden"
        type="button"
        @click="menuShow = true"
      >
        <div class="menuBtn__line h-px w-4 bg-primary active:bg-white"></div>
        <div class="menuBtn__line h-px w-4 bg-primary active:bg-white"></div>
        <div class="menuBtn__line h-px w-3 bg-primary active:bg-white"></div>
      </button>
    </div>
    <div
      :class="{ isShow: menuShow }"
      @click="menuShow = false"
      class="rwdMenuBg z-40 bg-dark/50"
    ></div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 3rem 0 3rem;
  @media (max-width: 767.98px) {
    padding: 1rem 1.5rem 0 1.5rem;
  }
  &__nav {
    align-items: center;
    padding: 0.5rem 20px;
    &__item {
      padding: 9px 20px;
      cursor: pointer;
    }
    &__line {
      height: 1.5rem;
      width: 1px;
      background-color: theme("colors.primary");
      transform: rotate(15deg);
    }
    @media (max-width: 767.98px) {
      position: fixed;
      top: 0;
      right: 0;
      border-radius: 0;
      height: 100%;
      width: 50%;
      opacity: 0;
      transition: all 0.3s;
      transform: translateX(100%);
      display: flex;
      flex-direction: column;
      &__item {
        text-align: center;
        width: 100%;
        border-bottom: 1px solid theme("colors.gray-middle");
      }
      &__line {
        display: none;
      }
      &.isShow {
        opacity: 1;
        transform: translateX(0%);
      }
    }
    @media (max-width: 629.98px) {
      width: 85%;
    }
  }
}
.rwdMenuBg {
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  width: 50%;
  cursor: pointer;
  transform: translateX(-100%);
  transition: all 0.3s;
  display: none;
  @media (max-width: 629.98px) {
    width: 15%;
    display: block;
  }
  &.isShow {
    transform: translateX(0%);
  }
}
</style>
