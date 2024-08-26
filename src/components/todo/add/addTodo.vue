<template>
  <section class="flex flex-col items-center gap-3">
    <Title titleText="할 일 추가"></Title>
    <input
      type="text"
      class="p-3 border-2 bg-gray-100 rounded-sm w-full"
      placeholder="title"
      v-model="title"
    />
    <textarea
      class="p-3 bg-gray-100 rounded-sm w-full h-[400px]"
      placeholder="description"
      v-model="description"
    />

    <button
      class="flex justify-center items-center border-none text-red-300"
      @click="addTodoList"
    >
      <img src="@/assets/추가.svg" alt="추가하기~!" />
    </button>
  </section>
</template>

<script>
import Title from "../Title.vue";

import { getCurrentTimeStamp } from "@/utils/date";

export default {
  name: "add-todo",
  components: {
    Title,
  },

  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    addTodoList() {
      if (!this.isValid(this.title) || !this.isValid(this.description)) {
        alert("제목과 내용을 입력해주세요.");
        return;
      }

      const newTodo = this.createDodo();

      this.$emit("update:todos", newTodo);

      this.initData();
    },
    initData() {
      this.title = "";
      this.description = "";
    },
    // 좋은 구조는 아님. addTodo가 왜 createDodo를 알아야 하는가? index에서 해결해야 함.
    createDodo() {
      return {
        title: this.title,
        description: this.description,
        isDone: false,
        created_at: getCurrentTimeStamp(),
        finished_at: null,
      };
    },

    isValid(val) {
      return !this.isNil(val) && val !== "";
    },

    isNil(val) {
      return val === null || val === undefined;
    },
  },
  watch: {},
};
</script>
