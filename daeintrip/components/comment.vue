<template>
  <div class="comment">
    <div class="comment-left">
      <div class="comment-left-title">{{ data.star.toFixed(1) }}</div>
      <svg viewBox="0 0 100 100">
        <polygon
          points="50,0 63.5,38 100,38 68.5,57.5 75,95 50,76 25,95 31.5,57.5 0,38 36.5,38"
          fill="#50abf2"
          stroke="#e1e3e5"
          stroke-width="2"
        />
      </svg>

      <!-- Half star -->
      <svg viewBox="0 0 100 100">
        <polygon
          points="50,0 36.5,38 0,38 31.5,57.5 25,95 50,76 75,95 68.5,57.5 100,38 63.5,38 50,0"
          fill="#e1e3e5"
        />
        <polygon
          points="50,0 36.5,38 0,38 31.5,57.5 25,95 50,76"
          fill="#50abf2"
        />
      </svg>

      <!-- Empty star -->
      <svg viewBox="0 0 100 100">
        <polygon
          points="50,0 63.5,38 100,38 68.5,57.5 75,95 50,76 25,95 31.5,57.5 0,38 36.5,38"
          fill="none"
          stroke="#e1e3e5"
          stroke-width="2"
        />
      </svg>
      <div class="comment-left-star">{{ star }}</div>
    </div>
    <div class="comment-right">
      <div class="comment-right-name">{{ data.name }}</div>
      <div class="comment-right-infor">{{ data.date }}</div>
      <div class="comment-right-content">{{ data.comment }}</div>
    </div>
  </div>
</template>

<script>
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
