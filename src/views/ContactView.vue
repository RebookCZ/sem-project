<template>
  <div class="contact-page">
    <PageHeading title="Contact Us" subtitle="Say Hello to our team" />

    <section class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-12">
          <SectionHeader 
            subtitle="Send Message" 
            titlePart1="Feel Free To" 
            titleEmphasis="Contact" 
            titlePart2="Us" 
          />
          
          <div class="form-wrapper mt-4">
            <form @submit.prevent="handleContactSubmit">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <input v-model="contactForm.name" type="text" class="form-control custom-input" placeholder="Name" required>
                </div>
                <div class="col-md-6 mb-3">
                  <input v-model="contactForm.email" type="email" class="form-control custom-input" placeholder="Email" required>
                </div>
                <div class="col-12 mb-3">
                  <textarea v-model="contactForm.message" class="form-control custom-input" rows="5" placeholder="Message"></textarea>
                </div>
                <div class="col-12 text-center">
                  <div class="orange-button">
                    <button type="submit">Submit Message</button>
                  </div>
                </div>
              </div>
            </form>

            <div v-if="successVisible" class="alert alert-success mt-4">
              Thank you, {{ contactForm.name }}! We have received your message.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: 'ContactView',
  components: { PageHeading, SectionHeader },
  data() {
    return {
      successVisible: false,
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleContactSubmit() {
      console.log('Form data submitted:', this.contactForm);
      this.successVisible = true;
      setTimeout(() => {
        this.successVisible = false;
        this.contactForm = { name: '', email: '', message: '' };
      }, 4000);
    }
  }
}
</script>

<style scoped>
.custom-input {
  border-radius: 15px;
  background-color: #f4f7fb;
  border: none;
  padding: 12px 20px;
}
.custom-input:focus {
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(34, 179, 193, 0.2);
}
</style>
