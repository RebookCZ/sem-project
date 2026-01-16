import { defineStore } from 'pinia'

// Store for managing 6 professional services
export const useServiceStore = defineStore('serviceStore', {
  state: () => ({
    services: [
      { 
        id: 1, 
        title: 'Currency Exchange', 
        text: 'Professional digital currency exchange for your business.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png' 
      },
      { 
        id: 2, 
        title: 'BitCoin Mining', 
        text: 'Secure and fast mining hardware solutions.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489714.png' 
      },
      { 
        id: 3, 
        title: 'Cloud Storage', 
        text: 'Encrypted cloud storage for all financial assets.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489723.png' 
      },
      { 
        id: 4, 
        title: 'Market Analysis', 
        text: 'Deep insights into crypto market trends and data.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489732.png' 
      },
      { 
        id: 5, 
        title: 'Safe Wallets', 
        text: 'Protected digital wallets with multi-factor security.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489701.png' 
      },
      { 
        id: 6, 
        title: 'Expert Consulting', 
        text: '24/7 financial support and strategic planning.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489745.png' 
      }
    ]
  })
})