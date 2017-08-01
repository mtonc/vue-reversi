<template>
<div class="grid-component">
  <table class="grid">
    <tr>
      <cell name="1"></cell>
      <cell name="2"></cell>
      <cell name="3"></cell>
      <cell name="4"></cell>
      <cell name="5"></cell>
      <cell name="6"></cell>
      <cell name="7"></cell>
      <cell name="8"></cell>
    </tr>
    <tr>
      <cell name="9"></cell>
      <cell name="10"></cell>
      <cell name="11"></cell>
      <cell name="12"></cell>
      <cell name="13"></cell>
      <cell name="14"></cell>
      <cell name="15"></cell>
      <cell name="16"></cell>
    </tr>
    <tr>
      <cell name="17"></cell>
      <cell name="18"></cell>
      <cell name="19"></cell>
      <cell name="20"></cell>
      <cell name="21"></cell>
      <cell name="22"></cell>
      <cell name="23"></cell>
      <cell name="24"></cell>
    </tr>
    <tr>
      <cell name="25"></cell>
      <cell name="26"></cell>
      <cell name="27"></cell>
      <cell name="28" defaultVal="white"></cell>
      <cell name="29" defaultVal="black"></cell>
      <cell name="30"></cell>
      <cell name="31"></cell>
      <cell name="32"></cell>
    </tr>
    <tr>
      <cell name="33"></cell>
      <cell name="34"></cell>
      <cell name="35"></cell>
      <cell name="36" defaultVal="black"></cell>
      <cell name="37" defaultVal="white"></cell>
      <cell name="38"></cell>
      <cell name="39"></cell>
      <cell name="40"></cell>
    </tr>
    <tr>
      <cell name="41"></cell>
      <cell name="42"></cell>
      <cell name="43"></cell>
      <cell name="44"></cell>
      <cell name="45"></cell>
      <cell name="46"></cell>
      <cell name="47"></cell>
      <cell name="48"></cell>
    </tr>
    <tr>
      <cell name="49"></cell>
      <cell name="50"></cell>
      <cell name="51"></cell>
      <cell name="52"></cell>
      <cell name="53"></cell>
      <cell name="54"></cell>
      <cell name="55"></cell>
      <cell name="56"></cell>
    </tr>
    <tr>
      <cell name="57"></cell>
      <cell name="58"></cell>
      <cell name="59"></cell>
      <cell name="60"></cell>
      <cell name="61"></cell>
      <cell name="62"></cell>
      <cell name="63"></cell>
      <cell name="64"></cell>
    </tr>
  </table>
  <button type="button" class="undo-btn" @click='undo'>Undo</button>
</div>
</template>

