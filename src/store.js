import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    games: [],
    teams: [],
    dates: []
  },
  actions: {
    loadGames({ commit }) {
      axios
        .get("https://api.myjson.com/bins/8td4i")
        .then(list => list.data)
        .then(games => {
          commit("SET_GAMES", games);
          commit("TeamMenu", games);
          commit("DateMenu", games);
        });
    }
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    TeamMenu(state, games) {
      return state.teams = [...new Set(games.map(game => game.home_team).sort())];
    },
    DateMenu(state, games) {
       return state.dates = [...new Set(games.map(game => game.date).sort(function(a, b) {return a - b;}))];
    }
  }
});
