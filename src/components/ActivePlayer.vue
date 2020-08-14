<template>
  <div class="current-player" :class="activePlayer">{{ activePlayer }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      activePlayer: "getActivePlayer"
    })
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
    background-color: #fff;
    color: #000;
  }

  &.black {
    background-color: #000;
    color: #fff;
  }
}
</style>
