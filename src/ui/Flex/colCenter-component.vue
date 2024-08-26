<template>
  <component :is="tag" class="flex flex-col items-center justify-center w-full">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
};
</script>
