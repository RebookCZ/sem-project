<template>
  <div class="service-item">
    <div class="icon">
      <img :src="iconUrl" :alt="title">
    </div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: { type: String, required: true },
    description: { type: String, default: 'No description available' },
    iconUrl: { type: String, default: '' }
  },
  computed: {
    // Limits description length for better UI alignment
    shortDescription() {
      return this.description.length > 70 
        ? this.description.substring(0, 70) + '...' 
        : this.description;
    }
  },
  methods: {
    handleServiceClick() {
      console.log(`Navigating to details for: ${this.title}`);
    }
  }
}
</script>

<style scoped>
/* Scoped styles for service card UI */
.service-item {
  background-color: #f4f7fb;
  padding: 40px;
  border-radius: 25px;
  text-align: center;
  margin-bottom: 30px;
  transition: 0.3s;
}
.service-item:hover {
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
}
.service-item img {
  width: 60px;
  margin-bottom: 20px;
}
</style>