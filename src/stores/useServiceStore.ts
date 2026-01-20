import { defineStore } from 'pinia'

export const useServiceStore = defineStore('serviceStore', {
  state: () => ({
    services: [
      {
        id: 1,
        title: 'Currency Exchange',
        text: 'Reliable digital currency exchange for international business and personal needs.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png'
      },
      {
        id: 2,
        title: 'BitCoin Mining',
        text: 'We provide top-notch hardware and software solutions for efficient crypto mining.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489714.png'
      },
      {
        id: 3,
        title: 'Cloud Storage',
        text: 'Highly secure, encrypted cloud environments for your sensitive financial documents.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489723.png'
      },
      {
        id: 4,
        title: 'Market Analysis',
        text: 'Get real-time data and expert insights into the latest crypto market trends.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489732.png'
      },
      {
        id: 5,
        title: 'Safe Wallets',
        text: 'State-of-the-art digital wallets with multi-factor authentication and cold storage.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489701.png'
      },
      {
        id: 6,
        title: 'Expert Consulting',
        text: 'Personalized financial strategies and technical support available 24 hours a day.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489745.png'
      }
    ],

    features: [
      { id: 1, title: 'Secure Storage', desc: 'We prioritize your safety with offline cold storage methods.', icon: 'fa fa-lock' },
      { id: 2, title: 'Fast Payouts', desc: 'Experience lightning-fast withdrawals directly to your account.', icon: 'fa fa-bolt' },
      { id: 3, title: '24/7 Support', desc: 'Our dedicated team is ready to help you anytime, anywhere.', icon: 'fa fa-headset' }
    ],

    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '500+', label: 'Happy Clients' },
      { value: '120', label: 'Projects Finished' },
      { value: '25', label: 'Awards Won' }
    ],

    testimonials: [
      { text: 'Mexant helped us to manage our crypto assets efficiently.', author: 'John Doe', pos: 'Crypto Trader' },
      { text: 'The best financial service I have ever used in my career.', author: 'Jane Smith', pos: 'Business Owner' }
    ]
  }),

  getters: {
    totalServices: (state) => state.services.length
  }
})
