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

const { icon, base, handlePrefix } = networks[props.network];
const networkBase = computed(() => `${base.replace(/(?=.*)\/$/, '')}`);
const networkHandle = computed(() => `${handlePrefix ?? ''}${props.handle}`);
const isCustomIcon = computed(() => {
    if (!icon) {
        return false;
    }

    return icon.includes('://') || icon.startsWith('/');
});
</script>

<template>
    <a :href="`${networkBase}/${handle}`" target="_blank" rel="noopener noreferrer" >
        <IoLogo v-if="isCustomIcon" color="black" class="w-4" />
        <SocialIcon v-else :network="props.network" />
        <span class="handle">{{ networkHandle }}</span>
    </a>
</template>

<style scoped>
a {
    @apply flex gap-1 items-center;
}
</style>
