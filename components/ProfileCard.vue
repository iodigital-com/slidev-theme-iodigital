<script setup>

	const props = defineProps({
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		functionTitle: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: false,
		},
		telephone: {
			type: String,
			required: false,
		},
		imgUrl: {
			type: String,
			required: false,
		},
	})
</script>

<template>
	<div class="card">
		<img v-if="props.imgUrl" :src="props.imgUrl">
		<div class="card-body">
			<p>{{ props.firstName }} {{ props.lastName }}</p>
			<p>{{ props.functionTitle }}</p>
			<p>{{ props.email }}</p>
			<p>{{ props.telephone }}</p>
		</div>
	</div>
</template>

<style scoped>
	.card {
		@apply w-1/5 inline-block m-[1rem];

		p {
			@apply m-0 text-[0.8rem] leading-[1.4rem];
		}

		&:first-of-type {
			@apply ml0;
		}
	}
</style>