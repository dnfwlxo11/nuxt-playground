<template>
  <div class="travels">
    <div v-if="travels" class="travels-inner">
      <div v-for="(travel, idx) of travels" :key="idx">
        <Card @click="router.push(`/travels/${travel.id}`)" :data="travel" />
      </div>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy";
import Card from "./card.vue";

export default {
  name: "Travels",
  components: {
    Card,
  },
  setup() {
    const router = useRouter();
    const travels = ref(null);

    onMounted(() => {
      travels.value = dummy.travels;
    });

    return {
      router,
      travels,
    };
  },
};
</script>

<style lang="scss" scoped>
.travels {
  .travels-inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>
