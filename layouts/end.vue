<script setup>
import IconIoLogo from '~icons/io/logo';
import BaseLayout from '../components/base-layout.vue';
</script>

<template>
	<base-layout layout="end" class="bg-blend-purple">
		<IconIoLogo class="logo" />
		<h1 class="title">
			Together we see<br>
			<em>Infinite Opportunities</em>
		</h1>
	</base-layout>
</template>

<style scoped>
.slidev-layout.end {
	@apply flex justify-start items-center;
}
.logo {
	@apply absolute w-24 h-24 left-14 top-14;
}
.title {
	justify-self: center;
}
</style>