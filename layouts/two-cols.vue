<script setup>
	import BaseLayout from './base-layout.vue';
	const props = defineProps({
		division: {
			type: String,
			default: "50/50",
			validator: (value) => (/^([1-9]\d*)\/([1-9]\d*)$/).test(value)
		},
	});

	const division = props.division.split('/').map(item => `${item}fr`).join(" ");
</script>

<template>
	<base-layout layout="two-cols">
		<div class="h-full grid gap-12 place-content-center" :style="{ gridTemplateColumns: division }">
			<div><slot /></div>
			<div><slot name="right" /></div>
		</div>
	</base-layout>
</template>