<template>
	<div class="card">
		<img v-if="props.image" :src="props.image" :alt="imageAlt">
		<address class="card-body">
			<p>{{ name }}</p>
			<p>{{ props.functionTitle }}</p>
			<p>{{ props.email }}</p>
			<p>{{ props.telephone }}</p>
		</address>
	</div>
</template>

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
		functionTitle: String,
		email: String,
		telephone: String,
		image: String,
	})

	const name = `${props.firstName} ${props.lastName}`;
	const imageAlt = `${name}'s profile picture`;
</script>

<style scoped>
	.card {
		@apply w-1/5 inline-block m-4;

		img {
			@apply mb-4;
		}

		p {
			@apply m-0 text-[0.8rem] leading-[1.4rem];
		}

		&:first-of-type {
			@apply ml-0;
		}
	}
</style>
