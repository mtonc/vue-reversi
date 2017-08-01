<template>
<td class="cell" @click="placeDisc">
<div class="circle" :class='mark' v-if="mark">
</div>
</td>
</template>

<script>
export default {
  props: ['defaultVal','name'],
  data() {
    return {
      frozen: false,
      mark: '',
      lastMark: null,
      lastFrozen: null
    }
  },
  methods: {
    placeDisc() {
      if (!this.frozen) {
        // this.prepUndo()
        this.mark = this.$parent.activePlayer
        this.frozen = true
        Event.$emit('placeDisc', Number(this.name))
      }
    },
    prepUndo() {
      this.lastMark = this.mark
      this.lastFrozen = this.frozen
    }
  },
  created: function() {
    //if there is a default value, set the disc
    //used to set the center tile
    if (this.defaultVal != undefined) {
      this.mark = this.defaultVal
      this.frozen = true
      // this.prepUndo()
    }

    //used to reset the cells at end of gaem
    Event.$on('clearCell', () => {
      // this.prepUndo()
      this.mark = ''
      this.frozen = false
    })


    //used to clear the cell if the move is invalid
    Event.$on('invalidMove', (cell) => {
      if (cell == Number(this.name)){
        this.mark = ''
        this.frozen = false
      }
    })

    Event.$on('flipDisc', (cell) => {
      // this.prepUndo()
      if (cell == Number(this.name)) {
        if( this.mark === 'black'){
          this.mark = 'white'
        }
        else if (this.mark === 'white'){
          this.mark = 'black'
        }
      }
    })
    Event.$on('undo', () => {
      this.mark = this.lastMark
      this.frozen = this.lastFrozen
    })
  }
}
</script>

<style>
.cell {
  width: 66px;
  height: 66px;
  border: 2px solid #000;
  font-size: 3.5em;
}

.cell:hover {
  background-color: #008108;
}

.cell::after {
  content: '';
  display: block;
}

.cell .circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.white {
  background-color: white;
}
.black {
  background-color: black;
}
</style>
