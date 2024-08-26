<template>
  <select
    id="options"
    name="options"
    class="bg-blue-200 rounded-sm"
    v-model="selectedOption"
  >
    <option v-for="optionInfo in options" :key="optionInfo" :value="optionInfo">
      {{ optionInfo }}
    </option>
  </select>
</template>

<script>
export default {
  name: "filter-component",
  props: { options: Array },
  data() {
    return {
      selectedOption: this.options[0],
    };
  },
  watch: {
    selectedOption(newOption) {
      this.$emit("update:sortedOption", newOption);
    },
  },
};
</script>
