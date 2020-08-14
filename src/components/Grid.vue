<template>
  <div class="grid-component">
    <div
      class="row"
      v-for="row in board"
      :key="
        row.reduce((id, elem) => {
          id += elem.row * 10 + elem.column;
        })
      "
    >
      <Cell
        v-for="cell in row"
        :key="cell.row * 10 + cell.column"
        :color="cell.color"
        :row="cell.row"
        :column="cell.column"
      />
    </div>
  </div>
</template>

<script>
import Cell from "./Cell.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Cell
  },
  methods: {
    ...mapActions(["switchPlayer", "flipDisc"]),
    ...mapGetters(["getCell"]),
    flipDiscs: function(cell, vector) {
      if (cell.color != this.activePlayer) {
        this.flipDisc({ row: cell.row, column: cell.column });
        return this.flipDiscs(
          this.getCell()(
            cell.row + vector.deltaRow,
            cell.column + vector.deltaColumn
          ),
          vector
        );
      }
      if (cell.color == this.activePlayer) {
        return;
      }
    },
    validateMove: function(cell, vector, step = 0) {
      if (step === 0) {
        if (cell.isEmpty == false && cell.color != this.activePlayer) {
          return this.validateMove(
            this.getCell()(
              cell.row + vector.deltaRow,
              cell.column + vector.deltaColumn
            ),
            vector,
            ++step
          );
        } else {
          console.log("stop step 0");
          return false;
        }
      }

      if (cell.isEmpty == false && cell.color != this.activePlayer) {
        if (this.isInBounds(cell, vector)) {
          return this.validateMove(
            this.getCell()(
              cell.row + vector.deltaRow,
              cell.column + vector.deltaColumn
            ),
            vector,
            ++step
          );
        }
        return false;
      } else if (cell.isEmpty == false && cell.color == this.activePlayer) {
        return true;
      } else {
        return false;
      }
    }
  },
  computed: {
    ...mapGetters({
      board: "getBoard",
      activePlayer: "getActivePlayer"
    }),
    isInBounds: function(cell, vector) {
      if (
        (cell.row + vector.deltaRow >= 0 || cell.row + vector.deltaRow <= 7) &&
        (cell.column + vector.deltaColumn >= 0 ||
          cell.column + vector.deltaColumn <= 7)
      ) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      vectors: {
        N: { deltaRow: -1, deltaColumn: 0 },
        NE: { deltaRow: -1, deltaColumn: 1 },
        E: { deltaRow: 0, deltaColumn: 1 },
        SE: { deltaRow: 1, deltaColumn: 1 },
        S: { deltaRow: 1, deltaColumn: 0 },
        SW: { deltaRow: 1, deltaColumn: -1 },
        W: { deltaRow: 0, deltaColumn: -1 },
        NW: { deltaRow: -1, deltaColumn: -1 }
      },
      vectorResults: {
        N: false,
        NE: false,
        E: false,
        SE: false,
        S: false,
        SW: false,
        W: false,
        NW: false
      }
    };
  },
  created: function() {
    this.$eventBus.$on("requestValidation", payload => {
      for (const [key, dir] of Object.entries(this.vectors)) {
        this.vectorResults[key] = this.validateMove(
          this.getCell()(
            payload.row + dir.deltaRow,
            payload.column + dir.deltaColumn
          ),
          dir
        );
      }
      if (Object.values(this.vectorResults).includes(true)) {
        this.$eventBus.$emit("requestValidated", payload);
        for (const [key , value] of Object.entries(this.vectorResults)) {
          if (value) {
            const vector = this.vectors[key];
            this.flipDiscs(
              this.getCell()(
                payload.row + vector.deltaRow,
                payload.column + vector.deltaColumn
              ),
              vector
            );
          }
        }
      }
    });
  }
};
</script>

<style>
.grid-component {
  margin: 0 auto;
  width: calc(70px * 8);
  height: calc(calc(66px * 8) + 2px);
  background-color: #009e0b;
}

.row {
  height: 66px;
}
</style>
