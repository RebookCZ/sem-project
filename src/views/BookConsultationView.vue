<template>
  <div class="container mt-5 mb-5">
    <h2 class="text-center mb-4">Book a Consultation</h2>

    <form @submit.prevent="submitForm" class="consultation-form">
      <input v-model="form.name" type="text" placeholder="Your Name" required />
      
      <select v-model="form.service" required>
        <option disabled value="">Select Service</option>
        <option>Crypto Consulting</option>
        <option>Investment Strategy</option>
        <option>Wallet Security</option>
      </select>

      <input v-model="form.date" type="date" required />
      <input v-model="form.time" type="time" required />

      <button type="submit">Book Consultation</button>
    </form>

    <div v-if="success" class="alert alert-success mt-4">
      Consultation successfully booked!
    </div>
  </div>
</template>

<script lang="ts">
import { useConsultationStore } from '@/stores/useConsultationStore';

export default {
  name: 'BookConsultationView',

  data() {
    return {
      success: false,
      form: {
        name: '',
        service: '',
        date: '',
        time: ''
      },
      store: useConsultationStore()
    };
  },

  mounted() {
    this.store.loadFromLocalStorage();
  },

  methods: {
    submitForm() {
      this.store.addConsultation({
        id: Date.now(),
        ...this.form
      });

      this.success = true;
      this.form = { name: '', service: '', date: '', time: '' };

      setTimeout(() => (this.success = false), 3000);
    }
  }
};
</script>

<style scoped>
.consultation-form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.consultation-form input,
.consultation-form select {
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: #f4f7fb;
}

.consultation-form button {
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: #22b3c1;
  color: white;
  font-weight: bold;
}
</style>
