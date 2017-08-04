<template>
<div class="scoreboard">

  <div class="score">
    <label>Black</label>
    <div>
      {{ blackScore }}
    </div>
  </div>

  <div class="turn" >
    <label>Current Move</label>
    <div class="indicator">
      <div class="circle" :class="currentPlayer"></div>
    </div>
  </div>

  <div class="score">
    <label>White</label>
    <div>
      {{ whiteScore }}
    </div>
  </div>

</div>
</template>
<script>
export default {
  data() {
    return {
      blackScore: 2,
      whiteScore: 2,
      currentPlayer: "black"
    }
  },
  created() {
    Event.$on('updateScoreboard', (updates) => {
      this.blackScore = updates.blackScore
      this.whiteScore = updates.whiteScore
      this.currentPlayer = updates.currentPlayer
    })
    Event.$on('newGame', () => {
      this.blackScore = 2
      this.whiteScore = 2
      this.currentPlayer = "black"
    })
  }
}
</script>
<style lang="scss" scoped>
.scoreboard {
    max-width: 571px;
    margin: 0 auto;
    .score {
        width: 66px;
        height: 66px;
        display: inline-block;
        vertical-align: middle;
        label {
            display: block;
        }
        div {
            display: block;
            height: 44px;
            width: 66px;
            line-height: 44px;
        }
    }
    .turn {
        width: 140px;
        height: 88px;
        display: inline-block;
        vertical-align: middle;
        .indicator {
          .circle {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            margin: 0 auto;
            &.white {
              border: 1px solid black;
              background-color: white;
            }
            &.black {
              border: none;
              background-color: black;
            }
          }
        }
    }
}
</style>
