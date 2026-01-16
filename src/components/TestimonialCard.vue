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
    quote: { type: String, required: true },
    author: { type: String, required: true },
    position: { type: String, default: 'CEO of Company' }
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