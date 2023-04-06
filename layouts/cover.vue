<script setup>
import { computed } from 'vue';
const props = defineProps({
    image: {
        type: String,
        required: true,
    },
});

const style = computed(() => ({
    '--image': `url(${props.image})`,
}));
</script>

<template>
    <div class="slidev-layout cover" :style="style">
        <div class="background"><img :src="props.image"></div>
        <div class="relative">
            <div class="logo">
                <IoLogo class="w-24" />
            </div>
            <div class="w-1/2">
                <slot />
            </div>
        </div>
      </div>
</template>

<style scoped>
.cover {
    --shape: circle(69.5% at right bottom);

    @apply text-white;

    background-color: var(--slidev-theme-grey-cover);
}

.content {
    @apply relative;

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
</style>
