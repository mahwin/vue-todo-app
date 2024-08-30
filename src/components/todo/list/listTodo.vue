<template>
  <section class="flex flex-col items-center gap-3 relative">
    <Title titleText="할 일 목록" />
    <div class="flex w-full px-2">
      <Radios />
      <FilterComponent :options="sortOptions" />
    </div>
    <ul class="flex p-2 w-full flex-col gap-4">
      <li
        :class="{
          hidden: !isVisible(todoListInfo),
        }"
        v-for="todoListInfo in todoListInfos"
        :key="todoListInfo.id"
        class="p-2 border-2 rounded-md border-gray-300"
      >
        <div class="flex gap-4">
          <h3 :class="{ isDone: todoListInfo.isDone }">
            제목 : {{ todoListInfo.title }}
          </h3>
          <span>/</span>
          <span :class="{ isDone: todoListInfo.isDone }">{{
            todoListInfo.description
          }}</span>
          <button
            @click="handleClickfinishedTodo(todoListInfo.id)"
            v-if="!todoListInfo.isDone"
            class="bg-blue-500 border-none text-white"
          >
            완료하기
          </button>
        </div>
        <div class="flex items-center">
          <DateDisplay :dateInfo="todoListInfo.createdAt" />
          <div class="flex items-center" v-if="todoListInfo.finishedAt != null">
            <span class="text-gray-400">&nbsp;~&nbsp;</span>
            <DateDisplay :dateInfo="todoListInfo.finishedAt" />
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import Title from "../Title.vue";
import Radios from "./radios.vue";
import DateDisplay from "./displayDate.vue";
import FilterComponent from "./filter.vue";

import { SORT_OPTIONS } from "../constants.js";

export default {
  name: "list-todo",
  components: {
    Title,
    Radios,
    DateDisplay,
    FilterComponent,
  },
  props: {
    todoListInfos: Array,
    listTabIndex: Number,
  },
  data() {
    return {
      sortOptions: SORT_OPTIONS,
    };
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
