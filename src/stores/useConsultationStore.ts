import { defineStore } from 'pinia';

export interface Consultation {
  id: number;
  name: string;
  service: string;
  date: string;
  time: string;
}

export const useConsultationStore = defineStore('consultationStore', {
  state: () => ({
    consultations: [] as Consultation[]
  }),

  actions: {
    addConsultation(consultation: Consultation) {
      this.consultations.push(consultation);
      this.saveToLocalStorage();
    },

    clearConsultations() {
      this.consultations = [];
      localStorage.removeItem('consultations');
    },

    loadFromLocalStorage() {
      const data = localStorage.getItem('consultations');
      if (data) {
        this.consultations = JSON.parse(data);
      }
    },

    saveToLocalStorage() {
      localStorage.setItem(
        'consultations',
        JSON.stringify(this.consultations)
      );
    }
  }
});
