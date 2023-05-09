<template>
	<BaseLayout layout="end" class="bg-blend-purple">
		<IconIoLogo class="logo" />
		<h1 class="title">
			Together we see<br>
			<em>Infinite Opportunities</em>
		</h1>
	</BaseLayout>
</template>

<script setup>
import IconIoLogo from '~icons/io/logo';
import BaseLayout from '../components/BaseLayout.vue';
</script>

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