<template>
  <div class="testimonial-item">
    <p>"{{ quote }}"</p>
    <h4>{{ author }}</h4>
    <span>{{ position }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestimonialCard',
  props: {
    quote: { type: String, required: true },
    author: { type: String, required: true },
    position: { type: String, default: '' }
  }
});
</script>
