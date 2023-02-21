<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive, toRefs } from "vue";
import CertImg from "../assets/images/OJT-Cert_Tuazon-Edmark.png";

// dynamic nav links
const navLinks = reactive({
  home: "Home",
  about: "About",
  portfolio: "Portfolios",
  certificate: "Certificates",
  contact: "Contact",
});
const { home, about, portfolio, certificate, contact } = toRefs(navLinks);

// hamburger menu
const toggleMenu = () => {
  const navMenu = document.getElementById("nav-menus");
  navMenu.classList.toggle("isShow");
};

// toggle dark mode
// const isDark = useDark();
// const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="top-0 fixed w-full bg-primary dark:bg-[#f1f1f1] z-[999]">
    <nav class="px-8 xl:px-36">
      <div
        class="flex justify-between md:justify-around items-center py-6 lg:mx-0"
      >
        <a href="/" class="z-50">
          <span class="text-lightBlue font-bold text-2xl font-poppins"
            >Edmark.</span
          >
        </a>
        <ul
          class="nav-menu hidden md:flex gap-8 items-center font-poppins"
          id="nav-menus"
        >
          <li>
            <a
              href="#"
              class="nav-links font-medium text-gray dark:text-backupSecondary hover:text-lightBlue ease-out duration-300 tracking-wide"
              >{{ home }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="nav-links font-medium text-gray dark:text-backupSecondary hover:text-lightBlue ease-out duration-300 tracking-wide"
              >{{ about }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="nav-links font-medium text-gray dark:text-backupSecondary hover:text-lightBlue ease-out duration-300 tracking-wide"
              >{{ portfolio }}</a
            >
          </li>
          <li>
            <a
              :href="CertImg"
              target="_blank"
              class="nav-links font-medium text-gray dark:text-backupSecondary hover:text-lightBlue ease-out duration-300 tracking-wide"
              >{{ certificate }}</a
            >
          </li>
          <li>
            <a
              href="mailto:edmarktuazon03@gmail.com"
              class="nav-links font-medium text-gray dark:text-backupSecondary hover:text-lightBlue ease-out duration-300 tracking-wide"
              >{{ contact }}</a
            >
          </li>
        </ul>
        <!-- hamburger-->
        <div
          class="md:hidden hamburger-menu mobile-menu-button cursor-pointer z-50"
          @click="toggleMenu()"
        >
          <span class="block mx-0 bg-secondary h-[2px] w-5 rounded-full"></span>
          <span
            class="block my-[4px] mx-0 bg-secondary h-[2px] w-5 rounded-full"
          ></span>
          <span class="block mx-0 bg-secondary h-[2px] w-5 rounded-full"></span>
        </div>
        <!-- <div>
          <input
            type="checkbox"
            class="checkbox opacity-0 absolute"
            id="checkbox"
            @click="toggleDark()"
          />
          <label
            for="checkbox"
            class="label bg-backupSecondary flex items-center justify-between relative rounded-full w-14 p-2 h-[26px]"
          >
            <font-awesome-icon icon="fa-solid fa-moon" class="text-yellow" />
            <font-awesome-icon icon="fa-solid fa-sun" class="text-yellow" />
            <div
              class="switch bg-white rounded-full absolute top-[2px] left-[6px] w-[22px] h-[22px] transition-transform"
            ></div>
          </label>
        </div> -->
      </div>
    </nav>
  </header>
</template>
<style scoped>
.checkbox:checked + .label .switch {
  transform: translateX(23px);
}
.checkbox:checked + .label {
  background-color: #0f0f0f;
  width: 56px;
}

@media (max-width: 767px) {
  #nav-menus.isShow {
    opacity: 1;
    position: fixed;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 56px;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1d1e21;
  }
  .header {
    width: 100%;
    top: 0;
    border-radius: 0px;
  }

  .nav-menu .nav-links {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
