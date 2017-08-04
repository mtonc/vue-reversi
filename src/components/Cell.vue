<template>
<td class="cell" @click="placeDisc">
  <div class="circle" :class='mark' v-if="mark">
  </div>
</td>
</template>

<script>
export default {
  props: ['defaultVal', 'name'],
  data() {
    return {
      frozen: false,
      mark: '',
    }
  },
  methods: {
    placeDisc() {
      if (!this.frozen) {
        this.mark = this.$parent.activePlayer
        this.frozen = true
        Event.$emit('placeDisc', Number(this.name))
      }
    },
  },
  created: function() {
    //if there is a default value, set the disc
    //used to set the center tile
    if (this.defaultVal != undefined) {
      this.mark = this.defaultVal
      this.frozen = true
    }

    //used to reset the cells at end of gaem
    Event.$on('clearCell', () => {
      this.mark = ''
      this.frozen = false
    })


    //used to clear the cell if the move is invalid
    Event.$on('invalidMove', (cell) => {
      if (cell == Number(this.name)) {
        this.mark = ''
        this.frozen = false
      }
    })

    //on flipDisc, change the color of the disc
    Event.$on('flipDisc', (cell) => {
      if (cell == Number(this.name)) {
        if (this.mark === 'black') {
          this.mark = 'white'
        } else if (this.mark === 'white') {
          this.mark = 'black'
        }
      }
    })

    Event.$on('newGame', () => {
      this.frozen = false;
      if (this.defaultVal) {
        this.mark = this.defaultVal
        this.frozen = true
      }
      else {
        this.mark = ""
      }
    })
  }
}
</script>

<style scoped>
.cell {
  background-color: #009E0B;
  box-shadow: #1B6A20 1px 2px 2px;
  width: 66px;
  height: 66px;
}

.cell:hover {
  background-color: #008108;
}

.cell .circle {
  margin: 0 auto;
  width: 90%;
  height: 90%;
  border-radius: 50%;
}

.white {
  background-color: white;
}

.black {
  background-color: black;
}
</style>
