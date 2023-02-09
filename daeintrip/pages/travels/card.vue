<template>
  <div class="travel-card">
    <div class="travel-thumbnail">
      <img :src="`/static/${data.src}`" alt="" />
    </div>
    <div class="travel-content">
      <div class="content-title">{{ data.area }}</div>
      <div class="content-main">{{ data.subTitle }}</div>
      <div class="content-footer">{{ data.price }} / 1인</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "travel-card",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    onMounted(() => {
      console.log(props.data);
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
.travel-card {
  display: flex;
  height: 150px;
  border: 0.5px solid lightgrey;
  border-radius: 0.25rem;

  .travel-thumbnail {
    height: inherit;
    width: 40%;

    & img {
      border-radius: 0.25rem 0 0 0.25rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .travel-content {
    height: inherit;
    padding: 10px;
    width: 60%;
    color: #353a3f;
    white-space: pre-wrap;

    & .content-title {
      height: 20%;
      font-size: 16px;
      font-weight: 500;
    }

    & .content-main {
      height: 70%;
      font-size: 14px;
    }

    & .content-footer {
      text-align: right;
      height: 10%;
      font-size: 12px;
    }
  }
}
</style>
