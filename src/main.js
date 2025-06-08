import { createApp } from "vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMagnifyingGlass,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import App from "./App.vue";

library.add(faMagnifyingGlass, faLessThan);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
