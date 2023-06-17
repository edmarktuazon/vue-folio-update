<script setup>
import ORSiteImg from "../assets/images/OR-site.png";
import IccImg from "../assets/images/icc.png";
import ShopweissImg from "../assets/images/shopweiss.png";
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
  oliviaRodrigo: "https://olivia-rodrigo-site-cloned.vercel.app/",
  taskPlace: "https://task-place.vercel.app/",
  icc: "https://icc-tmc-branch-2022-edmarktuazon.vercel.app/",
});

const { shopWeiss, oliviaRodrigo, taskPlace, icc } = toRefs(folioLinks);

// dynamic descriptions

const shopWeissDesc =
  "Shopweiss is a user-friendly online clothing store that offers a simple and hassle-free shopping experience. The platform features a wide range of clothing items, and customers can browse and make purchases directly on the website. Each product on the shop page includes a convenient Carousell link for additional details and easy transactions.";

const oliviaRodrigoDesc = `This website serves as my initial Vue application, showcasing a dynamic web app. I have taken inspiration from the official site at <a href="https://www.oliviarodrigo.com" style="color: #0dcaf0;">oliviarodrigo.com</a> and cloned it to create this unique platform.`;

const taskPlaceDesc =
  "TaskPlace is my OJT project that serves as a convenient rental platform for individuals or groups seeking suitable spaces. Users have two options to book their desired place: they can either utilize the integrated Google Form or fill out a form directly on the website. Once submitted, the form allows visitors to efficiently rent a place of their choice. ";

const iccDesc =
  "Imus Computer College designed a fully responsive Landing Page showcasing their course offerings. Visitors can easily explore the options and register for courses through a direct link to ICC's official site. This site I was created as an entry for the Website Competition during our school sport festival.";
</script>

<template>
  <section
    class="px-8 lg:px-0 bg-backupPrimary py-24 min-h-screen grid place-items-center dark:bg-white"
  >
    <div
      class="w-full px-0 xl:px-14 2xl:px-0 lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div
        class="portfolio-title flex justify-start items-center my-8 gap-3 px-0 lg:px-8 xl:px-0"
      >
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
                <ul class="grid gap-1">
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
        <!-- olivia rodrigo -->
        <!-- second  portfolio -->
        <a
          :href="oliviaRodrigo"
          target="_blank"
          class="row-start-3 lg:row-start-auto"
          v-motion-fade-visible
        >
          <img
            :src="ORSiteImg"
            alt="Olivia banner screen capture  "
            class="w-full"
          />
        </a>
        <div
          class="my-6 lg:my-0 mt-6 lg:mb-0 mb-24 z-50"
          ref="targetEl_thirdInfo"
        >
          <div class="relative right-0 lg:right-14 xl:right-24">
            <div class="flex justify-end">
              <h4 class="font-poppins text-gray text-xl font-semibold">
                Olivia Rodrigo Site Cloned
              </h4>
            </div>
            <div class="bg-primary p-4 my-2">
              <p class="text-lightGray font-poppins leading-7">
                <span v-html="oliviaRodrigoDesc"></span>
              </p>
            </div>

            <div class="flex gap-4 justify-end">
              <!-- tech -->
              <div>
                <div class="flex justify-end">
                  <h5 class="text-gray font-bold">Tech used:</h5>
                </div>
                <ul class="grid gap-1 place-items-end">
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
                <div class="flex justify-end items-center">
                  <h5 class="text-gray font-bold">Date published</h5>
                </div>
                <ul class="flex gap-1 justify-end items-center">
                  <li class="text-[12px] font-poppins text-lightBlue">
                    September 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- taskplace -->
        <!-- third portfolio -->
        <div class="mt-6 lg:mb-0 mb-24 lg:my-0" ref="targetEl_fourthInfo">
          <div class="relative left-0 lg:left-14 xl:left-24">
            <div class="flex justify-start">
              <h4 class="font-poppins text-gray text-xl font-semibold">
                TaskPlace
              </h4>
            </div>
            <div class="bg-primary p-4 my-2">
              <p class="text-lightGray font-poppins leading-7">
                {{ taskPlaceDesc }}
              </p>
            </div>
            <div class="flex gap-4 justify-start">
              <!-- tech  -->
              <div>
                <div class="flex justify-start items-center">
                  <h5 class="text-gray font-bold">Tech used:</h5>
                </div>
                <ul class="grid gap-1">
                  <li
                    class="text-[12px] font-poppins text-lightBlue flex justify-start"
                  >
                    HTML
                  </li>
                  <li
                    class="text-[12px] font-poppins text-lightBlue flex justify-start"
                  >
                    SCSS
                  </li>
                  <li
                    class="text-[12px] font-poppins text-lightBlue flex justify-start"
                  >
                    JavaScript
                  </li>
                  <li
                    class="text-[12px] whitespace-nowrap font-poppins text-lightBlue flex justify-start"
                  >
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
                <div class="flex justify-end">
                  <h5 class="text-gray font-bold whitespace-nowrap">
                    Date published
                  </h5>
                </div>
                <ul class="flex gap-1 justify-start items-center">
                  <li class="text-[12px] font-poppins text-lightBlue">
                    June 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row-start-5 lg:row-start-auto">
          <a :href="taskPlace" target="_blank" v-motion-fade-visible>
            <img
              :src="TpSiteImg"
              alt="TaskPlace banner screen capture"
              class="w-full"
            />
          </a>
        </div>
        <!-- icc  -->
        <!-- fourth portfolio -->
        <div class="row-start-7 lg:row-start-auto">
          <a :href="icc" target="_blank" v-motion-fade-visible>
            <img
              :src="IccImg"
              alt="ICC banner screen capture  "
              class="w-full"
            />
          </a>
        </div>
        <div class="my-6 lg:my-0 z-50" ref="targetEl_fifthInfo">
          <div class="relative right-0 lg:right-14 xl:right-24">
            <div class="flex justify-end">
              <h4 class="font-poppins text-gray text-xl font-semibold">
                Imus Computer College
              </h4>
            </div>
            <div class="bg-primary p-4 my-2">
              <p class="text-lightGray font-poppins leading-7">
                {{ iccDesc }}
              </p>
            </div>

            <div class="flex gap-4 justify-end">
              <!-- tech -->
              <div>
                <div class="flex justify-end">
                  <div class="flex justify-end items-center l">
                    <h5 class="text-gray font-bold">Tech used:</h5>
                  </div>
                </div>
                <ul class="grid gap-1 place-items-end">
                  <li
                    class="text-[12px] font-poppins text-lightBlue flex justify-end"
                  >
                    HTML
                  </li>
                  <li
                    class="text-[12px] font-poppins text-lightBlue flex justify-end"
                  >
                    Bootstrap 5
                  </li>
                  <li
                    class="text-[12px] font-poppins text-lightBlue flex justify-end"
                  >
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
                <ul class="flex gap-1 justify-end items-center">
                  <li class="text-[12px] font-poppins text-lightBlue">
                    May 2022
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- st peter -->
        <!-- fifth portfolio -->
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
