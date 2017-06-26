<template>
  <div id="home" class="panel">
	  <div class="border_top border_edge"></div>
	  <div class="border_right border_edge"></div>
	  <div class="border_bottom border_edge"></div>
	  <div class="border_left border_edge"></div>
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

		&.border_top, &.border_bottom {
			width: 0;
			height: 2px;
		}

		&.border_left, &.border_right {
			width: 0;
			height: 2px;
		}
	}

</style>
