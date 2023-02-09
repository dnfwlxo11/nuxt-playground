<template>
  <div class="guides">
    <div v-if="guides" class="guides-inner">
      <div v-for="(guide, idx) of guides" :key="idx">
        <Card @click="router.push(`/tours/${tour.id}`)" :data="guide" />
      </div>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy";
import Card from "./card.vue";

export default {
  name: "Guides",
  components: {
    Card,
  },
  setup() {
    const router = useRouter();
    const guides = ref(null);

    onMounted(() => {
      guides.value = dummy.guides;
    });

    return {
      router,
      guides,
    };
  },
};
</script>

<style lang="scss" scoped>
.guides {
  .guides-inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>
