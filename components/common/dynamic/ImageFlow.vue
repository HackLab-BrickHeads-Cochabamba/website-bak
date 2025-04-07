<script lang="ts" setup>
import type { Elements } from '@vue-flow/core'
import { useVueFlow, VueFlow } from '@vue-flow/core'
import { onMounted, onUnmounted, ref } from 'vue'
import { defineNodes } from './elements'

const { onPaneReady, onNodeMouseEnter, panOnDrag } = useVueFlow()
panOnDrag.value = false

const subject = ref('technology')
const subjectIndex = ref(0)
const subjects = [
  'technology',
  'education',
  'science',
  'society',
]
const translations = {
  technology: 'Tecnología',
  science: 'Ciencia',
  society: 'Sociedad',
  education: 'Educación',
}
const zoom = ref(2)
const flowView = ref(null)
const elements = ref(redefineNode(window.innerWidth))
const timer = ref<number | undefined>(undefined)

function redefineNode(width: number): Elements {
  const elements: Elements = defineNodes(
    Math.round(0.125 * width),
    Math.round(0.1 * width),
    Math.round(0.05 * width),
  )
  return elements
}

function translation(key: string) {
  return translations[key]
}

onPaneReady(({ fitView }) => {
  fitView()
})

onNodeMouseEnter(({ node }) => {
  subject.value = node.id
  subjectIndex.value = subjects.findIndex(name => name === subject.value)
})

function activeScrollableWheel(event) {
  if (event.deltaY !== 0) {
    window.scrollBy(0, event.deltaY)
  }
}

onMounted(() => {
  timer.value = setInterval(() => {
    subjectIndex.value = (subjectIndex.value + 1) % subjects.length
    subject.value = subjects[subjectIndex.value]
  }, 3000)
  flowView.value.$el.addEventListener('wheel', activeScrollableWheel, { passive: false })
})

onUnmounted(() => {
  flowView.value.$el.removeEventListener('wheel', activeScrollableWheel)
  clearInterval(timer.value)
})
</script>

<template>
  <div :style="{ width: '100%' }" class="relative xl:h-[800px] lg:h-[600px] md:h-[500px] sm:h-[350px] h-[200px]">
    <div
      class="
        absolute uppercase flex justify-center items-center h-full w-full text-primary-content
        xl:text-9xl lg:text-6xl md:text-4xl sm:text-3xl text-lg
        xl:tracking-[4rem] lg:tracking-[2rem] md:tracking-[2rem] sm:tracking-[1rem] tracking-[1rem]
        pb-3
      "
    >
      <span class="pt-4 -mr-6 opacity-50">{{ translation(subject) }}</span>
    </div>
    <VueFlow
      ref="flowView"
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
  filter: drop-shadow(0 0 20px rgba(172, 252, 81, 0.85)) !important;
}

.vue-flow__node {
  animation: blink 3s ease-in infinite;
}

@keyframes blink {
  0% {
    filter: drop-shadow(0 0 20px rgba(172, 252, 81, 0.70));
  }
  30% {
    filter: drop-shadow(0 0 25px rgba(172, 252, 81, 0.80));
  }
  50% {
    filter: drop-shadow(0 0 25px rgba(172, 252, 81, 0.85));
  }
  80% {
    filter: drop-shadow(0 0 25px rgba(172, 252, 81, 0.80));
  }
  100% {
    filter: drop-shadow(0 0 20px rgba(172, 252, 81, 0.70));
  }
}
</style>
