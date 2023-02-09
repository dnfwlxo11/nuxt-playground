<template>
  <div class="tour-card">
    <div class="tour-thumbnail">
      <img :src="`/static/${data.src}`" alt="" />
    </div>
    <div class="tour-content">
      <div class="content-title">{{ data.name }}</div>
      <div class="content-main">{{ data.subTitle }}</div>
      <div class="content-footer">{{ data.price }} / 1인</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tour-card",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {},
};
</script>

<style lang="scss" scoped>
.tour-card {
  display: flex;
  height: 150px;
  border: 0.5px solid lightgrey;
  border-radius: 0.25rem;

  .tour-thumbnail {
    height: inherit;
    width: 40%;

    & img {
      border-radius: 0.25rem 0 0 0.25rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .tour-content {
    height: inherit;
    padding: 10px;
    width: 60%;
    color: #353a3f;

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
