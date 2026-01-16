
<template>
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header-text">
            <h6>{{ subtitle }}</h6>
            <h4>{{ title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeading',
  props: {
    title: { type: String, default: 'Mexant Services' },
    subtitle: String
  },
  mounted() {
    // Lifecycle hook requirement
    console.log(`Page: ${this.title} is now active.`);
  }
}
</script>

<style scoped>
.page-heading {
  background-image: url(https://templatemo.com/templates/templatemo_574_mexant/assets/images/page-heading-bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px 0px 50px 0px;
  text-align: center;
  color: #fff;
  margin-top: 0px; /* Aligned under the main header */
}

.page-heading h6 {
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}

.page-heading h4 {
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
}
</style>