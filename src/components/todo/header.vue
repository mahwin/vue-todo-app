<template>
  <div class="flex p-1 gap-2">
    <ul>
      <li>
        <router-link to="/todos">목록</router-link>
      </li>
      <li>
        <router-link to="/add-todo">추가</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header-component",
  data: () => ({
    TABS: ["목록", "추가"],
  }),
  props: {
    tab: String,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  gap: 24px;
}
li {
  padding: 12px;
}
</style>
