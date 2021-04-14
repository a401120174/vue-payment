import Vue from "vue";
import VueRouter from "vue-router";
import PayChoose from "../views/PayChoose.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PayChoose",
    component: PayChoose,
  },
  {
    path: "/PayInformation",
    name: "PayInformation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PayInformation.vue"),
  },
  {
    path: "/PaySuccess",
    name: "PaySuccess",
    component: () => import(/* webpackChunkName: "about" */ "../views/PaySuccess.vue"),
  },
  {
    path: "*",
    name: "PayChoose",
    component: PayChoose,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!from.name) {
    if (to.name === "PayInformation" || to.name === "PaySuccess") {
      next("/");
      return;
    }
  }
  next();
});

export default router;
