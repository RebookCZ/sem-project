<template>
  <div class="section-heading">
    <h6>{{ subtitle }}</h6>
    <h4>{{ titlePart1 }} <em>{{ titleEmphasis }}</em> {{ titlePart2 }}</h4>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    subtitle: String,
    titlePart1: String,
    titleEmphasis: String,
    titlePart2: String
  },
  methods: {
    // Utility to log when a section enters the viewport
    onHeaderHover() {
      this.$emit('header-hovered', this.titleEmphasis);
    }
  }
}
</script>

<style scoped>
.section-heading {
  text-align: center;
  margin-bottom: 60px;
}
.section-heading h6 {
  color: #ff511a;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.section-heading h4 {
  color: #2a2a2a;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
}
.section-heading h4 em {
  font-style: normal;
  color: #22b3c1;
}
</style>