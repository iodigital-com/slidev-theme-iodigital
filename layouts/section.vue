<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { getChapterColor } from '../theme.utils';
import BaseLayout from '../components/BaseLayout.vue';

const props = defineProps({
    iometa: Object,
    level: Number
})

// We go a maximum of 3 levels deep. Subtract 1 as JS arrays are 0-based
const level = computed(() => (props.level ?? 1) - 1);

const backgroundVariant = computed(() => {
    const color = getChapterColor(props.iometa.currentChapter);
    const variants = [`bg-blend-${color}`, `bg-${color}`, `bg-sub-${color}`];
    return variants[level.value];
})
</script>

<template>
	<BaseLayout layout="section" :class="backgroundVariant">
		<IconIoLogo v-if="level < 2" class="logo" />
		<div class="content">
			<slot />
		</div>
	</BaseLayout>
</template>

<style scoped>
.logo {
    @apply absolute w-24 h-24;
}
.content {
    @apply flex flex-col-reverse gap-2;
    @apply items-start justify-center;
    @apply h-full max-w-[75%];

    &:deep(h1) {
        @apply text-5xl m-0;

        /* @apply line-clamp-3; */
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
    &:deep(h2) {
        @apply text-xl;

        /* @apply line-clamp-1; */
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    /* Section layout ony has a title and an optional subtitle. No content */
    &:deep(*:not(h1:first-child, h1:first-child + h2, h1:first-child > *)) {
        display: none;
    }
}
</style>
