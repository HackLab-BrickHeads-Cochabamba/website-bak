<template>
  <div
    :class="
      theme === 'light'
        ? 'border-2 border-neutral-900 px-4 py-2 bg-lime-400 text-black rounded-md shadow-md'
        : theme == 'dark'
        ? 'border-2 border-lime-400 px-4 py-2 bg-neutral-900 text-white rounded-md shadow-md shadow-neutral-600'
        : undefined
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

type Theme = "dark" | "light";

export default defineComponent({
  props: {
    theme: {
      type: String as PropType<Theme>,
      default: "light",
    },
  },
});
</script>
