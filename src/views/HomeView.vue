<template>
  <main>
    <section class="main-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="header-text">
              <h6>Get Professional Help</h6>
              <h2>Best Digital <em>Crypto</em> Services</h2>
              <p>Mexant provides professional solutions for your commercial business and digital assets.</p>
              <div class="orange-button">
                <router-link to="/contact">Contact Us Now</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose-us">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              class="img-fluid rounded shadow-lg" 
              alt="Professional Team"
            >
          </div>
          <div class="col-lg-6">
            <SectionHeader 
              subtitle="Our Advantages" 
              titlePart1="Why People" 
              titleEmphasis="Choose" 
              titlePart2="Mexant" 
            />
            <div v-for="feat in serviceStore.features" :key="feat.id" class="feature-box d-flex mb-4">
              <div class="icon-area me-3">
                <i :class="feat.icon" style="font-size: 32px; color: #22b3c1;"></i>
              </div>
              <div>
                <h5 class="fw-bold">{{ feat.title }}</h5>
                <p>{{ feat.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-grid py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center mb-5">
            <SectionHeader subtitle="Our Services" titlePart1="What We" titleEmphasis="Provide" titlePart2="Now" />
          </div>
          <div class="col-lg-4 col-md-6 mb-4" v-for="service in serviceStore.services" :key="service.id">
            <ServiceCard 
              :title="service.title" 
              :description="service.text"
              :iconUrl="service.icon"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { useServiceStore } from '@/stores/useServiceStore'

export default {
  name: 'HomeView',
  components: { ServiceCard, SectionHeader },

  computed: {
    serviceStore() {
      return useServiceStore()
    }
  }
}
</script>


<style scoped>
/* High-quality background for Hero Section */
.main-banner {
  background: linear-gradient(rgba(31, 39, 43, 0.8), rgba(31, 39, 43, 0.8)), 
              url('https://images.unsplash.com/photo-1518186239717-2e9b69d7744a?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  padding: 200px 0 150px 0;
  color: white;
}

/* Styling for the new Choose Us section */
.why-choose-us {
  padding: 100px 0;
  background-color: #f8f9fa;
}

.feature-box {
  background: white;
  padding: 20px;
  border-radius: 15px;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.feature-box:hover {
  transform: translateY(-5px);
}
</style>