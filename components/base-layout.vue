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

<template>
	<section class="slidev-layout" :class="classNames">
		<slot />
	</section>
</template>
