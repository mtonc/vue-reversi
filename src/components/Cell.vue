<template>
<div class="cell" @click="placeDisc({
  row: row, 
  column: column, 
  color: activePlayer
})">
  <div class="circle" :class='color' v-if="color">
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  props: ['color','row', 'column'],
  data() {
    return {
      
    }
  },
  methods: {
  ...mapActions([
    'placeDisc'
  ])    
    
  },
  computed: {
    isEmpty: () => {
      if (this.color === null || this.color === undefined) {
        return true;
      }
      return false;
    },
    ...mapGetters({
      activePlayer: "getActivePlayer"
    })
  },
  created: function() {
  }
}
</script>

<style>
.cell {
  width: 66px;
  height: 66px;
  display: inline-block;
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
