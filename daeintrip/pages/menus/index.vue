<template>
  <div class="menus">
    <a class="menu" v-for="(menu, idx) of menus" :key="idx">
      <span class="mdi" :class="`mdi-${menu.icon}`"></span>
      {{ menu.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Menus",
  setup() {
    const menus = ref([
      { name: "여행", icon: "wallet-travel" },
      { name: "투어", icon: "car-pickup" },
      { name: "가이드", icon: "badge-account-outline" },
    ]);

    return {
      menus,
    };
  },
};
</script>

<style lang="scss" scoped>
.menus {
  display: flex;
  max-width: 1080px;
  margin: 0 auto;

  & .menu {
    padding: 3px 10px;
    color: #6a6c70;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
