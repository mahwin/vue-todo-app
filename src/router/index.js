import Vue from "vue";
import Router from "vue-router";

import Todo from "../components/todo";
import Test from "../components/test";
import Test2 from "../components/test2";

import EventBus from "../components/eventBus/eventBusTest.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Todo",
      component: Todo,
    },
    {
      path: "/test",
      name: "Test",
      component: Test,
    },
    {
      path: "/test2",
      name: "Test2",
      component: Test2,
    },
    { path: "/eventbus", component: EventBus },
  ],
});
