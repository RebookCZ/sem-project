<template>
  <div class="stat-item">
    <div class="count-area">
      <h2 class="count-digit">{{ targetNumber }}</h2>
      <span class="count-title">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsCounter',
  props: {
    number: { type: [String, Number], required: true },
    label: { type: String, default: 'Total' }
  },
  methods: {
    // Utility to log stat interactions
    onStatClick() {
      console.log(`User checked statistics for: ${this.label}`);
    }
  }
}
</script>

<style scoped>
.stat-item {
  background-color: #22b3c1;
  padding: 40px;
  border-radius: 25px;
  text-align: center;
  color: white;
  margin-bottom: 30px;
}
.count-digit {
  font-size: 44px;
  font-weight: 900;
  margin-bottom: 5px;
}
.count-title {
  font-size: 18px;
  font-weight: 600;
}
</style>