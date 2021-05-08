export default {
  playSong({ commit }, payload) {
    commit('SET_SONG', payload);
  },
  setPlayStatus({ commit }, payload) {
    commit('SET_STATUS', payload);
  },
};
