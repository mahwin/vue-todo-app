import Vue from "vue";
import Vuex from "vuex";
import { authApi, userId, serviceUrl } from "@/api";
import { joinPath } from "@/utils/config";

Vue.use(Vuex);

// table 설계 변경으로 인한 데이터 필터링
function filter(todos) {
  return todos
    .filter((todo) => todo.createdAt != null)
    .map((todo) => {
      todo.createdAt = new Date(todo.createdAt).getTime();
      if (todo.finishedAt != null)
        todo.finishedAt = new Date(todo.finishedAt).getTime();
      return todo;
    })
    .slice(7); // <= 데이터 삭제 기능 없어서 초기 데이터 slice로 날림.
}

function sortByCreatedAt(option, datas) {
  return option === "최신 순"
    ? datas.sort((a, b) => b.createdAt - a.createdAt)
    : datas.sort((a, b) => a.createdAt - b.createdAt);
}

function filteredByIsDone(datas) {
  return datas.filter((todo) => todo.isDone);
}

function filterAndSortTodos(datas, sortedOption, listOption) {
  const filtedTodos = filter(datas);
  const sortedByCreatedAt = sortByCreatedAt(sortedOption, filtedTodos);
  return listOption === "전체 할 일"
    ? sortedByCreatedAt
    : filteredByIsDone(sortedByCreatedAt);
}

export default new Vuex.Store({
  state: {
    todos: [],
    originalTodos: [],
    tab: "목록",
    listOption: "전체 할 일",
    sortedOption: "최신 순",
  },
  mutations: {
    addTodo: () => {},
    finishedTodo: () => {},

    setTodos: (state, { data: newTodos }) => {
      state.originalTodos = newTodos;

      const { sortedOption, listOption } = state;
      state.todos = filterAndSortTodos(
        state.originalTodos,
        sortedOption,
        listOption
      );
    },

    // ToDo sorted, list option 함수 묶기
    setSortedOption: (state, newSelected) => {
      state.sortedOption = newSelected;

      state.todos = filterAndSortTodos(
        state.originalTodos,
        state.sortedOption,
        state.listOption
      );
    },
    setListOption: (state, newListOption) => {
      state.listOption = newListOption;

      state.todos = filterAndSortTodos(
        state.originalTodos,
        state.sortedOption,
        state.listOption
      );
    },
  },
  actions: {
    getTodos: ({ commit }) => {
      authApi.get(joinPath(serviceUrl, userId)).then(({ data }) => {
        commit("setTodos", data);
      });
    },
    addTodo: ({ dispatch }, todo) => {
      authApi.post(joinPath(serviceUrl, userId), todo).then(() => {
        dispatch("getTodos");
      });
    },
    finishedTodo: ({ dispatch }, updateTodo) => {
      authApi.put(joinPath(serviceUrl, userId), updateTodo).then(() => {
        dispatch("getTodos");
      });
    },
    changeSortedOption: ({ commit }, newSelected) => {
      commit("setSortedOption", newSelected);
    },
    changeListOption: ({ commit }, newListOption) => {
      commit("setListOption", newListOption);
    },
    deleteTodo: ({ dispatch }, deleteTodoId) => {
      console.log(deleteTodoId, "도착까지 확인");
      console.log("delete 메소드 관련 api 설계 필요");
      dispatch;
      // 통신필요
      //   authApi
      //     .delete(joinPath(serviceUrl, userId, deleteTodo.id))
      //     .then((res) => {
      //       console.log(res);
      //       // dispatch("getTodos");
      //     });
    },
  },
  getters: {
    maxId: (state) => {
      if (state.todos.length === 0) return 0;
      return Math.max(...state.todos.map((todo) => todo.id));
    },
    getTodoById: (todoId) => {
      const targetIdx = this.todos.findIndex((todo) => todo.id == todoId);
      if (targetIdx === -1) return {};
      return this.todos[targetIdx];
    },
  },
});
