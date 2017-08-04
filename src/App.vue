<template>
  <div id="app">
    <scoreboard></scoreboard>
    <grid></grid>
  </div>
</template>

<script>
import Grid from "./components/Grid.vue"
import Scoreboard from "./components/Scoreboard.vue"
export default {
  name: 'app',
  components:{
    Grid,
    Scoreboard
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 80%;
  margin: 0 auto;
}
</style>
