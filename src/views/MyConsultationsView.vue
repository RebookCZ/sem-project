<template>
  <div class="container mt-5 mb-5">
    <h2 class="text-center mb-4">My Consultations</h2>

    <div v-if="consultations.length === 0" class="text-center">
      No consultations booked yet.
    </div>

    <div
      v-for="item in consultations"
      :key="item.id"
      class="consultation-card"
    >
      <h5>{{ item.service }}</h5>
      <p><strong>Name:</strong> {{ item.name }}</p>
      <p><strong>Date:</strong> {{ item.date }}</p>
      <p><strong>Time:</strong> {{ item.time }}</p>
    </div>

    <button
      v-if="consultations.length"
      class="clear-btn"
      @click="clearConsultations"
    >
      Clear all consultations
    </button>
  </div>
</template>

<script lang="ts">
import { useConsultationStore } from '@/stores/useConsultationStore';

export default {
  name: 'MyConsultationsView',

  computed: {
    store() {
      return useConsultationStore();
    },

    consultations() {
      return this.store.consultations;
    }
  },

  methods: {
    clearConsultations() {
      this.store.clearConsultations();
    }
  },

  mounted() {
    this.store.loadFromLocalStorage();
  }
};
</script>

<style scoped>
.consultation-card {
  background: #f4f7fb;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 15px;
}

.clear-btn {
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background: #ff4d4f;
  color: white;
  cursor: pointer;
}
</style>
