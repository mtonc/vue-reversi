import Vue from "vue";
import Vuex from "vuex";
import board from "./board";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePlayer: "white"
  },
  getters: {
    getActivePlayer: state => {
      return state.activePlayer;
    }
  },
  mutations: {
    SWITCH_PLAYER: state => {
      if (state.activePlayer == "white") {
        state.activePlayer = "black";
      } else {
        state.activePlayer = "white";
      }
    }
  },
  actions: {
    switchPlayer: ({ commmit }) => {
      commmit("SWITCH_PLAYER");
    }
  },
  modules: {
    board
  }
});
