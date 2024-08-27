<template>
  <div class="flex flex-col gap-8">
    <Flex className="colCenter">
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </Flex>
    <Flex className="rowCenter">
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </Flex>
    <Flex className="rowEndCenter">
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </Flex>
    <Flex className="colEndCenter">
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </Flex>
  </div>
</template>

<script>
import Flex from "../../ui/Flex2";

export default {
  name: "test-component",
  props: {},
  components: {
    Flex,
  },
};
</script>
