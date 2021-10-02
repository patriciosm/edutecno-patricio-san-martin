import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personajes: []
  },
  getters: {
  },
  mutations: {
    GET_PERSONAJES(state, personajes){
      state.personajes = personajes;
    }
  },
  actions: {
    async get_Personajes({commit}){
      const { data: personajes } = await axios.get('/personajes.json');
      commit("GET_PERSONAJES", personajes);
    }
  }
})
