<template>
  <div class="button">
    <button v-if="direction"
      class="chevron-btn" 
      :class="{ 'chevron-btn-right': direction }">
      <span class="mdi mdi-chevron-right"></span>
    </button>
    <button v-else
      class="chevron-btn" 
      :class="{ 'chevron-btn-left': !direction }">
      <span class="mdi mdi-chevron-left"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    direction: {
      default: false,
      type: Boolean,
    }
  },
  setup(props) {
  }
}
</script>

<style lang="scss" scoped>
.chevron-btn {
  position: absolute;
  z-index: 2;
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: #353a3f;
  background-color: white;
  box-shadow: 
    0 0 0 1px rgb(0 0 0 / 5%), 
    0 2px 6px 0 rgb(0 0 0 / 5%), 
    0 4px 12px 0 rgb(0 0 0 / 5%);
  border-radius: 50%;

  &-left {
    left: -25px;
    top: 50%;
  }

  &-right {
    right: calc(0% - 25px);
    top: 50%;
  }
}
</style>