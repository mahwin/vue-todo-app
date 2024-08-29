import Vue from "vue";
import Router from "vue-router";

import Todo from "../components/todo";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Todo",
      component: Todo,
    },
  ],
});
