<template>
  <div id="app">
      <global-nav v-bind:active="text_animation"></global-nav>
      <div v-if="text_animation" id="intro_animation">
          <div id="text_panel" @click="rerun_text">
              <span class="letter">W</span>
              <span class="letter">e</span>
              <span class="letter">l</span>
              <span class="letter">c</span>
              <span class="letter">o</span>
              <span class="letter">m</span>
              <span class="letter">e</span>
          </div>
          <div id="intro_line"></div>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import anime from 'animejs';
import GlobalNav from './components/global_nav';

export default {
  name: 'app',
  components: {
      GlobalNav
  },
  data() {
      return {
          text_animation: true
      }
  },
  mounted() {

      anime({
         targets: '#intro_line',
         left: '50%',
         width: '100%',
         duration: 2000,
         easing: 'easeInOutCubic',
         complete: () => {
             anime({
                targets: '#intro_line',
                width: '0',
                left: ['50%', '0%'],
                duration: 1000,
                delay: 3500,
                easing: 'easeInOutCubic',
                complete: () => {
                    this.text_animation = false;
                }
             });
         }
      });

      this.text_animation = anime({
          targets: '.letter',
          translateY: ['100%', '0%'],
          opacity: 1,
          duration(el, i, length) {
              console.log(2000 + (Math.pow(i, 2) * 100));
              return 1500 + (Math.pow(i, 2) * 10);
          },
          delay(el, i) {
              return 800 + (i * 100);
          },
          elasticity: 100,
          direction: 'alternate'
      });
  },
  methods: {
      rerun_text() {
          this.text_animation.restart();
      }
  }
}
</script>

<style lang="scss">
    @import './assets/scss/main';

    #app {
        background-color: $blue;
        height: 100%;
    }

    #intro_animation {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #text_panel {
        white-space: nowrap;
        overflow: hidden;
    }

    #intro_line {
        position: absolute;
        left: 0;
        transform: translateX(-50%);
        height: 1px;
        background-color: $white;
    }

    .letter {
        @extend h1;
        font-size: 3rem;
        opacity: 0;
        display: inline-block;
        margin: 0;
        line-height: 1;
    }

</style>
