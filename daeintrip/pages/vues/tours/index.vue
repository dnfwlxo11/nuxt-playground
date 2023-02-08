<template>
  <div class="tours">
    <h2 class="tours-title">투어로 편하게 즐기자! 🚞</h2>
    <div v-if="tours.length" class="tours-inner" ref="tourRef">
      <ChevronButton v-if="tourRef" :parent="tourRef" />
      <div class="tour" v-for="(tour, idx) of tours" :key="idx">
        <Card :class="{ last: idx === tours.length - 1 }" :data="tour" />
      </div>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy";
import ChevronButton from "@/components/slideButton.vue";
import Card from "./card.vue";

export default {
  name: "Tours",
  components: {
    Card,
    ChevronButton,
  },
  setup() {
    const tourRef = ref(null);
    const tours = ref([]);

    onBeforeMount(() => {
      tours.value = dummy.tours;
    });

    return {
      tourRef,
      tours,
    };
  },
};
</script>

<style lang="scss" scoped>
.tours {
  position: relative;
  margin: 48px 0;

  .tours-title {
    color: #353a3f;
  }

  & .tours-inner {
    display: flex;
    white-space: nowrap;
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;

    & .last {
      margin-right: 0px;
    }
  }
}
</style>
