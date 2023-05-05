<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { footerLayoutBlacklist } from './theme.config';
import { getAllSections, getSectionTitleGetter } from './theme.utils';
import rawRoutes from '/@slidev/routes';

const cite = computed(() => {
    if ($slidev.nav.currentLayout !== 'quote') return null;

    return rawRoutes[$slidev.nav.currentPage - 1]?.meta?.cite || null;
})

const isSubSubSection = () => {
    if ($slidev.nav.currentLayout === 'section') {
        const sections = getAllSections(rawRoutes);
        const section = sections.find(s => s.meta.slide.id === $slidev.nav.currentSlideId);

        return section.meta.level === 3;
    }
    return false;
}

const isFooterVisible = computed(() => {
    const { currentLayout } = $slidev.nav;

    const isShowFooter = Boolean($slidev.configs.footer ?? true);
    const isVisibleOnLayout = !footerLayoutBlacklist.includes(currentLayout);

    return isShowFooter && isVisibleOnLayout || isSubSubSection();
});

const isFooterIconVisible = computed(() => {
    if (!isFooterVisible) {
        return false;
    }

    return isSubSubSection();
});
const latestSectionTitleOrPresentationTitle = computed(getSectionTitleGetter($slidev, rawRoutes));
</script>

<template>
	<footer
		v-if="isFooterVisible"
		class="footer"
	>
		<div class="flex items-end gap-x-8">
			<span class="page-count">{{ $slidev.nav.currentPage }}</span>
			<span class="section-title" v-html="latestSectionTitleOrPresentationTitle"></span>
		</div>
		<div class="flex row items-end">
			<div v-if="!!cite" class="mr-4">
				<a :href="cite">{{ cite }}</a>
			</div>
			<IconIoLogo class="logo" v-if="isFooterIconVisible" />
		</div>
	</footer>
</template>

<style scoped>
.footer {
    @apply absolute bottom-0 right-0 left-0 z-50 pb-4 px-14;
    @apply flex justify-between;
    @apply text-xs;
    @apply transition-[color] duration-200 ease-out
}

.section-title {
    @apply ps-8;
}
.logo {
    @apply text-4xl;
}
</style>
