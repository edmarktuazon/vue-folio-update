<script setup>
import ORSiteImg from "../assets/images/OR-site.png";
import IccImg from "../assets/images/icc.png";
import ShopweissImg from "../assets/images/shopweiss.png";
import TalaImg from "../assets/images/tala.png";
import TpSiteImg from "../assets/images/tp.jpg";

import { useMotion } from "@vueuse/motion";
import { reactive, ref, toRefs } from "vue";

// motion
const targetEl_firstInfo = ref();
const targetEl_secondInfo = ref();
const targetEl_thirdInfo = ref();
const targetEl_fourthInfo = ref();
const targetEl_fifthInfo = ref();

useMotion(targetEl_firstInfo, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
});

useMotion(targetEl_secondInfo, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
});

useMotion(targetEl_thirdInfo, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
});

useMotion(targetEl_fourthInfo, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
});

useMotion(targetEl_fifthInfo, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
  variants: { custom: { scale: 2 } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
});

// dynamic links

const folioLinks = reactive({
  shopWeiss: "https://shopweiss.store",
  talatun: "https://tala-beta.vercel.app/",
  oliviaRodrigo: "https://olivia-rodrigo-site-cloned.vercel.app/",
  taskPlace: "https://task-place.vercel.app/",
  icc: "https://icc-tmc-branch-2022-edmarktuazon.vercel.app/",
  oliviaOfficial: "https://oliviarodrigo.com",
});

const { shopWeiss, talatun, oliviaRodrigo, taskPlace, icc, oliviaOfficial } =
  toRefs(folioLinks);

// dynamic descriptions

const shopWeissDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid temporibus nisi minima repudiandae vero corrupti molestiae aspernatur ab numquam voluptatum impedit aliquam explicabo praesentium tempore magnam, cum sint aut consequuntur velit, incidunt hic. Exercitationem vel illum minima asperiores aut magnam. Corporis, ut.";

const talatunDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid temporibus nisi minima repudiandae vero corrupti molestiae aspernatur ab numquam voluptatum impedit aliquam explicabo praesentium tempore magnam, cum sint aut consequuntur velit, incidunt hic. Exercitationem vel illum minima asperiores aut magnam. Corporis, ut.";

const oliviaRodrigoDesc =
  "This site is my first Vue App, this is a dynamic web app. I've cloned this from the official site at";

const taskPlaceDesc =
  "This site is my OJT project, TaskPlace is a rental place for individuals or groups, the visitor/user can book place through google form or visitor/user may fill out the form on this site, and rent a place they want.";

const iccDesc =
  "Imus Computer College is a fully responsive Landing Page, visitor/user can view the courses offered by the school, and also visitor/user may register for the courses using direct link to the official site of ICC, this site is my entry for Website Competition for our school sportfest.";
</script>

