import Vue from "vue";
import Router from "vue-router";
import User from "@/pages/User";
import Users from "@/pages/Users";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Users",
      component: Users,
      props: true
    },
    {
      path: "/user/:id",
      name: "User",
      component: User,
      props: true
    }
  ]
});
