<script setup>
	import BaseLayout from './base-layout.vue';
</script>

<template>
	<base-layout layout="statement">
		<blockquote class="quote"><slot /></blockquote>
	</base-layout>
</template>

<style scoped>
	.quote {
		@apply w-1/2 fixed top-[50%] bg-transparent border-0;

		&:deep(p) {
			@apply text-3xl font-quote leading-[2.2rem];
		}
	}
</style>