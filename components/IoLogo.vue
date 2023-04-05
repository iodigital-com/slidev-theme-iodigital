<script setup>
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        required: false,
        default: 'white',
        validator(color) {
            return ['white', 'black'].includes(color);
        }
    }
});

const image = computed(() => {
    return `/logo/iO-logo_${props.color}.svg`;
});
</script>

<template>
    <img :src="image" alt="iO logo">
</template>
