<template>
  <div>{{ todos[0] }}</div>
</template>

<script>
export default {
  name: "list-todo",

  data() {
    return {};
  },
  props: {
    todos: Array,
  },
  methods: {},
  watch: {},
};
</script>
