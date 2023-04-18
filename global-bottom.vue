<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { getSectionTitleGetter, footerLayoutBlacklist } from './theme.config';
import rawRoutes from '/@slidev/routes';

const isFooterVisibile = computed(() => {
    const isShowFooter = Boolean($slidev.configs.footer ?? true);
    const isVisibleOnLayout = !footerLayoutBlacklist.includes($slidev.nav.currentLayout);

    return isShowFooter && isVisibleOnLayout;
});
const latestSectionTitleOrPresentationTitle = computed(getSectionTitleGetter($slidev, rawRoutes));
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
    @apply transition-[color] duration-200 ease-out
}

.section-title {
    @apply ps-8;
}
.logo {
    @apply text-4xl;
}
</style>
