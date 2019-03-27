import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    games: []
  },
  actions: {
    loadGames({ commit }) {
      axios
        .get('https://api.myjson.com/bins/1ajn72')
        .then(list => list.data)
        .then(games => {
          commit('SET_GAMES', games)

        })
    }
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games
    }
  }
})