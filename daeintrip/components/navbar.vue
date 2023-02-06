<template>
  <div class="navbar">
    <div class="site-title">
      <span>my</span>
      <span class="title-empha">daein</span>
      <span>trip</span>
    </div>
    <Search />
    <div class="nav-items">
      <div>
        <button class="inner-btn">로그인</button>
      </div>
      <div>
        <button class="outer-btn">회원가입</button>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search.vue";

export default {
  name: "Nav",
  components: {
    Search,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;
  max-width: 1060px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  .site-title {
    margin-right: 20px;
    font-weight: 800;
    font-size: 1.25rem;

    & .title-empha {
      color: #3593da;
    }
  }

  .nav-items {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    & .outer-btn {
      border: 1px solid #3593da;
      color: #3593da;

      &:hover {
        background: #f5f6f8;
      }
    }
  }
}
.inner-btn {
  padding: 3px 15px;
  border: none;
  color: #6a6c70;
  font-size: 14px;
}

.outer-btn {
  padding: 3px 15px;
  color: #6a6c70;
  border: 1px solid #6a6c70;
  font-size: 14px;
}
</style>
