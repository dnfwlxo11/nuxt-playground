<template>
  <div class="travel-card">
    <img class="card-background" :src="`/static/${data.src}`" />
    <div class="card-contents">
      <div class="content-title">{{ data.country }}</div>
      <div class="content-sub">{{ data.subTitle }}</div>
      <div class="content-more-btn">
        <button
          class="btn-inner"
          @click="
            router.push({
              path: `/travels/${data.id}`,
            })
          "
        >
          자세히보기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelCard",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>

<style lang="scss" scoped>
.travel-card {
  position: relative;
  margin: 0 10px 0 0;
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
    white-space: pre-wrap;

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
      left: calc(100% - 120px);
      top: calc(100% - 50px);

      & .btn-inner {
        text-align: center;
        height: 30px;
        width: 100px;
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
