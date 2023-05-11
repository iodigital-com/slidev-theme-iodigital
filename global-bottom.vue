<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { footerLayoutBlacklist } from './theme.config';
import { getAllSections, getCurrentSection, getSectionTitleGetter } from './theme.utils';
import rawRoutes from '/@slidev/routes';

const cite = computed(() => {
    if ($slidev.nav.currentLayout !== 'quote') return null;

    return rawRoutes[$slidev.nav.currentPage - 1]?.meta?.cite || null;
})

const isSubSection = () => {
    if ($slidev.nav.currentLayout === 'section') {
        const sections = getAllSections(rawRoutes);
        const section = getCurrentSection($slidev.nav.currentSlideId, sections);

        return section?.meta?.level === 3;
    }
    return false;
}

const isFooterIconVisible = computed(() => {
    if (!isFooterVisible.value) {
        return false;
    }

    return isSubSection();
});

const isFooterVisible = computed(() => {
    const { currentLayout, currentRoute } = $slidev.nav;

    const isShowFooter = Boolean(currentRoute.meta?.slide?.frontmatter.footer ?? true);
    if (!isShowFooter) {
        return false;
    }

    const isVisibleOnLayout = !footerLayoutBlacklist.includes(currentLayout);
    const isFullImage = currentLayout === 'image' && $slidev.nav.currentRoute.meta?.variant !== 'header';

    return isVisibleOnLayout && !isFullImage;
});
const latestSectionTitleOrPresentationTitle = computed(getSectionTitleGetter($slidev, rawRoutes));
</script>

<template>
	<footer
		v-if="isFooterVisible || isFooterIconVisible"
		class="footer"
	>
		<div class="flex items-end gap-x-8">
			<span class="page-count">{{ $slidev.nav.currentPage }}</span>
			<!-- eslint-disable-next-line vue/no-v-html -->
			<span class="section-title" v-html="latestSectionTitleOrPresentationTitle" />
		</div>
		<div class="flex row items-end">
			<div v-if="!!cite" class="mr-4">
				<a :href="cite">{{ cite }}</a>
			</div>
			<IconIoLogo v-if="isFooterIconVisible" class="logo" />
		</div>
	</footer>
</template>

<style scoped>
.footer {
    @apply absolute bottom-0 right-0 left-0 z-50 pb-4 px-14;
    @apply flex justify-between;
    @apply text-xs;
    @apply transition-[color] duration-200 ease-out;
}

.section-title {
    @apply ps-8;
}
.logo {
    @apply text-4xl;
}
</style>
