<template>
  <div>
    <header class="header">
      <Navbar />
      <Menus />
    </header>
    <main class="container">
      <slot />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Menus from "@/components/menus.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Navbar,
    Menus,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 0.5px solid #e0e1e3;
  background: white;
}

.container {
  min-height: auto;
  max-width: 1080px;
  padding-top: 120px;
  margin: 20px auto;
}

.footer {
  border-top: 0.5px solid #e0e1e3;
}
</style>
