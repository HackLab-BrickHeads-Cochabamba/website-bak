<template>
  <button class="btn btn-primary">Success</button>
  <!-- <button
    class="border-2 border-neutral-900 px-4 py-2 rounded-3xl bg-lime-400 hover:bg-lime-300 active:bg-lime-500 shadow-lg"
    @click="onclick"
  >
    <slot></slot>
  </button> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    onclick() {
      this.$emit("click");
    },
  },
});
</script>
