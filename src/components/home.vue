<template>
	<div id="home">
		<h1 class="heading_underline"><span class="typed_string"></span></h1>
		<div class="panel" v-html="body_copy"></div>
	</div>
</template>

<script>
import anime from 'animejs';
import Typed from 'typed.js';
import { createClient } from 'contentful';
import marked from 'marked';

export default {
	name: 'home',
	data: function() {
		return {
			body_copy: ''
		}
	},
	mounted() {
		const client = createClient({
			space: '3pya69lg4ary',
			accessToken: process.env.CONTENTFUL_TOKEN
		});

		client.getEntry('2kIbgqur1iqaGCSaoywi0m').then((entry) => {
			this.body_copy = marked(entry.fields.body_copy);
			console.log(this.body_copy);
		}).catch(console.error);

		let typed = new Typed(".typed_string", {
			strings: ["Hi. My name's Darren Segal.", "I like to code.", "Why wont this work tho?"],
			typeSpeed: 50
		});
	}
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

	#home {
		position: absolute;
		width: 90%;
		max-width: 800px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.heading_underline {
		width: 100%;
		height: 84px;

		&:before {
			content: '';
			width: 0;
			height: 1px;
			position: absolute;
			bottom: 0;
			left: 0;
			background-color: $blue;
			animation: heading-underline-animation 2s $ease-in-out-cubic;
			animation-fill-mode: both;
		}

		@keyframes heading-underline-animation {
			from {
				width: 0;
			}

			to {
				width: 100%;
			}
		}
	}
</style>
