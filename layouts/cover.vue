<script setup>
import BaseLayout from './base-layout.vue';
import IconIoLogo from '~icons/io/logo'; // TODO: remove and fix auto imports

const props = defineProps({
    image: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <base-layout layout="cover">
        <div class="background"><img :src="props.image"></div>
        <div class="flex flex-col">
            <div class="w-full">
                <IconIoLogo class="w-24 h-24" />
            </div>
            <div class="content">
                <div class="shape-placeholder"></div>
                <slot />
            </div>
        </div>
    </base-layout>
</template>

<style scoped>
.cover {
    --shape: circle(69.5% at right bottom);

    @apply text-white;

    background-color: var(--slidev-theme-grey-cover);
}

.content {
    @apply relative w-full;
    flex-grow: 1;
    shape-outside: var(--shape);
}

.background {
    @apply absolute inset-0 flex items-end justify-end;

    clip-path: var(--shape);
    background-color: var(--slidev-theme-primary-orange);

    & > img {
        @apply h-full drop-shadow-lg
    }
}

.shape-placeholder {
    @apply h-full float-right;
    width: 60%;
    shape-outside: circle(55% at center)
}
</style>
