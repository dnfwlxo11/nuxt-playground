<template>
  <div class="comment">
    <div class="comment-left">
      <div class="comment-left-title">{{ data.star.toFixed(1) }}</div>
      <div class="comment-left-star">
        <svg
          v-for="(star, idx) of new Array(Number(data.star))"
          :key="idx"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <FullStar />
        </svg>
        <svg
          v-for="(star, idx) of new Array(5 - Number(data.star))"
          :key="idx"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <EmptyStar />
        </svg>
      </div>
    </div>
    <div class="comment-right">
      <div class="comment-right-name">{{ data.name }}</div>
      <div class="comment-right-infor">{{ data.date }}</div>
      <div class="comment-right-content">{{ data.comment }}</div>
    </div>
  </div>
</template>

<script>
import FullStar from "@/components/stars/fullStar.vue";
import EmptyStar from "@/components/stars/emptyStar.vue";

export default {
  name: "Comment",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  components: {
    FullStar,
    EmptyStar,
  },
  setup(props) {
    const star = ref("");
    const createStar = (number) => {
      "★★★★☆";
    };

    return {
      star,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  min-width: 400px;
  padding: 20px 0;
  color: #6a6c70;
  border-bottom: 1px solid #e1e3e5;

  & .comment-left {
    width: 10%;

    & .comment-left-title {
      font-size: 24px;
      font-weight: 800;
    }

    & .comment-left-star {
      font-size: 12px;
    }
  }

  & .comment-right {
    width: 90%;

    & .comment-right-name {
      font-size: 16px;
      font-weight: 600;
    }

    & .comment-right-infor {
      color: #a8abb1;
      font-size: 12px;
      margin-bottom: 5px;
    }

    & .comment-right-content {
      font-size: 14px;
    }
  }
}
</style>
