<script setup>
import TheAboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";
import TheNavigation from "./components/Navigation.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
</script>

<template>
  <TheNavigation />
  <RouterView />
  <TheAboutSection />
  <PortfolioSection />
  <!-- <FeedbacksSection /> -->
  <ContactSection />
  <Footer />
</template>
