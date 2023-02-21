<script setup>
import Resume from "../assets/docs/DevEd.pdf";
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
      name: "CSS3, SCSS",
    },
    {
      id: 3,
      name: "Tailwind CSS",
    },
    {
      id: 4,
      name: "Bootstrap 4/5",
    },
    {
      id: 5,
      name: "JavaScript",
    },
    {
      id: 6,
      name: "Basic jQuery",
    },
    {
      id: 7,
      name: "Pug.js",
    },
    {
      id: 8,
      name: "Vue.js",
    },
    {
      id: 9,
      name: "Familiarity in PHP",
    },
    {
      id: 10,
      name: "Git",
    },
    {
      id: 11,
      name: "GitHub",
    },
    {
      id: 12,
      name: "Figma Software",
    },
    {
      id: 13,
      name: "Adobe XD",
    },
  ],
});

const description =
  "I' am self-taught, freelance/part-time Frontend Web Developer based in Cavite, Philippines I specialized in Frontend Web Development. I'm focus on creating responsive, and user-friendly websites, I use the latest frontend technologies to bring my client visions to project. I'm dedicated to providing good quality solutions that meet the needs and goals of my clients, as a self-taught Frontend Web Developer, I honed my skills through continuous learning and exploring.";
</script>
<template>
  <section
    class="bg-backupPrimary py-24 min-h-screen grid place-items-center dark:bg-white"
  >
    <div class="z-50 relative w-full lg:max-w-[60%] px-4 lg:px-0">
      <div class="about-title flex justify-start items-center my-8 gap-3">
        <h3
          class="w-64 text-lightGray font-bold dark:text-backupSecondary text-4xl font-poppins mb-2"
        >
          About me
        </h3>
      </div>
      <!-- <div>
        <div class="about-title flex justify-start items-center gap-3">
          <h2
            class="heading-h2 absolute text-backupSecondary dark:text-lightBlue font-black text-9xl tracking-wider"
          >
            ABOUT
          </h2>
          <div class="p-5 ml-0 my-2 sm:my-8 sm:ml-4">
            <h2
              class="text-2xl sm:text-4xl font-poppins text-white dark:text-backupSecondary dark:font-semibold relative"
            >
              What about me?
            </h2>
          </div>
        </div>
      </div> -->
      <div class="grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-auto">
        <figure class="place-items-center mx-auto grid sm:block">
          <img
            :src="EdmarkImg"
            alt="edmark image"
            class="h-[300px] object-cover sm:max-w-[300px] w-full rounded-lg"
          />
          <div class="mt-8 mx-16">
            <a
              :href="Resume"
              target="_blank"
              class="text-lightGray font-poppins p-2 text-sm rounded-lg mt-8 text-center hover:bg-lightGray hover:text-white border-lightGray border-2"
            >
              <font-awesome-icon icon="fa-solid fa-file" /> &nbsp;View my resume
            </a>
          </div>
        </figure>
        <div class="relative mt-12 lg:mt-0 col-span-1 xl:col-span-2">
          <p
            class="font-poppins text-lightGray leading-7 text-start lg:text-justify"
            ref="targetEl_info"
          >
            {{ description }}
          </p>
          <h3
            class="text-2xl font-bold text-gray mt-6 mb-4 dark:text-backupSecondary capitalize"
          >
            my tech stacks:
          </h3>
          <ul
            ref="targetEl_ul"
            class="grid grid-cols-2 md:grid-cols-3 text-lightGray font-poppins leading-7"
          >
            <li
              class="leading-7"
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
  max-width: 100%;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
</style>
