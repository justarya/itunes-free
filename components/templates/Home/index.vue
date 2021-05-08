<template>
  <div class="t-home">
    <OrganismsNav />
    <OrganismsSongList
      :songs="songs"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeTemplate',
  props: {
    songs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
