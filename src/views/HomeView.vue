<!-- eslint-disable prettier/prettier -->
<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";

// USE MOTION PLUGIN
import { useMotion } from "@vueuse/motion";
import { reactive, ref, toRefs } from "vue";

const targetEl_headings = ref();

useMotion(targetEl_headings, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
  variants: { custom: { scale: 2 } },
});

const links = reactive({
  facebook: "https://www.facebook.com/edmark.io/",
  instagram: "https://www.instagram.com/edmark.ig/",
  linkedin: "https://www.linkedin.com/in/edmarktuazon/",
  github: "https://github.com/edmarktuazon",
});

const { facebook, instagram, linkedin, github } = toRefs(links);
</script>

<template>
  <section
    class="bg-backupPrimary h-screen flex justify-center items-center flex-col dark:bg-[#f1f1f1]"
  >
    <div
      class="z-50 relative px-8 xl:px-14 2xl:px-0 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div ref="targetEl_headings">
        <h4
          class="text-lightGray dark:text-backupSecondary tracking-wide text-xl"
        >
          Hey, I'm
        </h4>
        <h1
          class="heading-h1 font-bold text-gray dark:text-backupSecondary my-4 tracking-wide"
        >
          Edmark Tuazon<br />
          <span class="text-lightBlue">I build things for the web.</span>
        </h1>
        <h3
          class="heading-h3 text-lightGray dark:text-backupSecondary tracking-wide text-lg"
        >
          A Frontend Web Developer with a background in HTML, CSS, and
          JavaScript.
          <br class="hidden sm:flex" />
          I have hands-on experience in building visually appealing responsive
          websites, <br class="hidden sm:flex" />
          ensuring smooth user experiences across multiple platforms.
        </h3>
      </div>
      <div class="mt-16">
        <h3 class="text-lightGray dark:text-backupSecondary text-sm mb-2">
          connect with me
        </h3>
        <div class="icons-container flex justify-start items-center gap-3">
          <a :href="facebook" target="_blank">
            <FacebookIcon />
          </a>
          <a :href="instagram" target="_blank">
            <InstagramIcon />
          </a>
          <a :href="linkedin" target="_blank">
            <LinkedInIcon />
          </a>
          <a :href="github" target="_blank">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.heading-h1 {
  font-size: clamp(3rem, 0.3231rem + 7.2034vw, 4.375rem);
  line-height: 1.1;
}

.icons-container {
  width: 100%;
}
.icons-container::after {
  content: "";
  display: block;

  width: 100%;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
</style>
