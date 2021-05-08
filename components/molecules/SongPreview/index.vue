<template>
  <div
    class="m-song-preview"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    @click="playSong"
  >
    <div
      class="m-song-preview__cover"
      :style="{
        backgroundImage: `url(${coverUrl})`,
      }"
    />
    <div class="m-song-preview__info">
      <div class="m-song-preview__title">
        {{ songTitle }}
      </div>
      <div class="m-song-preview__description">
        {{ artistName }} . {{ albumName }}
      </div>
    </div>
    <div
      v-if="isHover"
      class="m-song-preview__play-action"
    >
      <i
        v-if="isThisSongPlaying"
        class="icon-pause"
      />
      <i
        v-else
        class="icon-play"
      />
    </div>
    <div
      v-else-if="isThisSongPlaying"
      class="m-song-preview__play-indicator"
    >
      <img src="~/assets/images/play-indicator.gif" alt="Playing...">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongPreview',
  props: {
    id: {
      type: String,
      default: '',
    },
    coverUrl: {
      type: String,
      default: '',
    },
    songTitle: {
      type: String,
      default: '',
    },
    artistName: {
      type: String,
      default: '',
    },
    albumName: {
      type: String,
      default: '',
    },
    previewUrl: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isHover: false,
  }),
  computed: {
    isThisSongPlaying() {
      return this.$store.getters['player/songDetail'].id === this.id
        && this.$store.getters['player/isPlaying'];
    },
    isThisSongPaused() {
      return this.$store.getters['player/songDetail'].id === this.id
        && !this.$store.getters['player/isPlaying'];
    },
  },
  methods: {
    playSong() {
      if (this.isThisSongPlaying) {
        this.$store.dispatch('player/setPlayStatus', false);
      } else if (this.isThisSongPaused) {
        this.$store.dispatch('player/setPlayStatus', true);
      } else {
        this.$store.dispatch('player/playSong', {
          id: this.id,
          coverUrl: this.coverUrl,
          songTitle: this.songTitle,
          artistName: this.artistName,
          albumName: this.albumName,
          previewUrl: this.previewUrl,
        });
      }
    },
  },
};
</script>

<style lang="scss">
@mixin textElipisis() {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.m-song-preview {
  width: 100%;
  display: flex;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.1s;
  border-radius: 10px;

  &:hover {
    transition: 0.1s;
    background-color: #eee;
  }

  &__cover {
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;

    width: 72px;
    height: 72px;

    border-radius: 8px;
    margin-right: 10px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 82px - 50px);
    div {
      @include textElipisis();
    }
  }
  &__title {
    font-size: 20px;
  }
  &__play-action {
    padding: 0 10px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  &__play-indicator {
    padding: 0 10px;
    display: flex;
    align-items: flex-end;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
