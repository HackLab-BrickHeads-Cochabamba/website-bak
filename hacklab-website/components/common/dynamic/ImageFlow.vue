<script lang="ts" setup>
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { ref } from "vue";
import type { Elements } from "@vue-flow/core";
import { defineNodes } from "./elements";


const { onPaneReady, onNodeMouseEnter, panOnDrag } = useVueFlow();
panOnDrag.value = false;
const subject = ref("education");
const zoom = ref(2);
const elements = ref(redefineNode(window.innerWidth));

function redefineNode(width: number): Elements {
  
  const elements: Elements = defineNodes(
    Math.round(0.125 * width),
    Math.round(0.09 * width),
    Math.round(0.065 * width)
  );

  return elements
}

onPaneReady(({ fitView }) => {
  fitView();
});

onNodeMouseEnter(({ node }) => {
  subject.value = node.id;
});

const translations = {
  technology: "Tecnología",
  science: "Ciencia",
  society: "Sociedad",
  education: "Educación",
};

const translation = (key: string) => {
  return translations[key];
};
</script>

<template>
  <div :style="{ width: '100%' }" class="relative xl:h-[800px] lg:h-[600px] md:h-[500px] sm:h-[350px] h-[350px]">
    <div
      class="
        absolute uppercase flex justify-center items-center h-full w-full text-primary-content
        xl:text-9xl lg:text-6xl md:text-4xl sm:text-3xl text-2xl
        xl:tracking-[4rem] lg:tracking-[2rem] md:tracking-[2rem] sm:tracking-[1rem] tracking-[1rem]
      "
    >
      <span class="pt-4 -mr-6">{{ translation(subject) }}</span>
    </div>
    <VueFlow
      v-model="elements"
      :class="{ dark: false }"
      :min-zoom="zoom"
      :max-zoom="zoom"
    />
  </div>
</template>

<style lang="css">
/* import the required styles */
@import "@vue-flow/core/dist/style.css";
/* import the default theme (optional) */
@import "@vue-flow/core/dist/theme-default.css";

.vue-flow__node:hover {
  filter: drop-shadow(0 0 15px rgba(172, 252, 81, 0.65)) !important;
}

.vue-flow__node {
  animation: blink 3s ease-in infinite;
}

@keyframes blink {
  0% {
    filter: drop-shadow(0 0 10px rgba(172, 252, 81, 0.35));
  }
  30% {
    filter: drop-shadow(0 0 12px rgba(172, 252, 81, 0.45));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(172, 252, 81, 0.5));
  }
  80% {
    filter: drop-shadow(0 0 12px rgba(172, 252, 81, 0.45));
  }
  100% {
    filter: drop-shadow(0 0 10px rgba(172, 252, 81, 0.35));
  }
}
</style>
