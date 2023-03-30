<script setup>
const props = defineProps({
  blend: {
    type: String,
    required: false,
    validator(blend) {
      return ['orange', 'blue', 'purple'].includes(blend);
    }
  }
});
</script>

<template>
  <div class="slidev-layout cover" :class="blend ? `blend-${blend}` : ''">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
