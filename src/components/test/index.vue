<template>
  <div class="flex flex-col gap-8">
    <colCenter class="bg-red-100 h-20">
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </colCenter>
    <colEndCenter class="bg-blue-100 h-20">
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </colEndCenter>
    <rowCenter class="bg-orange-100 h-20">
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </rowCenter>
    <rowEndCenter class="bg-purple-100 h-20">
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </rowEndCenter>
  </div>
</template>

<script>
import { Flex } from "../../ui/Flex";

export default {
  name: "test-component",
  props: {},
  components: {
    colCenter: Flex.ColCenter,
    colEndCenter: Flex.ColEndCenter,
    rowCenter: Flex.RowCenter,
    rowEndCenter: Flex.RowEndCenter,
  },
};
</script>
