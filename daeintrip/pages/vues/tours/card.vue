<template>
  <div class="card">
    <div class="card-thumbnail">
      <img class="card-background" :src="`/static/${data.src}`" alt="" />
    </div>
    <div class="card-content">
      <div class="content-tag"></div>
      <div class="content-title">
        {{ data.subTitle }}
      </div>
      <div class="content-infor">
        {{ data.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
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
  border: 0.5px solid lightgrey;
  border-radius: 0.25rem;
  margin: 0 10px 0 0;
  width: 150px;
  height: 200px;

  & .card-thumbnail {
    border-radius: 0.25rem 0.25rem 0 0;
    height: 50%;

    & .card-background {
      border-radius: inherit;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .card-content {
    height: 50%;
    padding: 3px 10px;
    white-space: normal;

    & .content-tag {
      margin: 3px 0;
      font-size: 10px;
    }

    & .content-title {
      display: -webkit-box;
      word-wrap: break-word;
      height: 50px;
      width: 100%;
      font-size: 12px;
      overflow: hidden;
      text-align: left;
      white-space: normal;
      line-height: 1.2;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }

    & .content-infor {
      display: block;
      text-align: right;
      margin-top: auto;
      font-size: 12px;
    }
  }
}
</style>
