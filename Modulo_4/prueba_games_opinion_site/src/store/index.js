import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
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
      state.games = games.map((g) => {
        let obj = {
          id: g.id,
          name: g.name,
          img: g.background_image,
          rating: g.rating,
          released: g.released,
          updated: g.updated
        }
        return obj;
      });
    },
    ADD_OPINION(state, [gameName, userName, userOpinion]) {
      const cantOpinions = state.opinions.length;
      const idOpinion = (cantOpinions > 0) ? state.opinions[cantOpinions - 1]["id"] + 1 : 1;
      state.opinions.push({id: idOpinion, game: gameName, usuario: userName, opinion: userOpinion});
    },
    UPDATE_OPINION(state, [id, userName, userOpinion]) {
      state.opinions.map(o => {
        if(o.id == id) {
          o.usuario = userName;
          o.opinion = userOpinion;
        }
        return o;
      });
    },
    DELETE_OPINION(state, id) {
      const opinions = state.opinions.filter(o => o.id != id);
      state.opinions = opinions;
    } 
  },
  actions: {
    async get_games({commit}) {
      const { data: {results: games} } = await axios.get("https://api.rawg.io/api/games?key=39a75a431db54c1ea3dcecf6966f431a")
      commit("SET_GAMES", games)
    }
  }
})
