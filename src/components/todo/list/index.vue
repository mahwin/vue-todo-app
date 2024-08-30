<template>
  <div>
    <Header />
    <section class="p-2">
      <ListTodo />
    </section>
  </div>
</template>

<script>
import Header from "../header.vue";
import ListTodo from "./listTodo.vue";

import { mapState } from "vuex";

export default {
  name: "todo-component",
  components: {
    Header,
    ListTodo,
  },

  computed: {
    ...mapState(["todos"]),
  },

  methods: {},
};
</script>
