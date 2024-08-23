<template>
  <div>
    <Header :tab="tab" @update:tab="handleUpdateTab" />
    <section class="p-2">
      <ListTodo v-if="tab === '목록'" :todos="todos" />
      <AddTodo v-else @update:todos="handleAddTodo" />
    </section>
  </div>
</template>

<script>
import { TAB } from "./constants.js";

import Header from "./header.vue";
import ListTodo from "./listTodo.vue";
import AddTodo from "./addTodo.vue";

export default {
  name: "todo-component",
  components: {
    Header,
    ListTodo,
    AddTodo,
  },
  data() {
    return {
      todos: [{ title: "title", description: "description" }],
      tab: TAB.목록,
    };
  },
  methods: {
    handleUpdateTab(tab) {
      this.tab = tab;
    },
    handleAddTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
  watch: {},
};
</script>
