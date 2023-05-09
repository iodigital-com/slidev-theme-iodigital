<template>
	<section class="slidev-layout" :class="classNames">
		<slot />
	</section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    layout: {
        type: String,
        required: true,
    },
});

const classNames = computed(() => props.layout);
</script>

<style>
.bg-blend-orange {
    @apply text-white;
    background: url('/blends/orange.jpg') no-repeat center center;
}
.bg-blend-blue {
    @apply text-white;
    background: url('/blends/blue.jpg') no-repeat center center;
}
.bg-blend-purple {
    @apply text-white;
    background: url('/blends/purple.jpg') no-repeat center center;
}
.bg-orange {
    @apply text-white;
    background-color: var(--slidev-theme-primary-orange);
}
.bg-blue {
    @apply text-white;
    background-color: var(--slidev-theme-primary-blue);
}
.bg-purple {
    @apply text-white;
    background-color: var(--slidev-theme-primary-purple);
}
.bg-sub-orange {
    background-color: var(--slidev-theme-tertiary-orange);
}
.bg-sub-blue {
    background-color: var(--slidev-theme-tertiary-blue);
}
.bg-sub-purple {
    background-color: var(--slidev-theme-secondary-purple);
}
</style>
