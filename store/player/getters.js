export default {
  isSongExist(state) {
    return state.song.id !== '';
  },
  isPlaying(state) {
    return state.status === 'play';
  },
  songDetail(state) {
    return state.song;
  },
};
