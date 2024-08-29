<template>
  <span class="text-sm text-gray-400">{{ getLocaleString(dateInfo) }}</span>
</template>

<script>
import { timeStampToLocaleString } from "@/utils/date";

export default {
  name: "date-display",
  props: {
    dateInfo: {
      type: Number,
      required: true,
    },
  },

  methods: {
    getLocaleString(dateInfo) {
      return timeStampToLocaleString(dateInfo);
    },
  },
};
</script>

<style></style>
