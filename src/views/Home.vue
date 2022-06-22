<script>
import { ref, onMounted } from "vue";

import Header from "@/components/Header.vue";
import HeaderTop from "@/components/HeaderTop.vue";
import Marquee from "@/components/Marquee.vue";
import Collection from "@/components/Collection.vue";
import Service from "@/components/Service.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/helpers/Loader.vue";

export default {
  components: {
    Header,
    HeaderTop,
    Marquee,
    Collection,
    Service,
    Contact,
    Footer,
    Loader,
  },
  setup() {
    const ready = ref(false);
    onMounted(async () => {
      setTimeout(() => {
        ready.value = true;
      }, 3800);
    });
    return { ready };
  },
};
</script>

<template>
  <Loader class="zindex-fixed" v-if="!ready" />
  <div v-if="ready" class="overflow-hidden bg-gray-light">
    <Header class="z-50"></Header>
    <HeaderTop class="w-full"></HeaderTop>
    <Collection></Collection>
    <Service></Service>
    <Marquee></Marquee>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped></style>
