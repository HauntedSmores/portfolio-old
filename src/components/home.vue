<template>
  <div id="home" class="panel">
	  <div class="border_edge border_top"></div>
	  <div class="border_edge border_right"></div>
	  <div class="border_edge border_bottom"></div>
	  <div class="border_edge border_left"></div>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta justo quis tortor tempor cursus. Ut malesuada enim a viverra convallis. Duis pellentesque luctus sapien at volutpat. In nec justo a dui aliquet facilisis id sit amet lacus. Integer commodo euismod augue ac ornare. Mauris a malesuada arcu, eu imperdiet enim. Curabitur viverra consectetur quam, quis mattis diam scelerisque at. Aliquam ullamcorper efficitur congue. In vel erat sodales risus pharetra elementum.</p>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
	name: 'home',
	data: function() {
		return {
		}
	},
	mounted() {
	}
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

	.border_edge {
		position: absolute;
		background-color: white;

		&.border_top, &.border_bottom {
			width: 100%;
			height: 4px;
		}

		&.border_left, &.border_right {
			width: 4px;
			height: 100%;
		}

		&.border_left {
			top: 0;
			left: 0;
		}

		&.border_right {
			top: 0;
			right: 0;
		}

		&.border_top {
			top: 0;
			left: 0;
		}

		&.border_bottom {
			right: 0;
			bottom: 0;
		}
	}

</style>
