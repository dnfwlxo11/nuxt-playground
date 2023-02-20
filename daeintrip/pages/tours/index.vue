<template>
  <div class="tours">
    <div v-if="tours" class="tours-inner">
      <div v-for="(tour, idx) of tours" :key="idx">
        <Card @click="router.push(`/tours/${tour.id}`)" :data="tour" />
      </div>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy";
import Card from "./card.vue";

export default {
  name: "Tours",
  components: {
    Card,
  },
  setup() {
    const router = useRouter();
    const tours = ref(null);

    onMounted(() => {
      tours.value = dummy.tours;
    });

    return {
      router,
      tours,
    };
  },
};
</script>

<style lang="scss" scoped>
.tours {
  .tours-inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>
