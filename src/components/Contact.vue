<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div
    class="contactSection flex items-center overflow-hidden bg-primary-light/10 px-6 pt-12 pb-8 lg:pt-6"
  >
    <div class="container relative mx-auto grid grid-cols-12">
      <div class="col-span-12 flex items-center pl-9 lg:col-span-3 lg:pl-0">
        <p
          data-aos="fade-right"
          class="sectionTitle fz--h2 font-display uppercase text-primary"
        >
          <span class="mr-4">/</span>contact us
        </p>
      </div>
      <div class="col-span-12 flex items-center justify-center lg:col-span-6">
        <div
          class="mainImgBox z-10"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            class="mainImgBox__img"
            src="@/assets/images/test2-1.png"
            alt="contact-mainImg"
          />
        </div>
        <img
          class="mainBg"
          src="@/assets/images/contact-bg.svg"
          alt="contact-bg"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="2000"
        />
        <div class="contactBtnBox z-10">
          <button
            type="button"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="800"
            class="contactBtn group z-20 bg-primary-light text-white hover:bg-primary-middle active:bg-primary"
          >
            <div class="h-7 w-7 lg:h-8 lg:w-8">
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                class="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0.507142L0.507143 0H13.6929L14.2 0.507142V9.63571L13.6929 10.1428H0.507143L0 9.63571V0.507142ZM1.01429 1.55693V9.12856H13.1857V1.55794L7.41443 5.98428H6.79571L1.01429 1.55693ZM12.2019 1.01428H1.99814L7.1 4.93855L12.2019 1.01428Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="col-span-3 hidden items-center lg:flex">
        <div data-aos="fade-left" class="contactSection__line bg-primary"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contactSection {
  .mainImgBox {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &__img {
      height: 80%;
      transform: rotate(-12deg);

      transition: all 0.3s;
    }
  }
  .mainBg {
    position: absolute;
    max-height: 100%;
    top: 20%;
    animation: loading 16s linear infinite;
    @media (max-width: 767.98px) {
      max-height: none;
      height: 180%;
      top: -10%;
    }
  }
  &__line {
    width: calc(100% + 1.5rem);
    height: 1px;
  }
}
.contactBtn {
  width: 144px;
  height: 144px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767.98px) {
    width: 104px;
    height: 104px;
  }
}
.contactBtnBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
@keyframes loading {
  /*以百分比来规定改变发生的时间 也可以通过"from"和"to",等价于0% 和 100%*/
  0% {
    /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
