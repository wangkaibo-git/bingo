<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: 'app',
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  top: 0;
  left: 0;
}
  html, body{
    height: 100%;
  }
  @import "./yangshi/css/index.css";

</style>
<style lang="stylus">
  @import "./yangshi/css1/index.styl";
</style>
