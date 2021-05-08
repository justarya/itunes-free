<template>
  <div class="t-search">
    <OrganismsSearchBar />
    <OrganismsSearchResultLabel />
    <OrganismsSongList
      :songs="songs"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchTemplate',
  props: {
    songs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
