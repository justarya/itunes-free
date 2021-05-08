export default {
  playSong({ commit }, payload) {
    commit('SET_SONG', payload);
  },
  playAudio({ commit }, payload) {
    commit('SET_STATUS', payload);
  },
};
