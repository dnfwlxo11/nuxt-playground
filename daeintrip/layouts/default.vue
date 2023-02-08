<template>
  <div>
    <header class="header">
      <Navbar />
      <Menus />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Menus from '@/components/menus.vue'
import Footer from '@/components/footer.vue';

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
  border-bottom: 0.5px solid #e0e1e3;
}
</style>
