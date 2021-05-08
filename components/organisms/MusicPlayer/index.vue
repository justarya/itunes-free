<template>
  <div
    v-show="$store.getters['player/isSongExist']"
    class="o-music-player"
  >
    <div class="o-music-player__cover">
      <img :src="song.coverUrl">
    </div>
    <div class="o-music-player__info">
      <p class="o-music-player__title">
        {{ song.songTitle }}
      </p>
      <p class="o-music-player__description">
        <span class="o-music-player__artist">{{ song.artistName }}</span>
        <span>.</span>
        <span class="o-music-player__album">{{ song.albumName }}</span>
      </p>
    </div>
    <div
      class="o-music-player__control"
      @click="toggleAudio"
    >
      <i
        v-if="isPlaying"
        class="icon-pause"
      />
      <i
        v-else
        class="icon-play"
      />
    </div>
    <audio
      id="audio-player"
      ref="player"
      style="display: none;"
    >
      <source :src="song.previewUrl" type="audio/mp3">
      Your browser does not support the audio tag.
    </audio>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayer',
  data: () => ({
    listenerActive: false,
  }),
  computed: {
    song() {
      return this.$store.getters['player/songDetail'];
    },
    isPlaying() {
      return this.$store.getters['player/isPlaying'];
    },
  },
  watch: {
    song: {
      handler() {
        this.startAudio();
      },
      deep: true,
    },
    isPlaying: {
      handler(isPlaying) {
        const audio = this.$refs.player;
        // prevent starting multiple listeners at the same time
        if (isPlaying && !this.listenerActive) {
          this.listenerActive = true;
          // for a more consistent timeupdate, include freqtimeupdate.js and
          // replace both instances of 'timeupdate' with 'freqtimeupdate'
          audio.addEventListener('timeupdate', this.playbackListener);
          this.toggleAudio();
        } else {
          audio.pause();
        }
      },
    },
  },
  methods: {
    async toggleAudio() {
      const audio = this.$refs.player;

      if (audio.paused) {
        audio.play();
        this.$store.dispatch('player/setPlayStatus', true);
      } else {
        audio.pause();
        this.$store.dispatch('player/setPlayStatus', false);
      }
    },
    async startAudio() {
      const audio = this.$refs.player;
      this.endListener();

      audio.src = this.song.previewUrl;
      this.toggleAudio();
    },
    playbackListener() {
      const audio = this.$refs.player;
      // Sync local 'playbackTime' var to audio.currentTime and update global state
      this.playbackTime = audio.currentTime;

      // console.log("update: " + audio.currentTime);
      // Add listeners for audio pause and audio end events
      audio.addEventListener('ended', this.endListener);
      audio.addEventListener('pause', this.pauseListener);
    },
    pauseListener() {
      this.listenerActive = false;
      this.cleanupListeners();
    },
    endListener() {
      this.listenerActive = false;
      this.cleanupListeners();
    },
    cleanupListeners() {
      const audio = this.$refs.player;
      audio.removeEventListener('timeupdate', this.playbackListener);
      audio.removeEventListener('ended', this.endListener);
      audio.removeEventListener('pause', this.pauseListener);
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
.o-music-player {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  max-width: 450px;
  background-color: black;
  color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  &__cover {
    padding: 16px;
    img {
      border-radius: 8px;
      width: 72px;
    }
  }
  &__info {
    padding: 24px 0;
    width: calc(100% - 104px - 85px);
  }
  &__title {
    font-size: 20px;
    margin: 0;
    @include textElipisis();
  }
  &__description {
    font-size: 14px;
    color: #777;
    margin: 0;
    @include textElipisis();
  }
  &__control {
    display: flex;
    align-items: center;
    font-size: 32px;
    padding: 0 20px;
    cursor: pointer;
  }
}
</style>
