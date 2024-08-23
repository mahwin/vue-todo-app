<template>
  <section class="flex flex-col items-center gap-3">
    <h1 class="text-2xl items-start w-full">할 일 추가</h1>
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
export default {
  name: "add-todo",

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
    createDodo() {
      return { title: this.title, description: this.description };
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
