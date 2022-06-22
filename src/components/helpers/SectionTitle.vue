<script>
export default {
  props: ["textColor"],
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="relative">
    <p
      :class="{ ' text-white': textColor === 'white' }"
      class="sectionTitle fz--h3 font-display uppercase"
    >
      <span class="mb-4">/</span>Concept
    </p>
  </div>
</template>

<style lang="scss" scoped>
.sectionTitle {
  writing-mode: vertical-lr;
  text-orientation: mixed;
}
</style>
