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
		@apply w-1/2 fixed top-[50%] text-3xl leading-loose;
		font-family: "reckless";
		background-color: transparent;
		border: 0;
	}
</style>