<script setup>
import { networks } from '../setup/config';

const props = defineProps({
    network: {
        type: String,
        validator(network) {
            return Object.keys(networks).includes(network);
        }
    },
});
</script>

<template>
    <MdiLinkedin v-if="network === 'linkedin'"></MdiLinkedin>
    <MdiGithubBox v-else-if="network === 'github'"></MdiGithubBox>
    <MdiTwitterBox v-else-if="network === 'twitter'"></MdiTwitterBox>
</template>
