<template>
  <div>
    <NuxtLayout :name="home">
      <template #header>
        <Nav />
        <Menus />
      </template>
      <template #content>
        <section>
          <Travels />
        </section>
        <section>
          <Tours />
        </section>
        <section>
          <Guides />
        </section>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
import Nav from "@/components/navbar.vue";
import Menus from "@/components/menus.vue";
import Travels from "./vues/travels";
import Tours from "./vues/tours";
import Guides from "./vues/guides";
import Footer from "@/components/footer.vue";

export default {
  name: "HomePage",
  components: {
    Nav,
    Menus,
    Travels,
    Tours,
    Guides,
    Footer,
  },
  setup() {},
};
</script>

<style lang="scss" scoped></style>
