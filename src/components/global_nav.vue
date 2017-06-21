<template>
  <nav></nav>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'global-nav',
  data() {
      return {

      }
  },
  props: ['active'],
  watch: {
      active: function(value) {
          console.log(value);
          if (value == false) {
              anime({
                  targets: 'nav',
                  height: '60px',
                  duration: 500,
                  easing: 'easeOutCubic'
              });
          }
      }
  },
  methods: {
  }
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    nav {
        height: 0;
        background-color: $pink;
    }

</style>
