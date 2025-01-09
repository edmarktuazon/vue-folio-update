<script setup>
import CV from "../assets/docs/edmarktuazon-cv.pdf";
import EdmarkImg from "../assets/images/ed.jpg";

import { useMotion } from "@vueuse/motion";
import { defineComponent, reactive, ref } from "vue";

import NavMenu from "../components/Navigation.vue";

defineComponent({
  NavMenu,
});

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
      name: "CSS3(SASS)",
    },
    {
      id: 3,
      name: "Tailwind CSS",
    },
    {
      id: 4,
      name: "Bootstrap",
    },
    {
      id: 5,
      name: "Javascript",
    },
    {
      id: 6,
      name: "Vue JS",
    },
    {
      id: 6,
      name: "Git",
    },
    {
      id: 7,
      name: "GitHub",
    },
    {
      id: 8,
      name: "Go Daddy",
    },
    {
      id: 9,
      name: "Hostinger",
    },
  ],
});
</script>
<template>
  <section
    id="about"
    class="bg-backupPrimary py-24 min-h-screen grid place-items-center dark:bg-white"
  >
    <div
      class="z-50 relative px-8 xl:px-14 2xl:px-0 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div class="about-title flex justify-start items-center my-8 gap-3">
        <h3
          class="text-lightGray font-bold dark:text-backupSecondary text-4xl mb-2 whitespace-wrap lg:whitespace-nowrap"
        >
          Technologies I've been working
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
              class="text-lightGray p-2 rounded-lg mt-8 text-center text-sm hover:bg-lightGray hover:text-white border-lightGray border"
            >
              <font-awesome-icon icon="fa-solid fa-file" /> &nbsp;Take a Peek at
              My CV
            </a>
          </div>
        </figure>
        <div class="relative lg:mt-0 col-span-1 xl:col-span-2 row-start-1">
          <p class="text-lightGray leading-7 mb-8">
            I have experience building responsive, dynamic websites using modern
            frontend technologies such as HTML5, CSS3 (SASS), JavaScript, and
            VueJS. I utilize version control with Git and GitHub, and employ
            frameworks like Tailwind CSS and Bootstrap for efficient UI
            development. Additionally, I have managed web hosting and domain
            services through platforms like GoDaddy and Hostinger, ensuring
            seamless deployment and website performance.
          </p>
          <ul
            ref="targetEl_ul"
            class="grid grid-cols-2 sm:grid-cols-3 gap-0 sm:gap-1 items-center text-lightGray leading-7"
          >
            <li
              class="leading-7 text-sm"
              v-for="skills in skillList.frontendSkills"
              :key="skills.id"
            >
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
  display: none;
}
@media only screen and (min-width: 992px) {
  .about-title::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(32, 32, 32);
  }
}
</style>
