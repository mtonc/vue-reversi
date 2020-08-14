<template>
  <div class="cell" @click="requestValidation">
    <div class="circle" :class="color" v-if="color"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["color", "row", "column"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["placeDisc"]),
    requestValidation: function() {
      this.$eventBus.$emit("requestValidation", this);
    },
    compareCells: function(cellOne, cellTwo) {
      if (
        cellOne.color == cellTwo.color &&
        cellOne.row == cellTwo.row &&
        cellOne.column == cellTwo.column
      ) {
        return true;
      }
      return false;
    },
    requestListener: function() {
      this.$eventBus.$on("requestValidated", payload => {
        if (this.compareCells(payload, this)) {
          this.placeDisc({
            row: this.row,
            column: this.column,
            color: this.activePlayer
          });
        }
      });
    }
  },
  computed: {
    ...mapGetters({
      activePlayer: "getActivePlayer"
    })
  },
  mounted: function() {
    this.requestListener();
  }
};
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
