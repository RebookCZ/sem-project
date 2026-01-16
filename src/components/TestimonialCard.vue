<template>
  <div class="testimonial-item">
    <i class="fa fa-quote-left"></i>
    <p>"{{ quote }}"</p>
    <h4>{{ author }}</h4>
    <span>{{ position }}</span>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    author: { type: String, required: true },
    role: String,
    quote: String,
    stars: { type: Number, default: 5 }
  },
  computed: {
    // Formats the author name to uppercase for design consistency
    formattedAuthor() {
      return this.author.toUpperCase();
    }
  }
}
</script>

<style scoped>
.testimonial-item {
  background-color: #f4f7fb;
  padding: 40px;
  border-radius: 25px;
  position: relative;
  margin-top: 30px;
}
.testimonial-item i {
  font-size: 32px;
  color: #22b3c1;
  margin-bottom: 20px;
}
.testimonial-item p {
  font-style: italic;
  margin-bottom: 20px;
}
.testimonial-item h4 {
  font-size: 20px;
  font-weight: 700;
}
.testimonial-item span {
  font-size: 14px;
  color: #ff511a;
}
</style>