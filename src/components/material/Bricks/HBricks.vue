<script lang="ts" setup>
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { ref, watch } from "vue";
import type { Elements } from "@vue-flow/core";
import { useWindowSize } from "@vueuse/core";
import { defineNodes } from "./elements";

const { onPaneReady, panOnDrag, onNodeMouseEnter } = useVueFlow();
const { width } = useWindowSize();
panOnDrag.value = false;

const renderCounter = ref(0);
const subject = ref("education");
const letterSpacing = ref("100px");
const elements = ref(redefineNode(width.value));

function redefineNode(width: number): Elements {
  let elements: Elements = [];
  panOnDrag.value = false;
  if (width > 1550) {
    elements = defineNodes();
    letterSpacing.value = "100px";
  } else if (width > 1400) {
    elements = defineNodes(150, 75, 100);
    letterSpacing.value = "80px";
  } else if (width > 800) {
    elements = defineNodes(120, 60, 80);
    letterSpacing.value = "30px";
  } else {
    elements = defineNodes();
    panOnDrag.value = true;
  }
  return elements;
}

onPaneReady(({ fitView }) => {
  fitView();
});

onNodeMouseEnter(({ node }) => {
  subject.value = node.id;
});

watch(width, (newWidth: number) => {
  elements.value = redefineNode(newWidth);
  renderCounter.value += 1;
});
</script>

<template>
  <div :style="{ height: '720px', width: '100%' }" class="relative">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase opacity-20 lg:text-9xl md:text-8l sm:text-3xl"
      :style="{
        letterSpacing,
      }"
    >
      {{ subject }}
    </div>
    <VueFlow
      :key="renderCounter"
      v-model="elements"
      :class="{ dark: false }"
      class="basicflow"
      :min-zoom="2"
      :max-zoom="2"
      panemova
    />
  </div>
</template>

<style lang="css">
/* import the required styles */
@import "@vue-flow/core/dist/style.css";
/* import the default theme (optional) */
@import "@vue-flow/core/dist/theme-default.css";

.vue-flow__node:hover {
  filter: drop-shadow(0 0 40px rgba(172, 252, 81, 0.95)) !important;
}

.vue-flow__node {
  animation: blink 3s ease-in infinite;
}

@keyframes blink {
  0% {
    filter: drop-shadow(0 0 30px rgba(172, 252, 81, 0.35));
  }
  30% {
    filter: drop-shadow(0 0 35px rgba(172, 252, 81, 0.45));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(172, 252, 81, 0.55));
  }
  80% {
    filter: drop-shadow(0 0 35px rgba(172, 252, 81, 0.45));
  }
  100% {
    filter: drop-shadow(0 0 30px rgba(172, 252, 81, 0.35));
  }
}
</style>
