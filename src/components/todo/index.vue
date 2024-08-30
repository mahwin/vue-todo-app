<template>
  <div>
    <Header :tab="tab" @update:tab="handleUpdateTab" />
    <section class="p-2">
      <ListTodo
        v-if="tab === '목록'"
        :listTabIndex="listTabIndex"
        :todoListInfos="todos"
      />
      <AddTodo />
    </section>
  </div>
</template>

<script>
import { TAB } from "./constants.js";

import Header from "./header.vue";
import ListTodo from "./list/listTodo.vue";
import AddTodo from "./add/addTodo.vue";

import { mapState } from "vuex";

export default {
  name: "todo-component",
  components: {
    Header,
    ListTodo,
    AddTodo,
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

  methods: {
    handleUpdateTab(tab) {
      this.tab = tab;
    },

    handleClickedListTab(newListTabIndex) {
      this.listTabIndex = newListTabIndex;
    },
  },
};
</script>
