<template>
  <div class="search">
    <div class="search-inner">
      <span class="mdi mdi-magnify"></span>
      <input type="text" placeholder="검색어를 입력해주세요." />
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  setup() {},
};
</script>

<style lang="scss" scoped>
.search {
  height: 40px;
  width: 250px;
  & .search-inner {
    padding: 5px 10px 5px 10px;
    height: 100%;
    border-radius: 0.25rem;
    background-color: #f5f6f8;

    & input {
      height: 100%;
      border: none;
      background-color: inherit;

      &:focus {
        outline: none;
      }
    }

    &:focus {
      background-color: white;
    }

    & .mdi {
      margin: 0 5px 0 5px;
      color: #878c90;
    }
  }
}
</style>
