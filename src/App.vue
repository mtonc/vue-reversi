<template>
  <div id="app">
    <Scoreboard />
    <Grid />
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import Scoreboard from "./components/Scoreboard.vue";

export default {
  name: "App",
  components: {
    Scoreboard,
    Grid
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