<template>
  <section
    class="px-8 lg:px-0 bg-backupPrimary py-24 min-h-screen grid place-items-center dark:bg-white"
  >
    <div
      class="w-full px-0 xl:px-14 2xl:px-0 lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div class="portfolio-title flex justify-start items-center my-8 gap-3">
        <h3
          class="w-64 text-lightGray font-bold dark:text-backupSecondary text-4xl font-poppins mb-2"
        >
          Portfolio
        </h3>
      </div>
      <!-- portfolio section -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:px-8 xl:px-0 relative lg:gap-y-44 lg:gap-10 gap-0 place-items-center z-50"
      >
        <!-- shopweiss -->
        <!-- first portfolio -->
        <div
          class="my-6 lg:my-0 lg:mb-0 mb-24 z-50 row-end-3 lg:row-end-auto"
          ref="targetEl_firstInfo"
        >
          <div class="relative left-0 lg:left-14 xl:left-24">
            <div class="flex justify-start">
              <h4 class="font-poppins text-gray text-xl font-semibold">
                Shopweiss
              </h4>
            </div>
            <div class="bg-primary p-4 my-2">
              <p class="text-lightGray font-poppins leading-7">
                {{ shopWeissDesc }}
              </p>
            </div>
            <div class="flex gap-4 justify-start">
              <!-- tech -->
              <div>
                <div class="flex justify-start lg:justify-start">
                  <div class="flex justify-start items-center lg:justify-end">
                    <h5 class="text-gray font-bold">Tech used:</h5>
                  </div>
                </div>
                <ul
                  class="block lg:flex gap-1 justify-start items-center lg:justify-start"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">HTML</li>
                  <li class="text-[12px] font-poppins text-lightBlue">
                    Tailwind CSS
                  </li>
                  <li class="text-[12px] font-poppins text-lightBlue">
                    JavaScript
                  </li>
                </ul>
              </div>
              <!-- divider -->
              <span
                class="block h-20 lg:h-12 w-[1px] bg-backupSecondary"
              ></span>
              <!-- date -->
              <div>
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Date published</h5>
                </div>
                <ul
                  class="flex gap-1 justify-start items-center lg:justify-start"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">
                    November 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <a :href="shopWeiss" target="_blank" v-motion-fade-visible>
            <img
              :src="ShopweissImg"
              alt="Shopweiss banner screen capture  "
              class="w-full"
            />
          </a>
        </div>

        <!-- talatun -->
        <!-- second  portfolio -->
        <a :href="talatun" target="_blank" v-motion-fade-visible>
          <img
            :src="TalaImg"
            alt="Talatun banner screen capture  "
            class="w-full"
          />
        </a>
        <div class="mt-6 lg:mb-0 mb-24 lg:my-0" ref="targetEl_secondInfo">
          <div class="relative right-0 lg:right-14 xl:right-24">
            <div class="flex flex-col">
              <h4
                class="font-poppins text-gray text-xl font-semibold flex justify-start lg:justify-end"
              >
                Talatun
              </h4>
            </div>
            <div class="bg-primary p-4 my-2">
              <p class="text-lightGray font-poppins leading-7">
                {{ talatunDesc }}
              </p>
            </div>
            <div class="flex gap-4 justify-start lg:justify-end">
              <!-- tech  -->
              <div>
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Tech used:</h5>
                </div>
                <ul
                  class="block lg:flex gap-1 justify-start items-center lg:justify-end"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">HTML</li>
                  <li class="text-[12px] font-poppins text-lightBlue">CSS3</li>
                  <li class="text-[12px] font-poppins text-lightBlue">
                    JavaScript
                  </li>
                </ul>
              </div>
              <!-- divider -->
              <span
                class="block h-20 lg:h-12 w-[1px] bg-backupSecondary"
              ></span>
              <!-- date -->
              <div>
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Date published</h5>
                </div>
                <ul
                  class="flex gap-1 justify-start items-center lg:justify-end"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">
                    December 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- olivia rodrigo -->
        <!-- third  portfolio -->
        <div
          class="my-6 lg:my-0 mt-6 lg:mb-0 mb-24 z-50"
          ref="targetEl_thirdInfo"
        >
          <div class="relative left-0 lg:left-14 xl:left-24">
            <div class="flex justify-start">
              <h4 class="font-poppins text-gray text-xl font-semibold">
                Olivia Rodrigo Site Cloned
              </h4>
            </div>
            <div class="bg-primary p-4 my-2">
              <p class="text-lightGray font-poppins leading-7">
                {{ oliviaRodrigoDesc }}
                <span class="text-lightBlue">
                  <a :href="oliviaOfficial" target="_blank"
                    >oliviarodrigo.com</a
                  >
                </span>
              </p>
            </div>

            <div class="flex gap-4 justify-start">
              <!-- tech -->
              <div>
                <div class="flex justify-start lg:justify-start">
                  <div class="flex justify-start items-center lg:justify-end">
                    <h5 class="text-gray font-bold">Tech used:</h5>
                  </div>
                </div>
                <ul
                  class="block lg:flex gap-1 justify-start items-center lg:justify-start"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">
                    Vue.js
                  </li>
                  <li class="text-[12px] font-poppins text-lightBlue">
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <!-- divider -->
              <span
                class="block h-14 lg:h-12 w-[1px] bg-backupSecondary"
              ></span>
              <!-- date -->
              <div>
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Date published</h5>
                </div>
                <ul
                  class="flex gap-1 justify-start items-center lg:justify-start"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">
                    September 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a
          :href="oliviaRodrigo"
          target="_blank"
          class="row-start-5 lg:row-start-auto"
          v-motion-fade-visible
        >
          <img
            :src="ORSiteImg"
            alt="Olivia banner screen capture  "
            class="w-full"
          />
        </a>

        <!-- taskplace -->
        <!-- fourth portfolio -->
        <a :href="taskPlace" target="_blank" v-motion-fade-visible>
          <img
            :src="TpSiteImg"
            alt="TaskPlace banner screen capture  "
            class="w-full"
          />
        </a>
        <div class="mt-6 lg:mb-0 mb-24 lg:my-0" ref="targetEl_fourthInfo">
          <div class="relative right-0 lg:right-14 xl:right-24">
            <div class="flex flex-col">
              <h4
                class="font-poppins text-gray text-xl font-semibold flex justify-start lg:justify-end"
              >
                TaskPlace
              </h4>
            </div>
            <div class="bg-primary p-4 my-2">
              <p class="text-lightGray font-poppins leading-7">
                {{ taskPlaceDesc }}
              </p>
            </div>
            <div class="flex gap-4 justify-start lg:justify-end">
              <!-- tech  -->
              <div>
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Tech used:</h5>
                </div>
                <ul
                  class="block lg:flex gap-1 justify-start items-center lg:justify-end"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">HTML</li>
                  <li class="text-[12px] font-poppins text-lightBlue">SCSS</li>
                  <li class="text-[12px] font-poppins text-lightBlue">
                    JavaScript
                  </li>
                  <li class="text-[12px] font-poppins text-lightBlue">
                    Formspree (form backend, API)
                  </li>
                </ul>
              </div>
              <!-- divider -->
              <span
                class="block h-28 lg:h-12 w-[1px] bg-backupSecondary"
              ></span>
              <!-- date -->
              <div>
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Date published</h5>
                </div>
                <ul
                  class="flex gap-1 justify-start items-center lg:justify-end"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">
                    June 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- icc  -->
        <!-- fifth portfolio -->
        <div class="my-6 lg:my-0 z-50" ref="targetEl_fifthInfo">
          <div class="relative left-0 lg:left-14 xl:left-24">
            <div class="flex justify-start">
              <h4 class="font-poppins text-gray text-xl font-semibold">
                Imus Computer College
              </h4>
            </div>
            <div class="bg-primary p-4 my-2">
              <p class="text-lightGray font-poppins leading-7">
                {{ iccDesc }}
              </p>
            </div>

            <div class="flex gap-4 justify-start">
              <!-- tech -->
              <div>
                <div class="flex justify-start lg:justify-start">
                  <div class="flex justify-start items-center lg:justify-end">
                    <h5 class="text-gray font-bold">Tech used:</h5>
                  </div>
                </div>
                <ul
                  class="block lg:flex gap-1 justify-start items-center lg:justify-start"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">HTML</li>
                  <li class="text-[12px] font-poppins text-lightBlue">
                    Bootstrap 5
                  </li>
                  <li class="text-[12px] font-poppins text-lightBlue">
                    JavaScript
                  </li>
                </ul>
              </div>
              <!-- divider -->
              <span
                class="block h-20 lg:h-12 w-[1px] bg-backupSecondary"
              ></span>
              <!-- date -->
              <div>
                <div class="flex justify-start items-center lg:justify-end">
                  <h5 class="text-gray font-bold">Date published</h5>
                </div>
                <ul
                  class="flex gap-1 justify-start items-center lg:justify-start"
                >
                  <li class="text-[12px] font-poppins text-lightBlue">
                    May 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a
          :href="icc"
          target="_blank"
          class="row-start-[9] lg:row-start-auto"
          v-motion-fade-visible
        >
          <img :src="IccImg" alt="ICC banner screen capture  " class="w-full" />
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.portfolio-title::after {
  content: "";
  display: block;
  width: 100%;
  max-width: 100%;
  height: 1px;
  background-color: rgb(32, 32, 32);
}
</style>
