<template>
  <div id="app">
	  <canvas id="snow"></canvas>
      <global-nav v-bind:active="text_animation"></global-nav>
      <div id="intro_animation" v-show="landing">
          <div id="text_panel">
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
import * as pixi from 'pixi.js';
import GlobalNav from './components/global_nav';
import Home from './components/home';

export default {
	name: 'app',
	components: {
	  GlobalNav,
	  Home
	},
	data() {
	  return {
	      text_animation: true,
		  landing: false
	  }
	},
	mounted() {
		console.log(this.$route.name);
		if (this.$route.name == 'home') {
			this.landing = false;
			this.text_animation = false;
		} else {
			this.landing = true;
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
						duration: 1200,
						delay: 2000,
						easing: 'easeInOutCubic',
						complete: () => {
							this.text_animation = false;
						}
					});
				}
			});

			anime({
				targets: '.letter',
				translateY: ['100%', '0%'],
				opacity: 1,
				duration(el, i) {
				  return 1000 + (Math.pow(i, 2) * 10);
				},
				delay(el, i) {
				  return 800 + (i * 100);
				},
				elasticity: 100,
				direction: 'alternate'
			});
		}

		let canvas = document.getElementById('snow');
		let renderer = pixi.autoDetectRenderer(document.documentElement.clientWidth, document.documentElement.clientHeight, {view: canvas, transparent: true, antialias: true});
		renderer.resize = true;
		let stage = new pixi.Container();

		this.snow_machine(stage, renderer);

		setInterval(() => { this.snow_machine(stage, renderer) }, 15000);


	},
	methods: {
		snow_machine(stage, renderer) {
			let snow = [];
			for (let i = 0; i < 10; i++) {
				let circle = new pixi.Graphics();
				let x = Math.floor((Math.random() * window.innerWidth) + 10);
				circle.beginFill('0xFCFFFD');
				circle.drawCircle(x, window.innerHeight, 2);
				circle.endFill();
				circle.filters = [new PIXI.filters.BlurFilter(1)];
				stage.addChild(circle);
				snow.push(circle);
			}
			anime({
				targets: snow,
				y: -(window.innerHeight + 4),
				duration: 10000,
				easing: 'easeOutSine',
				delay: (el, i) => {
					return i * 1000
				},
				update: () => {
					renderer.render(stage);
				},
				complete: () => {
					for (let circle of snow) {
						circle.clear();
					}
				}
			});
		}
	}
}
</script>

<style lang="scss">
    @import './assets/scss/main';

    #app {
		position: relative;
        background-color: $blue;
        height: 100%;
		background: linear-gradient(45deg, rgba(250,200,205,1) 5%,rgba(191,215,234,1) 50%,rgba(191,215,234,1) 50%,rgba(128,255,232,1) 100%);
    }

	#snow {
		position: fixed;
		top: 0;
		left: 0;
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
		color: $white;
    }

	.panel {
		position: absolute;
		width: 42%;
		height: 75%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 4px solid $white;
	}

</style>
