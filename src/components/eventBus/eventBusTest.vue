<template>
  <div>
    <testComponent name="할아버지">
      <testComponent name="부모">
        <testComponent name="자식">
          <testComponent name="손자" />
        </testComponent>
      </testComponent>
    </testComponent>

    <p class="text-gray-500 p-3">클릭 로그</p>
    <ul>
      <li class="text-[10px] text-gray-500" v-for="log in logs" :key="log">
        {{ log }}
      </li>
    </ul>
  </div>
</template>

<script>
import testComponent from "./testComponent.vue";
import { EventBus } from "./myEventBus.js";

export default {
  props: {},
  components: {
    testComponent,
  },
  mounted() {
    EventBus.$on("update:active", (name) => {
      this.logs.push(`${name} is active ${new Date()}`);
      console.log(name);
    });
    EventBus.$on("update:unActive", (name) => {
      this.logs.push(`${name} is unActive ${new Date()}`);
    });
  },
  data() {
    return {
      logs: [],
    };
  },
};
</script>
