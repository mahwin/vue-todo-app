<template>
  <component :is="tag" :class="computedClass">
    <slot></slot>
  </component>
</template>

<script>
import { classNames } from "./constants";

export default {
  name: "Flex-Component",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      classNames,
    };
  },
  computed: {
    computedClass() {
      return this.classNames[this.className] || "";
    },
  },
};
</script>
