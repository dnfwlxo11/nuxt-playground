<template>
  <div class="card">
    <img class="card-background" :src="`/static/${data.src}`" />
    <div class="card-contents">
      <div class="content-title">{{ data.name }}</div>
      <div class="content-sub">{{ data.subTitle }}</div>
      <div class="content-more-btn">
        <button class="btn-inner">자세히보기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  margin: 5px;
  width: 300px;
  height: 400px;
  border-radius: 0.25rem;

  & .card-background {
    border-radius: inherit;
    position: absolute;
    width: inherit;
    height: inherit;
    object-fit: cover;
  }

  & .card-contents {
    height: 100%;
    width: 100%;
    padding: 20px;
    position: absolute;
    color: white;

    & .content-title {
      font-weight: 800;
      font-size: 22px;
    }

    & .content-sub {
      font-weight: 600;
      font-size: 16px;
    }

    & .content-more-btn {
      position: absolute;
      left: calc(100% - 100px);
      top: calc(100% - 50px);

      & .btn-inner {
        border-radius: 0.25rem;
        padding: 3px 10px;
        color: #6a6c70;
        background: white;
        font-size: 14px;
      }
    }
  }
}
</style>
