<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="footer container mx-auto grid grid-cols-12">
    <div class="col-span-12 flex items-end pb-6 lg:col-span-3 lg:pb-3">
      <img
        data-aos="fade-up"
        data-aos-duration="500"
        class="footer__logo"
        src="@/assets/images/brand-logo.svg"
        alt="logo"
      />
    </div>
    <div class="col-span-12 flex items-end pb-16 md:col-span-6 md:pb-0">
      <ul
        class="footerNav flex gap-1"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="500"
      >
        <li class="footerNav__item">Privacy Policy</li>
        <li class="footerNav__item">Brand Site</li>
      </ul>
    </div>
    <div
      class="col-span-12 flex items-end md:col-span-6 md:justify-end md:pb-2 lg:col-span-3"
    >
      <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
        © original COSME JAPAN CO.,LTD
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 120px 24px;
  @media (max-width: 767.98px) {
    padding: 64px 24px;
  }
}
.footerNav__item {
  position: relative;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  &:hover {
    color: theme("colors.primary");
  }
  &:active {
    color: theme("colors.primary");
  }
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    height: 1rem;
    width: 1px;
    background-color: theme("colors.gray-dark");
    opacity: 0.3;
    transform: rotate(15deg) translateY(-50%);
  }
}
</style>
