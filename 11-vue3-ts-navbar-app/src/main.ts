import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faFacebook, faTwitter, faLinkedin, faBehance);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
