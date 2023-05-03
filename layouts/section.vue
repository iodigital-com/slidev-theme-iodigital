<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { getAllChapters, getAllSections, getChapterColor, getCurrentChapter, getCurrentSection } from '../theme.utils';
import BaseLayout from './base-layout.vue';
import rawRoutes from '/@slidev/routes';

const sections = getAllSections(rawRoutes);
const chapters = getAllChapters(rawRoutes);
const section = getCurrentSection($slidev.nav.currentPage, sections);
const chapter = getCurrentChapter($slidev.nav.currentPage, chapters);

// We go a maximum of 3 levels deep. Subtract 1 as JS arrays are 0-based
const level = Math.max(0, Math.min(3, (section?.meta?.slide?.frontmatter?.level ?? 1) - 1));

// console.log("🚀 ~ title:", level, $slidev.nav.currentRoute.meta?.slide?.title);
const color = getChapterColor(chapter.meta.chapter);
const variants = [`bg-blend-${color}`, `bg-${color}`, `bg-sub-${color}`];
const bg = computed(() => variants[($slidev.nav.currentRoute.meta?.slide?.frontmatter?.level ?? 1) - 1])
</script>

<template>
<base-layout layout="section" :class="bg">
    <IconIoLogo class="logo" v-if="level < 2" />
    <div class="content">
        <slot />
    </div>
</base-layout>
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