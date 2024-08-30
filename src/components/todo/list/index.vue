<template>
  <div>
    <Header />
    <section class="p-2">
      <ListTodo :listTabIndex="listTabIndex" :todoListInfos="todos" />
    </section>
  </div>
</template>

<script>
import { TAB } from "../constants.js";

import Header from "../header.vue";
import ListTodo from "./listTodo.vue";

import { mapState } from "vuex";

export default {
  name: "todo-component",
  components: {
    Header,
    ListTodo,
  },

  data() {
    return {
      tab: TAB.목록,
      todoListInfos: [],
      listTabIndex: 0,
    };
  },

  computed: {
    sortedTodoList() {
      this.sortedTodo();
      return this.todoListInfos;
    },
    ...mapState(["todos"]),
  },

  methods: {},
};
</script>
