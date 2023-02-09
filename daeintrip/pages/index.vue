<template>
  <div>
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
</template>

<script>
import Travels from "./vues/travels";
import Tours from "./vues/tours";
import Guides from "./vues/guides";

export default {
  name: "HomePage",
  components: {
    Travels,
    Tours,
    Guides,
  },
  setup() {},
};
</script>

<style lang="scss" scoped></style>
