<script setup>
const igLink = "https://www.instagram.com/edmark.ig/";
</script>
<template>
  <section
    class="bg-backupPrimary flex justify-center items-center flex-col min-h-[50vh] dark:bg-white"
  >
    <h3 class="text-gray font-poppins text-3xl font-bold text-center">
      Get in touch
    </h3>
    <h4
      class="text-lightGray font-poppins text-lg font-normal text-center mt-4"
    >
      Have a project in mind? Let's talk!
    </h4>
    <a
      :href="igLink"
      target="_blank"
      class="text-lightGray font-poppins p-2 text-sm rounded-lg w-32 text-center mt-6 hover:bg-lightGray hover:text-white"
      style="border: 1px solid #6c717e"
    >
      <font-awesome-icon icon="fa-solid fa-paper-plane" />&nbsp; Say hello
    </a>
  </section>
</template>
