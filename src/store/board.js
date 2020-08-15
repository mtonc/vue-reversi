import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  state: () => ({
    board: [
      [
        {
          row: 0,
          column: 0,
          color: null,
          isEmpty: true
        },
        {
          row: 0,
          column: 1,
          color: null,
          isEmpty: true
        },
        {
          row: 0,
          column: 2,
          color: null,
          isEmpty: true
        },
        {
          row: 0,
          column: 3,
          color: null,
          isEmpty: true
        },
        {
          row: 0,
          column: 4,
          color: null,
          isEmpty: true
        },
        {
          row: 0,
          column: 5,
          color: null,
          isEmpty: true
        },
        {
          row: 0,
          column: 6,
          color: null,
          isEmpty: true
        },
        {
          row: 0,
          column: 7,
          color: null,
          isEmpty: true
        }
      ],
      [
        {
          row: 1,
          column: 0,
          color: null,
          isEmpty: true
        },
        {
          row: 1,
          column: 1,
          color: null,
          isEmpty: true
        },
        {
          row: 1,
          column: 2,
          color: null,
          isEmpty: true
        },
        {
          row: 1,
          column: 3,
          color: null,
          isEmpty: true
        },
        {
          row: 1,
          column: 4,
          color: null,
          isEmpty: true
        },
        {
          row: 1,
          column: 5,
          color: null,
          isEmpty: true
        },
        {
          row: 1,
          column: 6,
          color: null,
          isEmpty: true
        },
        {
          row: 1,
          column: 7,
          color: null,
          isEmpty: true
        }
      ],
      [
        {
          row: 2,
          column: 0,
          color: null,
          isEmpty: true
        },
        {
          row: 2,
          column: 1,
          color: null,
          isEmpty: true
        },
        {
          row: 2,
          column: 2,
          color: null,
          isEmpty: true
        },
        {
          row: 2,
          column: 3,
          color: null,
          isEmpty: true
        },
        {
          row: 2,
          column: 4,
          color: null,
          isEmpty: true
        },
        {
          row: 2,
          column: 5,
          color: null,
          isEmpty: true
        },
        {
          row: 2,
          column: 6,
          color: null,
          isEmpty: true
        },
        {
          row: 2,
          column: 7,
          color: null,
          isEmpty: true
        }
      ],
      [
        {
          row: 3,
          column: 0,
          color: null,
          isEmpty: true
        },
        {
          row: 3,
          column: 1,
          color: null,
          isEmpty: true
        },
        {
          row: 3,
          column: 2,
          color: null,
          isEmpty: true
        },
        {
          row: 3,
          column: 3,
          color: "white",
          isEmpty: false
        },
        {
          row: 3,
          column: 4,
          color: "black",
          isEmpty: false
        },
        {
          row: 3,
          column: 5,
          color: null,
          isEmpty: true
        },
        {
          row: 3,
          column: 6,
          color: null,
          isEmpty: true
        },
        {
          row: 3,
          column: 7,
          color: null,
          isEmpty: true
        }
      ],
      [
        {
          row: 4,
          column: 0,
          color: null,
          isEmpty: true
        },
        {
          row: 4,
          column: 1,
          color: null,
          isEmpty: true
        },
        {
          row: 4,
          column: 2,
          color: null,
          isEmpty: true
        },
        {
          row: 4,
          column: 3,
          color: "black",
          isEmpty: false
        },
        {
          row: 4,
          column: 4,
          color: "white",
          isEmpty: false
        },
        {
          row: 4,
          column: 5,
          color: null,
          isEmpty: true
        },
        {
          row: 4,
          column: 6,
          color: null,
          isEmpty: true
        },
        {
          row: 4,
          column: 7,
          color: null,
          isEmpty: true
        }
      ],
      [
        {
          row: 5,
          column: 0,
          color: null,
          isEmpty: true
        },
        {
          row: 5,
          column: 1,
          color: null,
          isEmpty: true
        },
        {
          row: 5,
          column: 2,
          color: null,
          isEmpty: true
        },
        {
          row: 5,
          column: 3,
          color: null,
          isEmpty: true
        },
        {
          row: 5,
          column: 4,
          color: null,
          isEmpty: true
        },
        {
          row: 5,
          column: 5,
          color: null,
          isEmpty: true
        },
        {
          row: 5,
          column: 6,
          color: null,
          isEmpty: true
        },
        {
          row: 5,
          column: 7,
          color: null,
          isEmpty: true
        }
      ],
      [
        {
          row: 6,
          column: 0,
          color: null,
          isEmpty: true
        },
        {
          row: 6,
          column: 1,
          color: null,
          isEmpty: true
        },
        {
          row: 6,
          column: 2,
          color: null,
          isEmpty: true
        },
        {
          row: 6,
          column: 3,
          color: null,
          isEmpty: true
        },
        {
          row: 6,
          column: 4,
          color: null,
          isEmpty: true
        },
        {
          row: 6,
          column: 5,
          color: null,
          isEmpty: true
        },
        {
          row: 6,
          column: 6,
          color: null,
          isEmpty: true
        },
        {
          row: 6,
          column: 7,
          color: null,
          isEmpty: true
        }
      ],
      [
        {
          row: 7,
          column: 0,
          color: null,
          isEmpty: true
        },
        {
          row: 7,
          column: 1,
          color: null,
          isEmpty: true
        },
        {
          row: 7,
          column: 2,
          color: null,
          isEmpty: true
        },
        {
          row: 7,
          column: 3,
          color: null,
          isEmpty: true
        },
        {
          row: 7,
          column: 4,
          color: null,
          isEmpty: true
        },
        {
          row: 7,
          column: 5,
          color: null,
          isEmpty: true
        },
        {
          row: 7,
          column: 6,
          color: null,
          isEmpty: true
        },
        {
          row: 7,
          column: 7,
          color: null,
          isEmpty: true
        }
      ]
    ]
  }),
  getters: {
    getBoard: state => {
      return state.board;
    },
    getCell: state => (row, column) => {
      return state.board[row][column];
    },
    getScore: state => color => {
      return state.board.reduce((score, row) => {
        const circles = row.filter(elem => elem.color == color);
        return score + circles.length;
      }, 0);
    }
  },
  mutations: {
    PLACE_DISC: (state, payload) => {
      state.board[payload.row][payload.column].color = payload.color;
      state.board[payload.row][payload.column].isEmpty = false;
    },
    FLIP_DISC: (state, payload) => {
      if (state.board[payload.row][payload.column].color == "white") {
        state.board[payload.row][payload.column].color = "black";
      } else {
        state.board[payload.row][payload.column].color = "white";
      }
    }
  },
  actions: {
    placeDisc: ({ commit }, payload) => {
      commit("PLACE_DISC", payload);
    },
    flipDisc: ({ commit }, payload) => {
      commit("FLIP_DISC", payload);
    }
  }
};
