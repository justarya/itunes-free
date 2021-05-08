export default {
  async getSongs({ commit }, { term }) {
    commit('SET_SONGS', []);

    const url = 'https://itunes.apple.com/search';
    const { data } = await this.$axios.get(url, {
      params: {
        limit: 20,
        term,
        media: 'music',
        // callback: 'wsSearchCB',
      },
    });
    const songs = data.results.map((el) => ({
      id: String(el.trackId),
      songTitle: el.trackName,
      artistName: el.artistName,
      albumName: el.collectionName,
      coverUrl: el.artworkUrl100,
      previewUrl: el.previewUrl,
    }));
    commit('SET_SONGS', songs);
  },
};
