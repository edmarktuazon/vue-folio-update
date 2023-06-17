<script setup>
import CV from "../assets/docs/Edmark-updated-CV.pdf";
import EdmarkImg from "../assets/images/ed.jpg";

import { useMotion } from "@vueuse/motion";
import { reactive, ref } from "vue";

// motion
const targetEl_info = ref();
const targetEl_ul = ref();

useMotion(targetEl_info, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
});

useMotion(targetEl_ul, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 900 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 900 } },
});

// dynamic skills list
const skillList = reactive({
  frontendSkills: [
    {
      id: 1,
      name: "HTML5",
    },
    {
      id: 2,
      name: "JavaScript",
    },
    {
      id: 3,
      name: "GIT",
    },
    {
      id: 4,
      name: "CSS3(SASS)",
    },
    {
      id: 5,
      name: "VueJS",
    },
    {
      id: 6,
      name: "GitHub",
    },
    {
      id: 7,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      name: "Fundamental jQuery, TS, PHP",
    },
    {
      id: 9,
      name: "Figma",
    },
    {
      id: 10,
      name: "Bootstrap 4/5",
    },
    {
      id: 11,
      name: "Fundamental Java, C++, VB",
    },
    {
      id: 12,
      name: "Adobe XD",
    },
    {
      id: 13,
      name: "Data Encoding",
    },
    {
      id: 14,
      name: "Content Writing",
    },
  ],
});

const description = `I am a self-taught Frontend Web Developer from Cavite, Philippines, specializing in responsive and user-friendly Websites. My goal is to provide high-quality solutions tailored to my clients' needs. As a self-taught Developer, I am dedicated to continual growth and improvement, constantly enhancing my skills through ongoing learning.\n\nBesides Web Development, I also work as a Freelance Virtual Assistant, handling tasks such as Data Encoding, SEO and Content Writing. This diverse experience allows me to explore new opportunities beyond web development.`;

const formattedDescription = description.replace(/\n/g, "<br>");
</script>
<template>
  <section
    class="bg-backupPrimary py-24 min-h-screen grid place-items-center dark:bg-white"
  >
    <div
      class="z-50 relative px-8 xl:px-14 2xl:px-0 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div class="about-title flex justify-start items-center my-8 gap-3">
        <h3
          class="w-64 text-lightGray font-bold dark:text-backupSecondary text-4xl font-poppins mb-2 whitespace-nowrap"
        >
          About me
        </h3>
      </div>
      <div class="grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-auto">
        <figure class="place-items-center mx-auto grid sm:block">
          <img
            :src="EdmarkImg"
            alt="edmark image"
            class="h-[300px] object-cover sm:max-w-[300px] w-full rounded-lg"
          />
          <div class="mt-8 mx-16">
            <a
              :href="CV"
              target="_blank"
              class="text-lightGray font-poppins p-2 rounded-lg mt-8 text-center text-sm hover:bg-lightGray hover:text-white border-lightGray border"
            >
              <font-awesome-icon icon="fa-solid fa-file" /> &nbsp;View my CV
            </a>
          </div>
        </figure>
        <div class="relative lg:mt-0 col-span-1 xl:col-span-2 row-start-1">
          <p
            class="font-poppins text-lightGray leading-7"
            ref="targetEl_info"
            v-html="formattedDescription"
          ></p>
          <h3
            class="text-2xl font-bold text-gray mt-6 mb-4 dark:text-backupSecondary capitalize"
          >
            my proficiencies:
          </h3>
          <ul
            ref="targetEl_ul"
            class="grid grid-cols-2 sm:grid-cols-3 gap-0 sm:gap-1 items-center text-lightGray font-poppins leading-7"
          >
            <li
              class="leading-7 text-sm"
              v-for="skills in skillList.frontendSkills"
              :key="skills.id"
            >
              <font-awesome-icon icon="check" class="text-lightBlue" />
              {{ skills.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-title::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
</style>
