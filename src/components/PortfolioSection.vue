<script setup>
// import ORSiteImg from "../assets/images/OR-site.png";
// import IccImg from "../assets/images/icc.png";
// import ShopweissImg from "../assets/images/shopweiss.png";
// import TpSiteImg from "../assets/images/tp.jpg";

import { useMotion } from "@vueuse/motion";
// eslint-disable-next-line no-unused-vars
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

// const folioLinks = reactive({
//   shopWeiss: "https://shopweiss.store",
//   oliviaRodrigo: "https://olivia-rodrigo-site-cloned.vercel.app/",
//   taskPlace: "https://task-place.vercel.app/",
//   icc: "https://icc-tmc-branch-2022-edmarktuazon.vercel.app/",
// });

// const { shopWeiss, oliviaRodrigo, taskPlace, icc } = toRefs(folioLinks);
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
          class="text-lightGray font-bold dark:text-backupSecondary text-4xl mb-2"
        >
          Portfolios
        </h3>
      </div>
      <!-- portfolio section -->
      <h4 class="text-lightGray text-lg font-normal text-center">
        Posting soon...
      </h4>
    </div>
  </section>
</template>
<style scoped>
.portfolio-title::after {
  display: none;
}
@media only screen and (min-width: 992px) {
  .portfolio-title::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(32, 32, 32);
  }
}
</style>
