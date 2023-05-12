<template>
	<BaseLayout layout="codepen" class="p-0">
		<div class="wrapper">
			<header v-if="!!penTitle">
				<h1 class="px-14 pt-14">
					{{ penTitle }}
				</h1>
			</header>
			<iframe
				:title="penTitle ?? 'Untitled'"
				:src="props.pen"
				scrolling="no"
				frameborder="no"
				loading="eager"
				allowtransparency="true"
				allowfullscreen="true"
			>
				<slot />
			</iframe>
		</div>
	</BaseLayout>
</template>

<script setup>
import { computed } from 'vue';
import BaseLayout from '../components/BaseLayout.vue';

const DEFAULT_TITLE = null;

const props = defineProps({
    pen: {
        type: String,
        required: true,
        validator(pen) {
            if (!pen.startsWith('https://codepen.io')) {
                throw new URIError(`The pen layout requires a codepen URL. Use the iframe layout for "${pen}"`);
            }

            if (pen.indexOf('/pen/') > 0 && pen.indexOf('/embed/') === -1) {
                throw new URIError(`Please use the /embed/ URL for "${pen}"`);
            }

            return true;
        }
    },
});

const penTitle = computed(() => $slidev.nav.currentRoute.meta.slide.title ?? DEFAULT_TITLE);
</script>

<style scoped>
.wrapper {
    @apply flex flex-col h-full w-full;
}

.wrapper header {
    @apply flex-initial;
}

.wrapper iframe {
    @apply flex-auto;
    @apply h-full w-full;
}
</style>