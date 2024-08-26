<template>
  <div class="flex w-full gap-2">
    <form id="radioForm" class="flex gap-2 justify-center items-center">
      <label
        @click="clickRadio(radioInfo.id)"
        v-for="radioInfo in radioInfos"
        :key="radioInfo.id"
        ><input
          type="radio"
          name="radioGroup"
          :value="radioInfo.id"
          :checked="isChecked(radioInfo.id)"
        />
        {{ radioInfo.labelText }}</label
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "radios-component",
  props: {
    radioInfos: Array,
    listTabIndex: Number,
  },
  data() {
    return {};
  },

  methods: {
    isChecked(index) {
      return this.listTabIndex === index;
    },

    clickRadio(selectedRadioIndex) {
      this.$emit("update:clickedListTap-middle", selectedRadioIndex);
    },
  },
};
</script>
