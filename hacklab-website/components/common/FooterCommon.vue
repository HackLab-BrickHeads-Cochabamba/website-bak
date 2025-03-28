<script setup lang="ts">

export interface SocialProps {
  name: string;
  link: string;
}

withDefaults(defineProps<{ socials?: Array<SocialProps> }>(), {
  socials: () => []
});
</script>

<template>
  <footer class="py-8 mt-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Sección de Contacto -->
        <div class="space-y-2">
          <h3 class="text-xl font-bold mb-4">Contacto</h3>
          <p class="hover:text-gray-300 transition-colors">
            ✉️ hacklab.brickheads@gmail.com
          </p>
          <p class="hover:text-gray-300 transition-colors">
            📞 +591 79723232
          </p>
          <p class="hover:text-gray-300 transition-colors">
            <i class="pi-map-marker"/>
            📍Proyecto mARTadero <br>
            Calle 27 de Agosto y Ollantay <br>
            Cochabamba, Bolivia
          </p>
        </div>

        <!-- Sección de Redes -->
        <div class="space-y-2">
          <h3 class="text-xl font-bold mb-4">Síguenos</h3>
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.link"
            target="_blank"
            class="block hover:text-gray-300 transition-colors"
          >
            {{ social.name }}
          </a>
        </div>

        <!-- Sección del Equipo -->
        <div>
          <h3 class="text-xl font-bold mb-4">Nuestro equipo</h3>
          <NuxtLink to="/about" class="block hover:text-gray-300 transition-colors">
            Conoce a nuestro equipo
          </NuxtLink>
        </div>
      </div>

      <!-- Derechos de autor -->
      <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; 2025 HackLab BrickHeads. Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
</template>