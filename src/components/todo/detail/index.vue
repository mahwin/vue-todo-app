<template>
  <div>
    <Header />
    <section>
      <p v-show="todo.isDone">[완료함]</p>
      <h1>제목 : {{ todo.title }}</h1>
      <p>내용 : {{ todo.description }}</p>

      <button @click="goBack">뒤로 가기</button>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Header from "../header.vue";

export default {
  name: "detail-component",
  components: {
    Header,
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["getTodoById"]),
    todoId() {
      return this.$route.params.id;
    },
    todo() {
      return this.getTodoById(this.todoId);
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
button {
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
}

section {
  padding: 12px;
}
</style>
