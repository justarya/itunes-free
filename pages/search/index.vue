<template>
  <div class="p-home">
    <TemplatesSearch
      :songs="$store.getters['songs/list']"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ store, query }) {
    if (query.term) {
      await store.dispatch('songs/getSongs', { term: query.term });
    }
    return {};
  },
  watch: {
    '$route.query.term': {
      handler() {
        this.$nuxt.refresh();
      },
    },
  },
};
</script>

<style></style>
