<template>
  <div>
    <header name="header" class="header"></header>
    <main>
      <slot name="content" class="content" />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Default-layout",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 0.5px solid #e0e1e3;
}

.container {
  max-width: 1080px;
  margin: 40px auto;
}
</style>
