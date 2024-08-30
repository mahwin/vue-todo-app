import Vue from "vue";
import Router from "vue-router";

import TodoList from "../components/todo/list";
import TodoForm from "../components/todo/form";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: TodoList },
    {
      path: "/todos",
      name: "TodoList",
      component: TodoList,
    },
    {
      path: "/add-todo",
      name: "AddTodo",
      component: TodoForm,
    },
  ],
});
