<template>
  <div class="grid-component">
    <div class="row" v-for="row in board" :key="row.reduce((id, elem) => {
        id += elem.row*10+elem.column
      })">
      <Cell 
        v-for="cell in row" 
        :key="cell.row*10+cell.column"
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
    ...mapActions(["switchPlayer"])
  },
  computed: {
    ...mapGetters({
      board: "getBoard"
    })
  }
}
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
