import { metaPublic, metaAccount } from "./meta-config";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage"),
    meta: metaPublic,
  },
  {
    path: "/home",
    component: () => import("pages/HomePage"),
    meta: metaAccount,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
