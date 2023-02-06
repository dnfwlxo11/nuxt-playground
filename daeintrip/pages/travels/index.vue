<template>
  <div class="travels">
    <h2 class="travels-title">여행가고 싶죠?</h2>
    <div v-if="travels.length"
      class="travels-inner" 
      ref="travelRef">
      <ChevronButton :direction="direction" 
        @click="onSlideClickEvt"/>
      <div class="travel" v-for="(travel, idx) of travels" :key="idx">
        <Card :data="travel" />
      </div>
      <ChevronButton :direction="direction" 
        @click="onSlideClickEvt"/>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy.js";
import ChevronButton from './vues/button.vue'
import Card from "@/components/card.vue";

export default {
  name: "Travels",
  components: {
    Card,
    ChevronButton,
  },
  setup() {
    const direction = ref(true);
    const travelRef = ref(null);
    const travels = ref([]);

    onBeforeMount(() => {
      travels.value = dummy.travels;
    });

    const onSlideClickEvt = (evt) => {
      evt.preventDefault();

      direction.value
        ? travelRef.value.scrollLeft += 600
        : travelRef.value.scrollLeft -= 600;

      setTimeout(() => {
        const currWidth = travelRef.value.scrollLeft + travelRef.value.clientWidth;

        if (currWidth >= travelRef.value.scrollWidth) direction.value = false;
        else if (currWidth <= travelRef.value.clientWidth) direction.value = true;
      }, 1000)
    }

    return {
      travelRef,
      travels,
      direction,
      onSlideClickEvt,
    };
  },
};
</script>

<style lang="scss" scoped>
.travels {
  position: relative;
  .travels-title {
    color: #353a3f;
  }

  & .travels-inner {
    white-space: nowrap;
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
    display: flex;
  }
}
</style>
