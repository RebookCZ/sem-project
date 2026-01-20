import { defineStore } from 'pinia';

export interface Service {
  id: number;
  title: string;
  text: string;
  icon: string;
}

export interface Feature {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string | number;
}

export interface Testimonial {
  text: string;
  author: string;
  pos: string;
}

export const useServiceStore = defineStore('serviceStore', {
  state: () => ({
    services: [
      { id: 1, title: 'Currency Exchange', text: 'Reliable digital currency exchange...', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png' },
      { id: 2, title: 'BitCoin Mining', text: 'Top-notch hardware and software solutions...', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489714.png' },
      { id: 3, title: 'Cloud Storage', text: 'Highly secure, encrypted cloud environments...', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489723.png' },
      { id: 4, title: 'Market Analysis', text: 'Get real-time data and expert insights...', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489732.png' },
      { id: 5, title: 'Safe Wallets', text: 'State-of-the-art digital wallets...', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489701.png' },
      { id: 6, title: 'Expert Consulting', text: 'Personalized financial strategies...', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489745.png' }
    ] as Service[],

    features: [
      { id: 1, title: 'Secure Storage', desc: 'Offline cold storage methods.', icon: 'fa fa-lock' },
      { id: 2, title: 'Fast Payouts', desc: 'Lightning-fast withdrawals.', icon: 'fa fa-bolt' },
      { id: 3, title: '24/7 Support', desc: 'Dedicated team ready anytime.', icon: 'fa fa-headset' }
    ] as Feature[],

    stats: [
      { label: 'Years Experience', value: '10+' },
      { label: 'Happy Clients', value: '500+' },
      { label: 'Projects Finished', value: '120' },
      { label: 'Awards Won', value: '25' }
    ] as Stat[],

    testimonials: [
      { text: 'Mexant helped us to manage our crypto assets efficiently.', author: 'John Doe', pos: 'Crypto Trader' },
      { text: 'The best financial service I have ever used.', author: 'Jane Smith', pos: 'Business Owner' }
    ] as Testimonial[]
  }),

  getters: {
    totalServices: (state): number => state.services.length,
    featuredServices: (state): Service[] => state.services.filter(s => s.id <= 3)
  },

  actions: {
    addService(service: Service) {
      this.services.push(service);
    },
    addTestimonial(testimonial: Testimonial) {
      this.testimonials.push(testimonial);
    }
  }
});
