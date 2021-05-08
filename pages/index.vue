<template>
  <div class="p-home">
    <TemplatesHome
      :songs="$store.getters['songs/list']"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ store }) {
    await store.dispatch('songs/getSongs', { term: 'beatles' });
    return {};
  },
};
</script>

<style></style>
