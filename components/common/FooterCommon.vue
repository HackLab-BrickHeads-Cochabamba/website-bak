<script setup lang="ts">

export interface SocialProps {
  name: string;
  link: string;
}

withDefaults(defineProps<{ socials?: Array<SocialProps> }>(), {
  socials: () => []
});

const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 mt-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Logo Section (left column) -->
      <div class="hidden md:block w-[120px] md:w-[200px] p-2">
        <NuxtImg src="hacklab/square_white.png" />
      </div>

      <!-- Sección de Contacto (middle column) -->
      <div class="space-y-2">
        <h3 class="text-base font-bold mb-4 md:text-3xl">Contacto</h3>
        <div class="flex items-top space-x-2 hover:text-gray-300 transition-colors">
          <Icon name="ion:mail-outline" size="30"/>
          <p>hacklab.brickheads@gmail.com</p>
        </div>
        <div class="flex items-top space-x-2 hover:text-gray-300 transition-colors">
          <Icon name="uil:whatsapp" size="30"/>
          <p>+591 79723232</p>
        </div>
        
        <div class="flex items-top space-x-2 hover:text-gray-300 transition-colors">
        <Icon name="uil:location-point" size="30"/>
        <p>
          Proyecto mARTadero <br>
          Calle 27 de Agosto y Ollantay <br>
          Cochabamba, Bolivia
        </p>
        </div>
      </div>

      <!-- Sección de Redes (right column) -->
      <div class="space-y-2">
        <h3 class="text-base font-bold mb-4 md:text-3xl">Síguenos</h3>
        <a 
        v-for="social in socials" 
        :key="social.name"
        :href="social.link"
        target="_blank"
        class="flex items-top space-x-2 hover:text-gray-300 transition-colors"
        >
          <Icon :name="'uil-' + (social.name).toLowerCase()" size="30"/>
          <p>{{ social.name }}</p>
        </a>
      </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
      <p>Made with <Icon name="uil-heart" size="15"/> by HackLab BrickHeads {{ year }}</p>
      </div>
    </div>
  </footer>
</template>