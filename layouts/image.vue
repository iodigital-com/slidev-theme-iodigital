<template>
	<BaseLayout layout="image" :class="`image--${props.variant}`" :style="style">
		<div class="content">
			<slot />
		</div>
	</BaseLayout>
</template>

<script setup>
import { handleBackground } from '@slidev/client/layoutHelper';
import { computed } from 'vue';
import BaseLayout from '../components/BaseLayout.vue';

const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        default: 'default',
        validator: variant => ['box', 'default'].includes(variant),
    },
});

const style = computed(() => handleBackground(props.image));
</script>

<style scoped>
.image {
    @apply p-0 text-white;
    @apply bg-no-repeat bg-fixed bg-origin-border;

    background-image: var(--background-image);
}
.image.image--default, .image.image--box {
    @apply bg-center bg-cover;
    @apply flex items-end;

    &:deep(> .content) {
        @apply w-1/2 mx-14 p-14;

        &:deep(h1) {
            @apply text-4xl m-0;

            /* @apply line-clamp-3; */
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
    }
}
.image.image--box > .content {
    @apply bg-black;
}
</style>
