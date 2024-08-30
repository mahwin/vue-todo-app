<template>
  <div>
    <Header :tab="tab" @update:tab="handleUpdateTab" />
    <section class="p-2">
      <ListTodo
        v-if="tab === '목록'"
        :listTabIndex="listTabIndex"
        :todoListInfos="sortedTodoList"
        @update:finishedTodo="handleFinishedTodo"
        @update:clickedListTap="handleClickedListTab"
        @update:sortedOption="handleChangeSortedOption"
      />
      <AddTodo v-else @update:todos="handleAddTodo" />
    </section>
  </div>
</template>

<script>
import { TAB } from "./constants.js";
// import { TODO_LIST_INFOS } from "./db.js";

import Header from "./header.vue";
import ListTodo from "./list/listTodo.vue";
import AddTodo from "./add/addTodo.vue";

import { getCurrentTimeStamp } from "@/utils/date";

import { authApi, userId, serviceUrl } from '@/api'
import { joinPath } from '@/utils/config'

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
      sortedOption: "최신 순",
    };
  },

  created() {
    this.sortedTodo();
  },

  mounted() {
  this.getTodosInfo();
  },
  
  computed: {
    sortedTodoList() {
      this.sortedTodo();
      return this.todoListInfos;
    },
  },

  methods: {
    getTodosInfo(){
      authApi.get(joinPath(serviceUrl,userId))
      .then(({data})=>{
        
    if(data.success) {
      this.todoListInfos = data.data;
    }
  })
    },

    handleUpdateTab(tab) {
      this.tab = tab;
    },
    handleAddTodo(newTodo) {
      authApi.post(joinPath(serviceUrl, userId),newTodo);
      this.todoListInfos.push(newTodo);
    },
    handleFinishedTodo(todoId) {
      // const copy = this.todoListInfos.map((todo) => {
      //   if (todo.id === todoId) {
      //     return { ...todo, isDone: true, finished_at: getCurrentTimeStamp() };
      //   }
      //   return todo;
      // });

      // this.todoListInfos = copy;
      // console.log(todoId)

      authApi.put(joinPath(serviceUrl, userId), {id:todoId, isDone:true});
      this.getTodosInfo();

    },
    handleClickedListTab(newListTabIndex) {
      this.listTabIndex = newListTabIndex;
    },

    handleChangeSortedOption(newSortedOption) {
      this.sortedOption = newSortedOption;
      this.sortedTodo();
    },

    sortedTodo() {
      // 더 좋은 구조로 변경해야 함.

      this.sortedOption === "최신 순"
        ? (this.todoListInfos = this.todoListInfos.sort(
            (a, b) => b.created_at - a.created_at
          ))
        : (this.todoListInfos = this.todoListInfos.sort(
            (a, b) => a.created_at - b.created_at
          ));
    },

  },
};
</script>
