<script setup>
import BaseLayout from './base-layout.vue';
</script>

<template>
    <base-layout layout="default" class="base">
        <slot />
    </base-layout>
</template>

<style scoped>
.base {
    @apply grid pt-24;

    grid-template-areas:
        "h2 content"
        "h1 content";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 100%;

    &:deep(h2) {
        grid-area: h2;
    }
    &:deep(h1) {
        grid-area: h1;
    }
    &:deep(:not(h1, h2)) {
        grid-area: content;
        grid-row-start: 1;
        grid-row-end: 2;
    }
}
</style>
