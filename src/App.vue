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
	  <canvas id="snow"></canvas>
    <router-view></router-view>
  </div>
</template>

<script>
import anime from 'animejs';
import * as pixi from 'pixi.js';
import GlobalNav from './components/global_nav';

export default {
	name: 'app',
	components: {
	  GlobalNav
	},
	data() {
	  return {
	      text_animation: true,
		  renderer: null,
		  stage: null
	  }
	},
	mounted() {

		console.log(document.documentElement.clientHeight);

		//Create the renderer
		let canvas = document.getElementById('snow');
		this.renderer = pixi.autoDetectRenderer(document.documentElement.clientWidth, document.documentElement.clientHeight, {view: canvas, transparent: true, antialias: true});
		this.stage = new pixi.Container();
		this.renderer.resize = true;

		setInterval(this.snow_machine(), 1000);

		let temp_this = this;

		this.canvas_loop();

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

		anime({
			targets: '.letter',
			translateY: ['100%', '0%'],
			opacity: 1,
			duration(el, i, length) {
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
	  },
	  canvas_loop() {
		  requestAnimationFrame(this.canvas_loop);
		  this.renderer.render(this.stage);
	  },
	  snow_machine() {
		  for (let i = 0; i < 10; i++) {
  			let circle = new pixi.Graphics();
  			let x = Math.floor((Math.random() * window.innerWidth) + 10);
  			circle.beginFill('0xFCFFFD');
  			circle.drawCircle(x, -20, 10);
  			circle.endFill();
  			circle.filters = [new PIXI.filters.BlurFilter(10)];
  			this.stage.addChild(circle);
			anime({
				targets: circle,
				y: window.innerHeight + 20,
				duration: 5000,
				easing: 'easeOutSine',
				delay: () => {
					let temp = (Math.floor((Math.random() * 10) + 1)) * 1000;
					console.log(temp)
					return temp;
				}
			});
  		}
	  }
	}
}
</script>

<style lang="scss">
    @import './assets/scss/main';

    #app {
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
		color: white;
    }

</style>
