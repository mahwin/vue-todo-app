<template>
  <div
    :class="{ active: isActive }"
    class="px-[24px] py-[36px] flex border-2 rounded-lg relative w-full"
    @click.stop="triggerAnimation"
  >
    <p class="text-gray-500 absolute top-[-12px]">{{ name }}</p>
    <slot> </slot>
  </div>
</template>

<script>
import { EventBus } from "./myEventBus";

export default {
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    triggerAnimation() {
      this.isActive = true;
      EventBus.$emit("update:active", this.name);
      setTimeout(() => {
        this.isActive = false;
        EventBus.$emit("update:unActive", this.name);
      }, 1000); // 1000ms 후에 배경색 애니메이션을 비활성화합니다.
    },
  },
  beforeDestroy() {
    EventBus.$off("update:active");
    EventBus.$off("update:unActive");
  },
};
</script>

<style>
.active {
  background-color: lavender;
  transition: background-color 1s ease;
}
</style>
