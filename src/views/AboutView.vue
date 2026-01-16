<template>
  <div class="about-page">
    <PageHeading title="About Us" subtitle="Get to know more about Mexant" />

    <section class="stats-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3" v-for="stat in statsData" :key="stat.label">
            <StatsCounter :targetNumber="stat.value" :label="stat.label" />
          </div>
        </div>
      </div>
    </section>

    <section class="about-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
             <SectionHeader 
              subtitle="About Mexant" 
              titlePart1="We are" 
              titleEmphasis="Professional" 
              titlePart2="Financial Team" 
            />
            <p>Mexant provides the best financial and crypto solutions for your business. We help you grow your digital assets safely.</p>
            <div class="orange-button">
              <a href="#">Learn More</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="right-image">
              <img src="https://templatemo.com/templates/templatemo_574_mexant/assets/images/about-left-image.jpg" class="img-fluid rounded" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <SectionHeader subtitle="Testimonials" titlePart1="What they" titleEmphasis="Say" titlePart2="About Us" />
          </div>
          <div class="col-lg-6" v-for="item in testimonials" :key="item.author">
            <TestimonialCard :quote="item.text" :author="item.author" :position="item.pos" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Importing all necessary components
import PageHeading from '@/components/PageHeading.vue';
import StatsCounter from '@/components/StatsCounter.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import TestimonialCard from '@/components/TestimonialCard.vue';

export default {
  name: 'AboutView',
  components: {
    PageHeading,
    StatsCounter,
    SectionHeader,
    TestimonialCard
  },
  data() {
    return {
      // Local data for stats and testimonials
      statsData: [
        { value: '10+', label: 'Years Experience' },
        { value: '500+', label: 'Happy Clients' },
        { value: '120', label: 'Projects Finished' },
        { value: '25', label: 'Awards Won' }
      ],
      testimonials: [
        { text: 'Mexant helped us to manage our crypto assets efficiently.', author: 'John Doe', pos: 'Crypto Trader' },
        { text: 'The best financial service I have ever used in my career.', author: 'Jane Smith', pos: 'Business Owner' }
      ]
    }
  }
}
</script>

<style scoped>
.stats-section {
  margin-top: -50px; /* Overlap with heading */
  margin-bottom: 80px;
}
.about-details {
  padding-bottom: 100px;
}
.testimonials {
  background-color: #fff;
  padding-bottom: 100px;
}
</style>