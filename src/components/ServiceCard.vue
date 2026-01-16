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
  // Options API: Props received from parent component
  props: {
    title: String,
    description: String,
    iconUrl: String
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