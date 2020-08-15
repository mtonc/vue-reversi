<template>
  <div class="scoreboard">
    <div class="player_score-white">{{ whiteScore }}</div>
    <div class="current-player" :class="activePlayer">{{ activePlayer }}</div>
    <div class="player_score-black">{{ blackScore }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      activePlayer: "getActivePlayer"
    }),
    whiteScore: function() {
      return this.getScore()("white");
    },
    blackScore: function() {
      return this.getScore()("black");
    }
  },
  methods: {
    ...mapGetters(["getScore"])
  }
};
</script>

<style scoped lang="scss">
.current-player {
  width: 30%;
  margin: 0 auto;
  font-size: 1em;
  line-height: 1.2em;
  text-align: center;

  &.white {
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  }

  &.black {
    background-color: #000;
    color: #fff;
  }
}
</style>
