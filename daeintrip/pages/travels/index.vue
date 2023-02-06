<template>
  <div class="travels">
    <h2 class="travels-title">여행가고 싶죠?</h2>
    <div class="travels-inner" v-if="travels.length">
      <div class="travel" v-for="(travel, idx) of travels" :key="idx">
        <Card :data="travel" />
      </div>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy.js";
import Card from "@/components/card.vue";

export default {
  name: "Travels",
  components: {
    Card,
  },
  setup() {
    const travels = ref([]);

    onBeforeMount(() => {
      travels.value = dummy.travels;
      console.log(travels);
    });

    return {
      travels,
    };
  },
};
</script>

<style lang="scss" scoped>
.travels {
  .travels-title {
    color: #353a3f;
  }

  & .travels-inner {
    display: flex;
  }
}
</style>
