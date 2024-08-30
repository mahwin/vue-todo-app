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
import { SORT_OPTIONS } from "../constants.js";

export default {
  name: "filter-component",

  computed: {
    ...mapState(["sortedOption"]),
  },

  data() {
    return {
      options: SORT_OPTIONS,
    };
  },
  methods: {
    handleChangeSortedOption(e) {
      this.$store.dispatch("changeSortedOption", e.target.value);
    },
  },
};
</script>
