import { createApp } from "vue";
import "../src/style.css";
import App from "./App.vue";
import router from "./router";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faFile,
  faMoon,
  faPaperPlane,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck);
library.add(faFile);
library.add(faPaperPlane);
library.add(faSun);
library.add(faMoon);

// motion plugin
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.use(MotionPlugin);

app.mount("#app");
