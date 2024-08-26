<template>
  <component :is="tag" class="flex flex-col items-center justify-end w-full">
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
