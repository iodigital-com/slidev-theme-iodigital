<template>
	<base-layout layout="default" :style="style">
		<div ref="baseRef" class="base">
			<slot />
		</div>
	</base-layout>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import BaseLayout from '../components/BaseLayout.vue';

const baseRef = ref();
let h1Height = ref(0);
let h2Height = ref(0);

const getFullHeight = (el) => {
    if (!el) {
        return 0;
    }

    const cs = window.getComputedStyle(el);
    const mBlock = parseInt(cs.getPropertyValue('margin-top').replace('px', ''), 10)
        + parseInt(cs.getPropertyValue('margin-bottom').replace('px', ''), 10);

    return el.offsetHeight + mBlock;
}

onMounted(() => {
    const base = baseRef.value;
    const h1 = base.querySelector('h1:first-child');
    h1Height.value = getFullHeight(h1);

    const h2 = base.querySelector('h1:first-child + h2');
    h2Height.value = getFullHeight(h2);
});
const style = computed(() => ({
    '--offset-h1': `-${h1Height.value}px`,
    '--offset-h2': `${h2Height.value}px`,
}));

</script>

<style scoped>
/*
What is happening here?

Base:
- Apply a 2 column layout.

Selector 1:
- Every H1 which is followed by an H2 is moved down equal to the height of the H2 element.

Selector 2:
- Every adjacent sibling of the H1 which is an H2 is deemed to be a subtitle.
- Subtitles have small text.
- Subtitles are moved up equal to the height of the H1.

Basically the H1 and H2's orders are flipped.

Selector 3:
- The first element adjacent to the latest heading element (H1 or the adjacent H2) is moved to the next column

*/
.base {
    @apply pt-8 columns-2;

    /* Selector 1 */
    &:deep(h1:first-child:has(+ h2)) {
        transform: translateY(var(--offset-h2));
    }

    /* Selector 2 */
    &:deep(h1:first-child + h2) {
        @apply text-xl;

        transform: translateY(var(--offset-h1));
    }

    /* Selector 3 */
    &:deep(h1:first-child + h2 + *, ), &:deep(h1:first-child + *:not(h2)) {
        @apply mt-[100%];
    }
}
</style>
