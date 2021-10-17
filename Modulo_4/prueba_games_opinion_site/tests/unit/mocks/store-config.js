export default {
  state: {
    games:[],
    opinions: [],
  },
  getters: {
    get_opinions(state){
      return state.opinions;
    }
  }, 
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    ADD_OPINION(state, opinion) {
      state.opinions.push(opinion);
    },
    UPDATE_OPINION(state, opinions) {
      state.opinions = opinions;
    },
    DELETE_OPINION(state, opinions) {
      state.opinions = opinions;
    } 
  },
  actions: {
    async get_games({commit}) {
      const { data: {results: data_games} } = await axios.get("https://api.rawg.io/api/games?key=39a75a431db54c1ea3dcecf6966f431a")
      const games = data_games.map((g) => {
        let obj = {
          id: g.id,
          name: g.name,
          img: g.background_image,
          rating: g.rating,
          released: g.released,
          updated: g.updated
        }
        return obj;
      })
      commit("SET_GAMES", games)
    },
    add_opinion({commit, state}, [gameName, userName, userOpinion]) {
      const cantOpinions = state.opinions.length;
      const idOpinion = (cantOpinions > 0) ? state.opinions[cantOpinions - 1]["id"] + 1 : 1;
      const opinion = {id: idOpinion, game: gameName, usuario: userName, opinion: userOpinion};
      commit("ADD_OPINION", opinion);
    },
    update_opinion({commit, state}, [id, userName, userOpinion]){
      const opinions = state.opinions.map(o => {
        if(o.id == id) {
          o.usuario = userName;
          o.opinion = userOpinion;
        }
        return o;
      });
      commit("UPDATE_OPINION", opinions)
    },
    delete_opinion({commit, state}, id){
      const opinions = state.opinions.filter(o => o.id != id);
      commit("DELETE_OPINION", opinions);
    }
  }
}