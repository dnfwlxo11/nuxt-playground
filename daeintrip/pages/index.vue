<template>
  <div class="homepage">
    <header class="header">
      <Nav />
      <Menus />
    </header>
    <div class="section-container">
      <section>
        <Travels />
      </section>
      <section>
        <Tours />
      </section>
      <section>
        <Guides />
      </section>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/navbar.vue";
import Menus from "./menus";
import Travels from "./travels";
import Tours from "./tours";
import Guides from "./guides";
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

<style lang="scss" scoped>
.header {
  border-bottom: 0.5px solid #e0e1e3;
}

.section-container {
  max-width: 1080px;
  margin: 40px auto;
}
</style>
