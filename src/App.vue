<template>
  <div id="app" class="h-screen flex justify-center items-center bg-blue-200">
    <LayoutComponent><TodoComponenet /></LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "./components/layout";
import TodoComponenet from "./components/todo";

export default {
  name: "App",
  components: {
    LayoutComponent,
    TodoComponenet,
  },
};
</script>

<style></style>
