<template>
	<base-layout layout="intro" class="bg-orange">
		<div class="my-auto flex flex-col">
			<div class="flex">
				<div class="w-1/2 flex justify-center items-center p-8 max-h-md object-cover" :class="imageOrder">
					<img :src="image" class="rounded-full border-image h-full object-cover">
				</div>
				<div class="w-1/2 flex flex-col justify-center">
					<slot />
				</div>
			</div>
			<div class="social">
				<slot name="social" />
			</div>
		</div>
	</base-layout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue';
import { computed } from 'vue';

const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    imageSide: {
        type: String,
        required: false,
        default: 'right',
        validator(imageSide) {
            return ['left', 'right'].includes(imageSide);
        }
    },
});

const imageOrder = computed(() => props.imageSide === 'left' ? 'order-1' : 'order-2');
</script>

<style scoped>
.social {
    @apply flex justify-center w-full;

    &:deep(ul) {
        @apply list-none flex flex-row align-baseline;

        &:deep(li) {
            @apply block;
        }
    }
}
</style>