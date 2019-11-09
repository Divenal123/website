// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "~/assets/vendors/fontawesome/css/all.min.css";
import "~/assets/vendors/flat-icon/font/flaticon.css";
import "~/assets/vendors/linericon/style.css";
import "~/assets/scss/style.scss";

import Header from "~/layouts/Header.vue";
import $ from "jquery";
//import "~/assets/js/jquery.ajaxchimp.min.js";
//import "~/assets/js/jquery.magnific-popup.min.js";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(BootstrapVue);
  Vue.component("Layout", Header);
  // head.script.push({ src: "/assets/vendors/jquery/jquery-3.2.1.min.js " });
}
