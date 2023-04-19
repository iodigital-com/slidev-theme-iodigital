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

<template>
	<div class="card">
		<img v-if="props.image" :src="props.image" :alt="imageAlt" >
		<div class="card-body">
			<p>{{ name }}</p>
			<p>{{ props.functionTitle }}</p>
			<address>
				<p>{{ props.email }}</p>
				<p>{{ props.telephone }}</p>
			</address>
		</div>
	</div>
</template>

<style scoped>
	.card {
		@apply w-1/5 inline-block m-4;

		p {
			@apply m-0 text-[0.8rem] leading-[1.4rem];
		}

		&:first-of-type {
			@apply ml-0;
		}
	}
</style>