<template>
  <div class="slide-button">
    <button
      v-if="currWidth > clientWidth"
      class="chevron-btn chevron-btn-left"
      @click.prevent="onSlideClickEvt(false)"
    >
      <span class="mdi mdi-chevron-left"></span>
    </button>
    <button
      v-if="currWidth !== scrollWidth && scrollWidth > clientWidth"
      class="chevron-btn chevron-btn-right"
      @click.prevent="onSlideClickEvt(true)"
    >
      <span class="mdi mdi-chevron-right"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "slideButton",
  props: {
    direction: {
      type: Boolean,
      default: false,
    },
    parent: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    const scrollWidth = ref(props.parent.scrollWidth);
    const clientWidth = ref(props.parent.clientWidth);
    const currWidth = ref(0);

    const checkScroll = () => {
      requestAnimationFrame(() => {
        currWidth.value = Math.ceil(
          props.parent.scrollLeft + clientWidth.value
        );
      });
    };

    onMounted(() => {
      scrollWidth.value = props.parent.scrollWidth;
      clientWidth.value = props.parent.clientWidth;
      currWidth.value = props.parent.scrollLeft;

      props.parent.addEventListener("scroll", checkScroll);
    });

    onUnmounted(() => {
      props.parent.addEventListener("scroll", checkScroll);
    });

    const onSlideClickEvt = (direction, evt) => {
      direction
        ? (props.parent.scrollLeft += 600)
        : (props.parent.scrollLeft -= 600);

      nextTick(() => {
        currWidth.value = props.parent.scrollLeft + clientWidth.value;
      });
    };

    return {
      scrollWidth,
      clientWidth,
      currWidth,
      onSlideClickEvt,
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-button {
  .chevron-btn {
    position: absolute;
    z-index: 2;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: #353a3f;
    background-color: white;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%),
      0 4px 12px 0 rgb(0 0 0 / 5%);
    border-radius: 50%;

    &-left {
      left: -15px;
      top: 50%;
    }

    &-right {
      right: calc(0% - 15px);
      top: 50%;
    }
  }
}
</style>
