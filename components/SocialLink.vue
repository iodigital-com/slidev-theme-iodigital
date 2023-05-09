<template>
	<a :href="`${networkBase}/${handle}`" target="_blank" rel="noopener noreferrer">
		<component :is="icon" class="icon" />
		{{ networkHandle }}
	</a>
</template>

<script setup>
import { computed } from 'vue';
import { networks } from '../theme.config';

const props = defineProps({
    handle: String,
    network: {
        type: String,
        validator(network) {
            return Object.keys(networks).includes(network);
        }
    },
});

const { icon, base, handlePrefix } = networks[props.network];
const networkBase = computed(() => `${base.replace(/(?=.*)\/$/, '')}`);
const networkHandle = computed(() => `${handlePrefix ?? ''}${props.handle}`);
</script>

<style scoped>
a {
    @apply flex gap-1 items-center;
}
.icon {
    @apply w-4;
    aspect-ratio: 1;
    fill: currentColor;
}
</style>
