<script setup>
	import BaseLayout from '../components/base-layout.vue';

	const props = defineProps({
		author: String,
		source: String,
		cite: String,
	});
</script>

<template>
	<base-layout layout="statement">
	<figure class="quote">
		<blockquote><slot /></blockquote>
		<figcaption v-if="props.author">- {{ props.author }}<cite v-if="props.source">, {{ props.source }}</cite></figcaption>
	</figure>
	</base-layout>
</template>

<style scoped>
	.quote {
		@apply w-1/2 fixed top-1/2 font-quote;
		&:deep(blockquote) {
			@apply bg-transparent border-none;
		}

		&:deep(p) {
			@apply text-3xl font-quote leading-[2.2rem];
		}

		&:deep(figcaption) {
			@apply text-lg font-body font-light;

			&:deep(cite) {
				@apply not-italic;
			}
		}

		
	}
</style>