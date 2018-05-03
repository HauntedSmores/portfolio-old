<template>
  <div id="app" class="flex">
      <Links/>
    <Pixi/>
  </div>
</template>

<script>
import Pixi from "@/components/Pixi";
import Links from "@/components/Links";

export default {
  name: "App",
  components: {
    Pixi,
    Links
  }
};
</script>

<style lang="scss">
    @import '~@/assets/scss/main';

    #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      background-color: #201d35;
    }
</style>
