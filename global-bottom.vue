<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { footerLayoutBlacklist } from './theme.config';
import rawRoutes from '/@slidev/routes';
console.log("🚀 ~ rawRoutes:", rawRoutes)

const isFooterVisibile = computed(() => {
    const isShowFooter = Boolean($slidev.configs.footer ?? true);
    const isVisibleOnLayout = !footerLayoutBlacklist.includes($slidev.nav.currentLayout);

    return isShowFooter && isVisibleOnLayout;
});
const latestSectionTitleOrPresentationTitle = computed(() => {
    for (let i = $slidev.nav.currentPage - 1; i > 0; i--) {
        const { meta } = rawRoutes[i];

        const section = meta.section ?? true;
        if (section === false) {
            // Fall back
            break;
        }
        if (meta.layout === 'section') {
            if (section === true) { // Default value for section
                if (meta.slide?.title) {
                    // use the current slide's title
                    return meta.slide?.title;
                }
                // or fall back if not available
                break;
            }
            else if (typeof section === 'string') {
                // If it is a string, use that as title
                return section;
            }
        }
    }

    // Default value
    return $slidev.configs.title;
});
</script>

<template>
    <footer
        v-if="isFooterVisibile"
        class="footer"
    >
        <div class="flex items-end gap-x-8">
            <span class="page-count">{{  $slidev.nav.currentPage }}</span>
            <span class="section-title">{{ latestSectionTitleOrPresentationTitle }}</span>
        </div>
        <IconIoLogo class="logo" />
    </footer>
</template>

<style scoped>
.footer {
    @apply absolute bottom-0 right-0 left-0 z-50 pb-4 px-14;
    @apply flex justify-between;
    @apply text-xs;
}

.section-title {
    @apply ps-8;
}
.logo {
    @apply text-4xl;
}
</style>
