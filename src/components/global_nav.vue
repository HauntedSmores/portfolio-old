<template>
  <nav class="row" :class="[{ hover_ready: hover_ready, underline_ready: underline_ready }, nav_state]">
	  <router-link v-for="(link, index) in this.$router.options.routes" :key="index" :to="link.path" class="nav_link">{{ link.name }}</router-link>
  </nav>
</template>

<script>
import anime from 'animejs';

export default {
	name: 'global-nav',
	props: ['active'],
	data: function() {
		return {
			hover_ready: false,
			underline_ready: false,
			nav_state: ''
		}
	},
	watch: {
		active: function(value) {
			if (value == false) {
				anime({
					targets: 'nav',
					translateY: [-60, 0],
					duration: 1000,
					easing: 'easeInOutQuart',
					complete: (anim) => {
						this.underline_ready = true;
						anime.remove('.nav-link');
					}
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
		},
		$route(route) {
			this.nav_state = route.name;
		}
	},
	mounted() {
		this.nav_state = this.$route.name;
	}
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    nav {
		position: absolute;
		left: 0;
		top: 0;
        height: 60px;
		transform: translateY(-60px);
        border-bottom: 1px solid $white;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 12px;

		&:after {
			content: '';
			position: absolute;
			bottom: -1px;
			right: 100%;
			width: 100%;
			height: 1px;
			background-color: $blue;
			transition: right 1.25s $ease-out-cubic;
		}

		&.underline_ready.home:after {
			right: calc(66.66% - 4px);
		}

		&.underline_ready.work:after {
			right: calc(33.33% + 16px);
		}

		&.underline_ready.contact:after {
			right: 0;
		}

		&.underline_ready {
			.nav_link.router-link-active {
				color: $blue;
			}
		}

		&.hover_ready .nav_link {
			transition: color 1s, transform 0.5s;
			&:hover {
				transform: translateY(-5px) !important;
			}
		}
    }

	.nav_link {
		color: $white;
		transform: translateY(-60px);
		text-transform: capitalize;
		margin: 0 12px;
		transition: color 1s;
	}

</style>
