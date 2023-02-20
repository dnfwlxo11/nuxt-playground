<template>
  <div class="travels">
    <h2 class="travels-title">여행가고 싶죠? ✈️</h2>
    <div v-if="travels.length" class="travels-inner" ref="travelRef">
      <ChevronButton v-if="travelRef" :parent="travelRef" />
      <div class="travel" v-for="(travel, idx) of travels" :key="idx">
        <Card :class="{ last: idx === travels.length - 1 }" :data="travel" />
      </div>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy";
import ChevronButton from "@/components/slideButton.vue";
import Card from "./card.vue";

export default {
  name: "Travels",
  components: {
    Card,
    ChevronButton,
  },
  setup() {
    const travelRef = ref(null);
    const travels = ref([]);

    onMounted(() => {
      travels.value = dummy.travels;
    });

    return {
      travelRef,
      travels,
    };
  },
};
</script>

<style lang="scss" scoped>
.travels {
  position: relative;
  margin: 48px 0;
  .travels-title {
    color: #353a3f;
  }

  & .travels-inner {
    display: flex;
    justify-content: space-between;
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
