<script setup>
import { useWindowSize } from '@vueuse/core'
import { ref, watch } from 'vue'
import ImageFlow from '~/components/common/dynamic/ImageFlow.vue'

const { width } = useWindowSize()
const renderCounter = ref(1)

function forceRender() {
  renderCounter.value += 1
}

watch(
  width,
  () => {
    forceRender()
  },
  { immediate: false },
)
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
          <div class="text-primary-content">
            <ul class="ml-5 gap-2 space-y-2">
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
        <!-- <div class="w-full">
          <span class="font-bold md:text-3xl text-lg">
            Nuestros Proyectos
          </span>
        </div>
        <div class="w-full">
          <span class="font-bold md:text-3xl text-lg">
            Eventos
          </span>
        </div> -->
        <div class="w-full">
          <span class="font-bold md:text-3xl text-lg">
            Manifiesto HackLab
          </span>
          <div class="text-primary-content">
            <ul class="ml-5 space-y-4">
              <li>
                El conocimiento es un pilar fundamental del desarrollo humano, es libre y no
                debería privarse.
              </li>
              <li>
                La tecnología es un medio, mas no el fin. Es una herramienta de las muchas
                para la transformación y evolución a una sociedad mejor.
              </li>
              <li>
                La privacidad y los datos personales son derechos humanos
                fundamentales.
              </li>
              <li>
                La colaboración, contribución y participación abierta son clave para el
                desarrollo de tecnología con conciencia y responsabilidad social.
              </li>
              <li>
                Es importante fomentar la inclusión y diversidad en todos los aspectos.
              </li>
              <li>
                Nada es absolutamente cierto, ni absolutamente falso, las respuestas más
                interesantes se encuentran en el terreno de lo matizado.
              </li>
              <li>
                Debemos manejar, enseñar y difundir tecnología de forma crítica y reflexiva.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
