import Vue from 'vue'
import Vuex from 'vuex'
import { initializeApp } from "firebase/app"
import firebaseConfig from '@/configs/firebase.js'

initializeApp(firebaseConfig)
import { getFirestore , collection, getDocs, doc, deleteDoc, addDoc, Timestamp } from "firebase/firestore"

const db = getFirestore();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    cursos: [],
  },
  getters: {
    user(state){
      return state.user
    },
    cursos(state){
      return state.cursos;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_CURSOS(state, cursos){
      state.cursos = cursos;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    async getCursos({commit}){
      const querySnapshot = await getDocs(collection(db, "cursos"));
      const cursos = [];
      querySnapshot.forEach(doc => {
        const curso = {
          id: doc.id,
          codigo: doc.data().codigo,
          costo: doc.data().costo,
          cupos: doc.data().cupos,
          descripcion: doc.data().descripcion,
          duracion: doc.data().duracion,
          terminado: doc.data().terminado,
          fechaRegistro: doc.data().fechaRegistro,
          imagen: doc.data().imagen,
          inscritos: doc.data().inscritos,
          nombre: doc.data().nombre
        };
        cursos.push(curso);
      });
      commit("SET_CURSOS", cursos);
    },
    async addCurso({dispatch}, [codigo, costo, cupos, descripcion, duracion, terminado, imagen, inscritos, nombre]){
      await addDoc(collection(db, "cursos"), {
        codigo,
        costo,
        cupos,
        descripcion,
        duracion,
        terminado,
        fechaRegistro: Timestamp.now(),
        imagen,
        inscritos,
        nombre
      });
      dispatch('getCursos');
    },
    updateCurso(){

    },
    async deleteCurso({dispatch}, id){
      await deleteDoc(doc(db, "cursos", id));
      dispatch('getCursos');
    }
  }
})
