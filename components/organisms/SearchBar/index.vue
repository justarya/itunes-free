<template>
  <div class="o-search-bar">
    <input
      v-model="search"
      class="o-search-bar__search-input"
      type="text"
      placeholder="Search..."
      autofocus
      @keydown.enter.prevent="searchSong"
    >
    <NuxtLink
      class="o-search-bar__cancel-action"
      to="/"
    >
      <i class="icon-cancel" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    search: '',
  }),
  watch: {
    '$route.query.term': {
      handler() {
        this.search = this.$route.query.term || '';
      },
      immediate: true,
    },
  },
  methods: {
    searchSong() {
      if (this.search) {
        this.$router.push({
          path: this.$route.path,
          query: {
            term: this.search,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss">
.o-search-bar {
  display: flex;
  justify-content: space-between;
  &__search-input {
    width: 100%;
    border: 0;
    padding: 40px 20px;
    font-size: 28px;
    &:focus {
      outline: none;
    }
  }
  &__cancel-action {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    font-size: 24px;
    color: black;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
}
</style>
