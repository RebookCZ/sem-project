<template>
  <main>
    <section class="main-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="header-text">
              <h6>Get Professional Help</h6>
              <h2>Best Digital <em>Crypto</em> Services</h2>
              <p>Mexant provides top-tier financial solutions. Use this professional template for your semester project.</p>
              <div class="orange-button">
                <router-link to="/contact">Contact Us Now</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h6>Our Services</h6>
              <h4>What We <em>Provide</em></h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" v-for="service in serviceStore.services" :key="service.id">
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
import ServiceCard from '@/components/ServiceCard.vue';
import { useServiceStore } from '@/stores/useServiceStore';

export default {
  name: 'HomeView',
  components: { ServiceCard },
  data() {
    return {
      // Accessing store data via Options API
      serviceStore: useServiceStore()
    }
  }
}
</script>

<style scoped>
/* Main Hero styling */
.main-banner {
  background: linear-gradient(rgba(31, 39, 43, 0.75), rgba(31, 39, 43, 0.75)), 
              url('https://templatemo.com/templates/templatemo_574_mexant/assets/images/banner-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 180px 0;
  color: #fff;
}

.header-text h2 { font-size: 50px; font-weight: 900; text-transform: uppercase; }
.header-text h2 em { color: #22b3c1; font-style: normal; }

/* Services Section with Pleasant Background */
.services-area {
  padding: 100px 0;
  /* Soft background with a faint image of people/office */
  background-color: #f8f9fa;
  background-image: linear-gradient(rgba(248, 249, 250, 0.9), rgba(248, 249, 250, 0.9)), 
                    url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=40');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Creates parallax effect */
}

.section-heading { margin-bottom: 60px; text-align: center; }
.section-heading h6 { color: #ff511a; text-transform: uppercase; font-weight: 700; }
</style>