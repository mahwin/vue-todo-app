<template>
  <select
    id="options"
    name="options"
    class="bg-blue-200 rounded-sm"
    :value="sortedOption"
    @change="handleChangeSortedOption"
  >
    <option v-for="optionInfo in options" :key="optionInfo" :value="optionInfo">
      {{ optionInfo }}
    </option>
  </select>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "filter-component",
  props: { options: Array },

  computed: {
    ...mapState(["sortedOption"]),
  },

  methods: {
    handleChangeSortedOption(e) {
      this.$store.dispatch("changeSortedOption", e.target.value);
    },
  },
};
</script>
