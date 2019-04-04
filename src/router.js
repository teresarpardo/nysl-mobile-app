import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Information from "./views/Information.vue";
import Contact from "./views/Contact.vue";
import AdressInfo from "./components/AdressInfo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/information",
      name: "information",
      component: Information
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/location/:adress",
      name: "location",
      component: AdressInfo
    }
  ]
});
