<template>
  <div id="app" class="h-screen flex justify-center items-center bg-blue-200">
    <LayoutComponent><router-view></router-view></LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "./components/layout";
import { mapState } from "vuex";
import store from "./store";

export default {
  name: "App",
  store,
  components: {
    LayoutComponent,
  },
  computed: {
    ...mapState(["todos"]),
  },
  created() {
    this.$store.dispatch("getTodos");
  },
};
</script>
