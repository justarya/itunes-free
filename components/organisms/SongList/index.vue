<template>
  <div class="o-song-list">
    <MoleculesSongPreview
      v-for="song in songs"
      v-bind="song"
      :key="song.id"
    />
  </div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    songs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.o-song-list {
  padding-bottom: 150px;
}
</style>
