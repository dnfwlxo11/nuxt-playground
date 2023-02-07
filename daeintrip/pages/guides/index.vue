<template>
  <div class="guides">
    <h2 class="guides-title">몸만 와 내가 다 해줄게</h2>
    <div v-if="guides.length" class="guides-inner" ref="guideRef">
      <ChevronButton v-if="guideRef" :parent="guideRef" />
      <div class="guide" v-for="(guide, idx) of guides" :key="idx">
        <Card :data="guide" />
      </div>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy";
import ChevronButton from "@/components/slideButton.vue";
import Card from "./vues/card.vue";

export default {
  name: "Guides",
  components: {
    Card,
    ChevronButton,
  },
  setup() {
    const guideRef = ref(null);
    const guides = ref([]);

    onBeforeMount(() => {
      guides.value = dummy.tours;
    });

    return {
      guideRef,
      guides,
    };
  },
};
</script>

<style lang="scss" scoped>
.guides {
  position: relative;
  margin: 64px 0;

  .guides-title {
    color: #353a3f;
  }

  & .guides-inner {
    white-space: nowrap;
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
    display: flex;
  }
}
</style>
