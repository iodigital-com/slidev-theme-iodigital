<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { getAllChapters, getAllSections, getChapterColor, getCurrentChapter, getCurrentSection } from '../theme.utils';
import BaseLayout from './base-layout.vue';
import rawRoutes from '/@slidev/routes';

const sections = getAllSections(rawRoutes);
// console.log("🚀 ~ sections:", sections)
// console.log(1);
const chapters = getAllChapters(rawRoutes);
// console.log(2);
const section = getCurrentSection($slidev.nav.currentPage, sections);
// console.log(3);
// console.log("🚀 ~ section:", {
//     title: section.meta?.slide?.title,
//     currentPage: $slidev.nav.currentPage,
//     currentSlideId: $slidev.nav.currentSlideId,
//     section: section,
// })
// console.log(4);
const chapter = getCurrentChapter($slidev.nav.currentPage, chapters);
// console.log(5);

// We go a maximum of 3 levels deep. Subtract 1 as JS arrays are 0-based
const level = Math.max(0, Math.min(3, (section.meta?.level ?? section.meta?.slide?.level ?? 1) - 1));
// console.log(6);
// console.log("🚀 ~ title:", level, $slidev.nav.currentRoute.meta?.slide?.title);
// console.log(7);
const color = getChapterColor(chapter.meta.chapter);
// console.log(8);
const variants = [`bg-blend-${color}`, `bg-${color}`, `bg-sub-${color}`];
// console.log(9);
const bg = variants[level];
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