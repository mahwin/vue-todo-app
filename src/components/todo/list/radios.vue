<template>
  <div class="flex w-full gap-2">
    <form id="radioForm" class="flex gap-2 justify-center items-center">
      <label v-for="option in options" :key="option"
        ><input
          type="radio"
          name="radioGroup"
          :value="option"
          v-model="listOption"
          @change="handleChangedListOption"
        />
        {{ option }}</label
      >
    </form>
  </div>
</template>

<script>
import { LIST_OPTIONS } from "../constants.js";
import { mapState } from "vuex";

export default {
  name: "radios-component",

  computed: {
    ...mapState(["listOption"]),
  },

  data() {
    return {
      options: LIST_OPTIONS,
    };
  },

  methods: {
    handleChangedListOption(evt) {
      this.$store.dispatch("changeListOption", evt.target.value);
    },
  },
};
</script>
