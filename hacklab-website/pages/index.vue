<script setup>
  import { ref, watch } from 'vue'
  import { useWindowSize } from "@vueuse/core";
  import ImageFlow from '~/components/common/dynamic/ImageFlow.vue';
  const { width } = useWindowSize();
  const renderCounter = ref(1);

  const forceRender = () => {
    console.log('demo')
    renderCounter.value += 1;
  }

  watch(
    width,
    () => {
      forceRender();
    },
    { immediate: false }
  );
</script>
<template>
  <div>
    <ClientOnly>
      <ImageFlow :key="renderCounter" />
    </ClientOnly>
    <div class="w-full text-center text-primary-content py-10 text-sm md:text-2xl font-extralight">
      Espacio Hacker de conocimiento abierto, experimentación y aprendizaje colectivo
    </div>
    <div class="flex justify-center p-4">
      <div class="max-w-4xl flex flex-col gap-10">
        <div class="w-full">
          <div class="font-bold md:text-3xl text-lg">
            Pilares
          </div>
          <div>
            <ul class="ml-5">
              <li>
                <strong>T</strong>ecnologia
              </li>
              <li>
                <strong>E</strong>ducacion
              </li>
              <li>
                <strong>C</strong>iencia
              </li>
              <li>
                <strong>S</strong>ociedad
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full">
          <span class="font-bold md:text-3xl text-lg">
            Nuestros Proyectos
          </span>
        </div>
        <div class="w-full">
          <span class="font-bold md:text-3xl text-lg">
            Eventos
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
