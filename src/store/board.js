import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default  {
  state: () => ({
    board: [
      [
        {
          row: 0,
          column: 0,
          color: null
        },
        {
          row: 0,
          column: 1,
          color: null
        },
        {
          row: 0,
          column: 2,
          color: null
        },
        {
          row: 0,
          column: 3,
          color: null
        },
        {
          row: 0,
          column: 4,
          color: null
        },
        {
          row: 0,
          column: 5,
          color: null
        },
        {
          row: 0,
          column: 6,
          color: null
        },
        {
          row: 0,
          column: 7,
          color: null
        }
      ],
      [
        {
          row: 1,
          column: 0,
          color: null
        },
        {
          row: 1,
          column: 1,
          color: null
        },
        {
          row: 1,
          column: 2,
          color: null
        },
        {
          row: 1,
          column: 3,
          color: null
        },
        {
          row: 1,
          column: 4,
          color: null
        },
        {
          row: 1,
          column: 5,
          color: null
        },
        {
          row: 1,
          column: 6,
          color: null
        },
        {
          row: 1,
          column: 7,
          color: null
        }
      ],
      [
        {
          row: 2,
          column: 0,
          color: null
        },
        {
          row: 2,
          column: 1,
          color: null
        },
        {
          row: 2,
          column: 2,
          color: null
        },
        {
          row: 2,
          column: 3,
          color: null
        },
        {
          row: 2,
          column: 4,
          color: null
        },
        {
          row: 2,
          column: 5,
          color: null
        },
        {
          row: 2,
          column: 6,
          color: null
        },
        {
          row: 2,
          column: 7,
          color: null
        }
      ],
      [
        {
          row: 3,
          column: 0,
          color: null
        },
        {
          row: 3,
          column: 1,
          color: null
        },
        {
          row: 3,
          column: 2,
          color: null
        },
        {
          row: 3,
          column: 3,
          color: "white",
        },
        {
          row: 3,
          column: 4,
          color: "black",
        },
        {
          row: 3,
          column: 5,
          color: null
        },
        {
          row: 3,
          column: 6,
          color: null
        },
        {
          row: 3,
          column: 7,
          color: null
        }
      ],
      [
        {
          row: 4,
          column: 0,
          color: null
        },
        {
          row: 4,
          column: 1,
          color: null
        },
        {
          row: 4,
          column: 2,
          color: null
        },
        {
          row: 4,
          column: 3,
          color: "black",
        },
        {
          row: 4,
          column: 4,
          color: "white",
        },
        {
          row: 4,
          column: 5,
          color: null
        },
        {
          row: 4,
          column: 6,
          color: null
        },
        {
          row: 4,
          column: 7,
          color: null
        }
      ],
      [
        {
          row: 5,
          column: 0,
          color: null
        },
        {
          row: 5,
          column: 1,
          color: null
        },
        {
          row: 5,
          column: 2,
          color: null
        },
        {
          row: 5,
          column: 3,
          color: null
        },
        {
          row: 5,
          column: 4,
          color: null
        },
        {
          row: 5,
          column: 5,
          color: null
        },
        {
          row: 5,
          column: 6,
          color: null
        },
        {
          row: 5,
          column: 7,
          color: null
        }
      ],
      [
        {
          row: 6,
          column: 0,
          color: null
        },
        {
          row: 6,
          column: 1,
          color: null
        },
        {
          row: 6,
          column: 2,
          color: null
        },
        {
          row: 6,
          column: 3,
          color: null
        },
        {
          row: 6,
          column: 4,
          color: null
        },
        {
          row: 6,
          column: 5,
          color: null
        },
        {
          row: 6,
          column: 6,
          color: null
        },
        {
          row: 6,
          column: 7,
          color: null
        }
      ],
      [
        {
          row: 7,
          column: 0,
          color: null
        },
        {
          row: 7,
          column: 1,
          color: null
        },
        {
          row: 7,
          column: 2,
          color: null
        },
        {
          row: 7,
          column: 3,
          color: null
        },
        {
          row: 7,
          column: 4,
          color: null
        },
        {
          row: 7,
          column: 5,
          color: null
        },
        {
          row: 7,
          column: 6,
          color: null
        },
        {
          row: 7,
          column: 7,
          color: null
        }
      ]
    ]
  }),
  getters: {
    getBoard: state => {
      return state.board;
    },
    getCell: state => ({ row, column }) => {
      return state.board[row][column];
    }
  },
  mutations: {
    PLACE_DISC: (state, payload) => {
      console.log(payload);
      state.board[payload.row][payload.column].color = payload.color;
    }
  },
  actions: {
    placeDisc: ({ commit }, payload) => {
      commit("PLACE_DISC", payload)
    }
  }
};
