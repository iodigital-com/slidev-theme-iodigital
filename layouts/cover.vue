<script setup>
import IconIoLogo from '~icons/io/logo'; // TODO: remove and fix auto imports

const props = defineProps({
    image: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="slidev-layout cover">
        <div class="background"><img :src="props.image"></div>
        <div class="flex flex-col">
            <div class="w-full">
                <IconIoLogo class="w-24 h-24" />
            </div>
            <div class="content">
                <div class="placeholder"></div>
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
    @apply relative w-full grow;
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

.placeholder {
    @apply h-full float-right;
    width: 60%;
    shape-outside: ircle(55% at center)
}
</style>
