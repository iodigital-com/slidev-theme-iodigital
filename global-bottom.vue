<script setup>
import { computed } from 'vue';
import IconIoLogo from '~icons/io/logo';
import { footerLayouts } from './theme.config';

const isFooterVisibile = computed(() => {
    const isShowFooter = Boolean($slidev.configs.footer ?? true);
    const isVisibleOnLayout = !footerLayouts.includes($slidev.nav.currentLayout);

    return isShowFooter && isVisibleOnLayout;
});
</script>

<template>
    <footer
        v-if="isFooterVisibile"
        class="footer"
    >
        <div class="flex items-end gap-x-8">
            <span class="page-count">{{  $slidev.nav.currentPage }}</span>
            <span class="section-title">{{ $slidev.configs.title }}</span>
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
