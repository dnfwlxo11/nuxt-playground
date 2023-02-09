<template>
  <div class="menus">
    <button
      class="menu"
      v-for="(menu, idx) of menus"
      :key="idx"
      @click="router.push(menu.link)"
    >
      <span class="mdi" :class="`mdi-${menu.icon}`"></span>
      {{ menu.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Menus",
  setup() {
    const router = useRouter();
    const menus = ref([
      { name: "여행", icon: "wallet-travel", link: "/travels" },
      { name: "투어", icon: "car-pickup", link: "/tours" },
      { name: "가이드", icon: "badge-account-outline", link: "/guides" },
    ]);

    return {
      router,
      menus,
    };
  },
};
</script>

<style lang="scss" scoped>
.menus {
  display: flex;
  max-width: 1080px;
  margin: 10px auto;

  & .menu {
    padding: 3px 10px;
    color: #6a6c70;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
