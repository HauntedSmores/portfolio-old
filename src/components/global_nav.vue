<template>
  <nav :class="{ hover_ready: hover_ready }">
	  <router-link>Home</router-link>
	  <a class="nav_link">Work</a>
	  <a class="nav_link">Contact</a>
  </nav>
</template>

<script>
import anime from 'animejs';

export default {
	name: 'global-nav',
	props: ['active'],
	data: function() {
		return {
			hover_ready: false
		}
	},
	watch: {
		active: function(value) {
			if (value == false) {
				anime({
					targets: 'nav',
					translateY: [-60, 0],
					duration: 1000,
					easing: 'easeInOutQuart'
				});

				anime({
					targets: '.nav_link',
					translateY: [-60, 0],
					duration: 2000,
					elasticity: 300,
					delay: (el, i) => {
						return (i * 200) + 500;
					},
					complete: (anim) => {
						this.hover_ready = true;
						anime.remove('.nav-link');
					}
				});
			}
		}
	},
	mounted() {

		// anime({
		// 	targets: 'nav',
		// 	translateY: [-60, 0],
		// 	duration: 1000,
		// 	easing: 'easeInOutQuart'
		// });
		//
		// anime({
		// 	targets: '.nav_link',
		// 	translateY: [-60, 0],
		// 	duration: 2000,
		// 	elasticity: 300,
		// 	delay: (el, i) => {
		// 		return (i * 200) + 500;
		// 	},
		// 	complete: (anim) => {
		// 		anime.remove('.nav-link');
		// 	}
		// });
	}
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    nav {
		width: 25%;
        height: 60px;
		min-width: 250px;
		transform: translateY(-60px);
        border-bottom: 1px solid $white;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 12px;
		overflow: hidden;

		&.hover_ready .nav_link {
			transition: transform 0.5s;

			&:hover {
				transform: translateY(-5px) !important;
			}
		}
    }

	.nav_link {
		color: $white;
		transform: translateY(-60px);
	}

</style>
