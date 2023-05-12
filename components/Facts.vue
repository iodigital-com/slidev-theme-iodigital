<template>
	<ul class="container">
		<li v-for="(fact, index) in facts" :key="index" class="fact">
			<h2 class="stat">
				{{ fact.stat }}
			</h2>
			<p class="description">
				{{ fact.description }}
			</p>
		</li>
	</ul>
</template>

<script setup>
    defineProps({
        facts: {
            type: Array,
            required: true,
        },
        direction: {
            type: String,
            default: 'row',
            required: false,
            validator: (value) => ['row', 'column'].includes(value),
        },
    });
</script>

<style scoped>
    .container {
        @apply flex gap-4 flex-wrap;
        flex-direction: v-bind(direction)
    }
    .fact {
        @apply font-quote list-none m-0 p-0 basis-1/4 shrink-0;
    }

    .stat {
        @apply font-quote;
    }

    .description {
        @apply font-serif text-[0.5rem] my-3 leading-3;

        /* @apply line-clamp-3; */
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

</style>
