<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <footer class="bg-primary p-6 z-50 relative dark:bg-white">
    <p class="text-center text-lightGray">
      Copywright &copy;{{ currentYear }} Edmark Tuazon. All rights reserved.
    </p>
  </footer>
</template>
