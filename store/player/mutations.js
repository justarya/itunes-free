export default {
  SET_SONG(state, value) {
    const {
      id,
      coverUrl,
      songTitle,
      artistName,
      albumName,
      previewUrl,
    } = value;
    state.song = {
      id,
      coverUrl,
      songTitle,
      artistName,
      albumName,
      previewUrl,
    };
  },
  SET_STATUS(state, value) {
    state.status = value
      ? 'play'
      : 'pause';
  },
};
