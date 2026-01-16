<template>
  <div class="feature-item">
    <div class="icon-box">
      <i :class="iconClass"></i>
    </div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeatureItem',
  props: {
    title: String,
    description: String,
    iconClass: { type: String, default: 'fa fa-check' }
  },
  computed: {
    // Dynamically adds a custom class for styling consistency
    iconStyle() {
      return `${this.iconClass} custom-feature-icon`;
    }
  }
}
</script>

<style scoped>
.feature-item {
  padding: 30px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}
.icon-box i {
  font-size: 40px;
  color: #22b3c1;
  margin-bottom: 20px;
}
.feature-item h4 {
  font-weight: 700;
  margin-bottom: 15px;
}
</style>