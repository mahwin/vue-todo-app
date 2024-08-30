<template>
  <section class="flex flex-col items-center gap-3 relative">
    <Title titleText="할 일 목록" />
    <div class="flex w-full px-2">
      <Radios />
      <FilterComponent />
    </div>

    <ul class="flex p-2 w-full flex-col gap-4">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="p-2 border-2 rounded-md border-gray-300"
      >
        <div class="flex gap-4">
          <router-link :to="`/todos/${todo.id}`">
            <section class="flex gap-4">
              <h3 :class="{ isDone: todo.isDone }">제목 : {{ todo.title }}</h3>
              <span>/</span>
              <span :class="{ isDone: todo.isDone }">{{
                todo.description
              }}</span>
            </section>
          </router-link>
          <button
            @click="handleClickfinishedTodo(todo.id)"
            v-if="!todo.isDone"
            class="bg-blue-500 border-none text-white"
          >
            완료하기
          </button>
        </div>
        <div class="flex items-center">
          <DateDisplay :dateInfo="todo.createdAt" />
          <div class="flex items-center" v-if="todo.finishedAt != null">
            <span class="text-gray-400">&nbsp;~&nbsp;</span>
            <DateDisplay :dateInfo="todo.finishedAt" />
          </div>
        </div>
      </li>
    </ul>
    <button
      @click="handleClickDeleteTodo"
      class="p-2 rounded-lg bg-orange-500 border-none text-white"
    >
      할 일 삭제
    </button>
  </section>
</template>

<script>
import Title from "../Title.vue";
import Radios from "./radios.vue";
import DateDisplay from "./displayDate.vue";
import FilterComponent from "./filter.vue";
import { mapState, mapGetters } from "vuex";

import { SORT_OPTIONS } from "../constants.js";

export default {
  name: "list-todo",
  components: {
    Title,
    Radios,
    DateDisplay,
    FilterComponent,
  },
  data() {
    return {
      sortOptions: SORT_OPTIONS,
    };
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["maxId"]),
  },

  methods: {
    handleClickfinishedTodo(todoId) {
      this.$store.dispatch("finishedTodo", {
        id: todoId,
        finishedAt: new Date().getTime(),
        isDone: true,
      });
    },

    isVisible(todoListInfo) {
      if (this.listTabIndex === 0) return true;
      if (this.listTabIndex === 1 && todoListInfo.isDone) return true;
    },

    handleChangeListOption(newListTap) {
      this.$store.dispatch("changeListOption", newListTap);
    },

    handleClickDeleteTodo() {
      const deleteId = this.$store.getters.maxId;
      this.$store.dispatch("deleteTodo", deleteId);
    },
  },
};
</script>

<style scoped>
.isDone {
  text-decoration: line-through;
}

.hidden {
  display: none;
}
</style>
