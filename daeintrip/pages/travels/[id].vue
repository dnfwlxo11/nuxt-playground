<template>
  <div class="travel-detail">
    <div class="travel-detail-left">
      <div class="travel-detail-left-tag">
        {{ travel.country }} > {{ travel.area }}
      </div>
      <div class="travel-detail-left-title">
        [{{ travel.country }}] {{ travel.subTitle }}
      </div>
      <div class="travel-detail-left-thumbnail">
        <img :src="`/static/${travel.src}`" />
      </div>
      <div v-if="comments.length" class="comments">
        <div class="comments-title">후기</div>
        <div class="comment" v-for="(comment, idx) of comments" :key="idx">
          <Comment :data="comment" />
        </div>
      </div>
    </div>
    <div class="travel-detail-right">
      <div class="offer-box">
        <div class="offer-box-price" style="margin-bottom: 10px">
          {{ travel.price }}
          <span class="offer-box-sub">부터</span>
        </div>
        <button class="btn" style="margin-bottom: 5px">결제하기</button>
        <button class="btn-outter">찜하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import dummy from "@/public/dummy/dummy";
import Comment from "@/components/comment.vue";

export default {
  name: "TravelDetail",
  components: {
    Comment,
  },
  setup() {
    const route = useRoute();
    const travel = ref([]);
    const comments = ref([]);

    onMounted(() => {
      travel.value = dummy.travels.filter(
        (travel, idx) => travel.id === Number(route.params.id)
      )[0];

      comments.value = dummy.comments;
    });

    return {
      route,
      travel,
      comments,
    };
  },
};
</script>

<style lang="scss" scoped>
.travel-detail {
  display: flex;

  & .travel-detail-left {
    width: 70%;
    padding: 0 20px;
    color: #6a6c70;

    & .travel-detail-left-tag {
      font-size: 12px;
    }

    & .travel-detail-left-title {
      font-size: 24px;
      font-weight: 800;
      border-bottom: 1px solid #e1e3e5;
      margin-bottom: 20px;
    }

    & .travel-detail-left-thumbnail {
      width: 100%;
      margin-bottom: 100px;

      & img {
        width: inherit;
        object-fit: contain;
      }
    }
    & .comments {
      & .comments-title {
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid #e1e3e5;
      }
    }
  }

  & .travel-detail-right {
    width: 30%;
    padding: 0 20px;

    & .offer-box {
      position: fixed;
      width: 300px;
      padding: 20px;
      border: 1px solid #e1e3e5;

      & .offer-box-price {
        font-size: 20px;
        font-weight: 800;
      }

      & .offer-box-sub {
        font-size: 12px;
        color: #6a6c70;
        font-weight: 600;
      }
    }
  }
}

.btn {
  width: 100%;
  color: white;
  background-color: #50abf2;
  padding: 5px 10px;
  border-radius: 0.25rem;

  &-outter {
    width: 100%;
    color: #6a6c70;
    padding: 5px 10px;
    border: 1px solid #e1e3e5;
    border-radius: 0.25rem;
  }
}
</style>
