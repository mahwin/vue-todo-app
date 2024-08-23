<template>
  <div class="flex p-1 gap-2">
    <button
      v-for="tabName in TABS"
      :key="tabName"
      :class="tab === tabName && 'isClicked'"
      @click="clickTap(tabName)"
    >
      {{ tabName }}
    </button>
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
  methods: {
    clickTap(newTab) {
      if (newTab === this.tab) return;

      this.$emit("update:tab", newTab);
    },
  },
  watch: {},
};
</script>

<style>
button {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  width: 5rem;
  border: 1px solid #333;
  border-radius: 0.25rem;
  background-color: #fff;
  cursor: pointer;
}

.isClicked {
  background-color: #3182ce;
  color: #fff;
  cursor: not-allowed;
}
</style>
