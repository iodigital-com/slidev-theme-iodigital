<script setup>
import { computed } from 'vue';
import Titles from '/@slidev/titles.md';

const getConfigValue = (configName, defaultValue = false) => {
    let route = $slidev.nav.currentRoute;
    console.log("🚀 ~ getConfigValue ~ nav:", $slidev.nav)
    do {
        console.log("🚀 ~ getConfigValue ~ route:", route)
        if (configName in route.meta) {
            return route.meta[configName];
        }
    } while (route = route.prevRoute);

    return defaultValue;
};

const lastSectionTitle = computed(() => getConfigValue('section'));
</script>

<template>
    <template v-if="lastSectionTitle">{{ lastSectionTitle }}</template>
    <template v-else>
        <Titles :no="$slidev.nav.currentPage" />
    </template>
</template>