<script>
import Cell from "./Cell.vue"
export default {
  components: {
    Cell
  },
  methods: {
    changePlayer() {
      if (this.activePlayer === 'white') {
        this.activePlayer = 'black'
        this.inactivePlayer = 'white'
      } else if (this.activePlayer === 'black') {
        this.activePlayer = 'white'
        this.inactivePlayer = 'black'
      }
    },
    checkDirection(color, cell, direction) {
      cell = Number(cell)
      if (cell < 0 || cell > 64 || cell % 8 == 1 || cell % 8 == 0) {
        return false
      } else if (this.cells[cell] === color) {
        return cell
      } else if (this.cells[cell] !== color) {
        return this.checkDirection(color, (cell + direction), direction)
      }
    },
    flipDiscs(cell, positions) {
      cell = Number(cell)
      if (positions.up !== -1) {
        for (var i = cell - 8; i >= (positions.up + 8); i -= 8) {
          this.cells[i] = this.cells[cell]
          Event.$emit('flipDisc', i)
          if (i > 64 || i < 0) {
            return false
          }
        }
      }
      if (positions.right !== -1) {
        for (var i = cell + 1; i <= (positions.right - 1); i++) {
          this.cells[i] = this.cells[cell]
          Event.$emit('flipDisc', i)
          if (i > 64 || i < 0) {
            return false
          }
        }
      }
      if (positions.down !== -1) {
        for (var i = cell + 8; i <= (positions.down - 8); i += 8) {
          this.cells[i] = this.cells[cell]
          Event.$emit('flipDisc', i)
          if (i > 64 || i < 0) {
            return false
          }
        }
      }
      if (positions.left !== -1) {
        for (var i = cell - 1; i >= (positions.left + 1); i--) {
          this.cells[i] = this.cells[cell]
          Event.$emit('flipDisc', i)
          if (i > 64 || i < 0) {
            return false
          }
        }
      }
    },
    undo() {
      this.cells = this.lastCells
      this.changePlayer()
      Event.$emit('undo')
    },
    validateMove(cell) {
      cell = Number(cell)
      var retBool = false
      var foundAt = false
      var indexes = {
        "up": -1,
        "right": -1,
        "down": -1,
        "left": -1
      }

      //make sure an adjacent cell is occupied
      if (this.cells[cell + 1] !== "" || this.cells[cell - 1] !== "" || this.cells[cell + 8] !== "" || this.cells[cell - 8] !== "") {
        //check going up
        //cell must not be in first two rows
        if (cell > 16) {
          if (this.cells[cell] !== this.cells[cell - 8] && this.cells[cell - 8] !== "") {
            foundAt = this.checkDirection(this.cells[cell], cell - 8, this.directions.up)
            if (foundAt) {
              console.log("up true")
              retBool = true
              indexes.up = foundAt
            }
          }
        }
        //check going down
        //cell must not be in lat two rows
        if (cell < 49) {
          if (this.cells[cell] !== this.cells[cell + 8] && this.cells[cell + 8] !== "") {
            foundAt = this.checkDirection(this.cells[cell], cell + 8, this.directions.down)
            if (foundAt) {
              console.log("down true")
              retBool = true
              indexes.down = foundAt
            }
          }
        }

        //check going left
        //cell must not be in first two columns
        if (cell !== 1 && cell !== 2 && cell !== 9 && cell !== 10 && cell !== 17 && cell !== 18 && cell !== 25 && cell !== 26 && cell !== 33 && cell !== 34 && cell !== 41 && cell !== 42 && cell != 49 && cell != 50 && cell !== 57 && cell !== 58) {
          if (this.cells[cell] != this.cells[cell - 1] && this.cells[cell - 1] != "") {
            foundAt = this.checkDirection(this.cells[cell], cell - 1, this.directions.left)
            if (foundAt) {
              console.log(foundAt)
              console.log("left true")
              retBool = true
              indexes.left = foundAt
            }
          }
        }

        //check going right
        if (cell !== 7 && cell !== 8 && cell !== 15 && cell !== 16 && cell !== 23 && cell !== 24 && cell !== 31 && cell !== 32 && cell !== 39 && cell !== 40 && cell !== 47 && cell !== 48 && cell != 55 && cell != 56 && cell !== 63 && cell !== 64) {
          if (this.cells[cell] !== this.cells[cell + 1] && this.cells[cell + 1] !== "") {
            foundAt = this.checkDirection(this.cells[cell], cell + 1, this.directions.right)
            if (foundAt) {
              console.log("right true")
              retBool = true
              indexes.right = foundAt
            }
          }
        }
      } else {
        return false
      }

      if (retBool) {
        return indexes
      } else {
        return false
      }
    }

  },
  created() {
    Event.$on('placeDisc', (cell) => {
    //  this.lastCells = this.cells
      cell = Number(cell)
      this.cells[cell] = this.activePlayer
      var positions = this.validateMove(cell)
      if (positions) {
        this.flipDiscs(cell, positions)
        this.changePlayer()
      } else {
        Event.$emit('invalidMove', cell)
        this.cells[cell] = ""
      }
    })
  },
  data() {
    return {
      activePlayer: 'black',
      directions: {
        'up': -8,
        'left': -1,
        'down': 8,
        'right': 1
      },
      errorMSG: null,
      inactivePlayer: 'white',
      gameStatus: 'turn',
      gameStatusColor: "",
      gameStatusMessage: "O's turn",
      lastCells: {},
      moves: 0,
      cells: {
        1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "",
        9: "", 10: "", 11: "", 12: "", 13: "", 14: "",  15: "", 16: "",
        17: "", 18: "", 19: "", 20: "", 21: "", 22: "", 23: "", 24: "",
        25: "", 26: "", 27: "", 28: "white", 29: "black", 30: "", 31: "",32: "",
        33: "", 34: "", 35: "", 36: "black", 37: "white", 38: "", 39: "",40: "",
        41: "", 42: "", 43: "", 44: "", 45: "", 46: "", 47: "", 48: "",
        49: "", 50: "", 51: "", 52: "", 53: "", 54: "", 55: "", 56: "",
        57: "", 58: "", 59: "", 60: "", 61: "", 62: "", 63: "", 64: "",
      },
    }
  }
}
</script>

<style>
.grid {
  background-color: #009E0B;
  color: #fff;
  max-width: 600px;
  border-collapse: collapse;
  margin: 0 auto;
}

.gameStatus {
  margin: 0px;
  padding: 15px;
  border-up-left-radius: 20px;
  border-up-right-radius: 20px;
  background-color: #f1c40f;
  color: #fff;
  font-size: 1.4em;
  font-weight: bold;
}

.statusTurn {
  background-color: #f1c40f;
}

.statusWin {
  background-color: #2ecc71;
}

.statusDraw {
  background-color: #9b59b6;
}

.undo-btn {
  height: 30px;
  width: 600px;
  border: none;
  background-color: red;
  color: white;
}
</style>
