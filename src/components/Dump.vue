<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
          <h4 class="text-gray text-xl font-semibold">Shopweiss</h4>
        </div>
        <div class="bg-primary p-4 my-2">
          <p class="text-lightGray leading-7">
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
              <li class="text-[0.75rem] text-lightBlue">HTML</li>
              <li class="text-[12px] text-lightBlue">Tailwind CSS</li>
              <li class="text-[0.75rem] text-lightBlue">JavaScript</li>
            </ul>
          </div>
          <!-- divider -->
          <span
            class="block h-20 lg:h-12 w-[0.0625rem] bg-backupSecondary"
          ></span>
          <!-- date -->
          <div>
            <div class="flex justify-start items-center lg:justify-end">
              <h5 class="text-gray font-bold">Date published</h5>
            </div>
            <ul class="flex gap-1 justify-start items-center lg:justify-start">
              <li class="text-[0.75rem] text-lightBlue">November 2022</li>
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
    <div class="my-6 lg:my-0 mt-6 lg:mb-0 mb-24 z-50" ref="targetEl_thirdInfo">
      <div class="relative right-0 lg:right-14 xl:right-24">
        <div class="flex justify-end">
          <h4 class="text-gray text-xl font-semibold">
            Olivia Rodrigo Site Cloned
          </h4>
        </div>
        <div class="bg-primary p-4 my-2">
          <p class="text-lightGray leading-7">
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
              <li class="text-[12px] text-lightBlue">Vue.js</li>
              <li class="text-[12px] text-lightBlue">Tailwind CSS</li>
            </ul>
          </div>
          <!-- divider -->
          <span class="block h-14 lg:h-12 w-[1px] bg-backupSecondary"></span>
          <!-- date -->
          <div>
            <div class="flex justify-end items-center">
              <h5 class="text-gray font-bold">Date published</h5>
            </div>
            <ul class="flex gap-1 justify-end items-center">
              <li class="text-[12px] text-lightBlue">September 2022</li>
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
          <h4 class="text-gray text-xl font-semibold">TaskPlace</h4>
        </div>
        <div class="bg-primary p-4 my-2">
          <p class="text-lightGray leading-7">
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
              <li class="text-[12px] text-lightBlue flex justify-start">
                HTML
              </li>
              <li class="text-[12px] text-lightBlue flex justify-start">
                SCSS
              </li>
              <li class="text-[12px] text-lightBlue flex justify-start">
                JavaScript
              </li>
              <li
                class="text-[12px] whitespace-nowrap text-lightBlue flex justify-start"
              >
                Formspree (form backend, API)
              </li>
            </ul>
          </div>
          <!-- divider -->
          <span class="block h-28 lg:h-12 w-[1px] bg-backupSecondary"></span>
          <!-- date -->
          <div>
            <div class="flex justify-end">
              <h5 class="text-gray font-bold whitespace-nowrap">
                Date published
              </h5>
            </div>
            <ul class="flex gap-1 justify-start items-center">
              <li class="text-[12px] text-lightBlue">June 2022</li>
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
        <img :src="IccImg" alt="ICC banner screen capture  " class="w-full" />
      </a>
    </div>
    <div class="my-6 lg:my-0 z-50" ref="targetEl_fifthInfo">
      <div class="relative right-0 lg:right-14 xl:right-24">
        <div class="flex justify-end">
          <h4 class="text-gray text-xl font-semibold">Imus Computer College</h4>
        </div>
        <div class="bg-primary p-4 my-2">
          <p class="text-lightGray leading-7">
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
              <li class="text-[12px] text-lightBlue flex justify-end">HTML</li>
              <li class="text-[12px] text-lightBlue flex justify-end">
                Bootstrap 5
              </li>
              <li class="text-[12px] text-lightBlue flex justify-end">
                JavaScript
              </li>
            </ul>
          </div>
          <!-- divider -->
          <span class="block h-20 lg:h-12 w-[1px] bg-backupSecondary"></span>
          <!-- date -->
          <div>
            <div class="flex justify-start items-center lg:justify-end">
              <h5 class="text-gray font-bold">Date published</h5>
            </div>
            <ul class="flex gap-1 justify-end items-center">
              <li class="text-[12px] text-lightBlue">May 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- st peter -->
    <!-- fifth portfolio -->
  </div>
</template>
