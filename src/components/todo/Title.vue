<template>
  <h1 class="text-2xl items-start w-full">{{ titleText }}</h1>
</template>

<script>
export default {
  name: "title-component",
  props: {
    titleText: String,
  },
};
</script>
