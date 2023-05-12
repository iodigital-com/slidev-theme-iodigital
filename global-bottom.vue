<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { footerLayoutBlacklist } from './theme.config';

const cite = computed(() => {
    const { currentLayout, currentRoute } = $slidev.nav;

    if (currentLayout !== 'quote') {
        return null;
    }

    return currentRoute.meta?.cite || null;
});

const isSubSubSection = () => {
    const { currentLayout, currentRoute } = $slidev.nav;

    if (currentLayout === 'section') {
        return currentRoute.meta?.level === 3;
    }

    return false;
}

const isFooterIconVisible = computed(() => {
    if (!isFooterVisible.value) {
        return false;
    }

    return isSubSubSection() || $slidev.nav.currentRoute.meta?.layout !== 'section';
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
const sectionTitle = computed(() => $slidev.nav.currentRoute.meta?.slide?.frontmatter.iometa.currentSection ?? $slidev.configs.title);
</script>

<template>
	<footer
		v-if="isFooterVisible"
		class="footer"
	>
		<div class="flex items-center gap-x-8">
			<span class="page-count">{{ $slidev.nav.currentPage }}</span>
			<!-- eslint-disable-next-line vue/no-v-html -->
			<span class="section-title" v-html="sectionTitle" />
		</div>
		<div class="flex row items-center">
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
