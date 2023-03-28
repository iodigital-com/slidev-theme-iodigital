<script setup>
import { computed } from 'vue';
import { networks } from '../setup/config';

const props = defineProps({
    handle: String,
    network: {
        type: String,
        validator(network) {
            return Object.keys(networks).includes(network);
        }
    },
});

const networkBase = computed(() => `${networks[props.network].base.replace(/(?=.*)\/$/, '')}`);
</script>

<template>
    <a :href="`${networkBase}/${handle}`" target="_blank" rel="noopener noreferrer" >
        <img class="icon" :src="networks[props.network].icon" />
        <span class="handle">{{ props.handle }}</span>
    </a>
</template>

<style scoped>
a {
    @apply flex gap-1;
}
.icon {
    width: 1rem;
    aspect-ratio: 1;
}
</style>